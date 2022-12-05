import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import Navbar from "../navbar/Navbar";
import Editeur from "./Editeur";

export default function AddArticle() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <div>
      <Navbar />
      <div className="ms-5">
        <p className="mt-5 text-center">AddArticle</p>
      </div>
      <Editeur />
    </div>
  );
}
