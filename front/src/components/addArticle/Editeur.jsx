import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import "./editeur.scss";

export default function Editeur({ setMessage }) {
  const editorRef = useRef(null);

  const handleEditorChange = (value, editor) => {
    console.log("value", value);
    console.log("editor", editor);

    if (editorRef.current) {
      console.log(editorRef.current.getContent());
      setMessage(editorRef.current.getContent());
    }
  };

  return (
    <>
      <Editor
        // onEditorChange={handleEditorChange(value, editor)}
        onChange={handleEditorChange}
        apiKey="wh3rsjjaltu02vjk765oqrzui8ikpsxjwvp2b56wbhznylk5"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 210,
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | casechange blocks | bold italic backcolor | " +
            "alignleft aligncenter alignright alignjustify | " +
            "bullist numlist checklist outdent indent | removeformat | a11ycheck code table help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      {/* <button onClick={log}>Log editor content</button> */}
    </>
  );
}
