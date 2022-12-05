import { Editor } from "@tinymce/tinymce-react";
import react, { useState } from "react";
import fb from "./firebase";
const db = fb.firestore();
const Blogs = db.collection("blogs");

export default function Editeur1() {
  const [title, SetTitle] = useState("");
  const [body, SetBody] = useState("");

  const sub = (e) => {
    e.preventDefault();
    // Add data to the store
    Blogs.add({
      Title: title,
      Body: body,
      publish: false,
      published_on: fb.firestore.Timestamp.fromDate(new Date()),
    })
      .then((docRef) => {
        alert("Data Successfully Submitted");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };
  return (
    <div>
      <form
        onSubmit={(event) => {
          sub(event);
        }}
      >
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => {
            SetTitle(e.target.value);
          }}
          required
        />
        <Editor
          textareaName="description"
          initialValue="<p>This is the initial content of the editor.</p>"
          init={{
            height: 500,
            menubar: false,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount",
            ],
            toolbar:
              "undo redo | formatselect | " +
              "bold italic backcolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
          onEditorChange={(newText) => SetBody(newText)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
