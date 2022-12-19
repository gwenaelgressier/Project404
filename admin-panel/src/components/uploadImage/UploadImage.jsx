import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Picture } from "../media/svg/Picture";
import { isEmpty, timestampParser } from "../Utils";

export default function UploadImage({ setImg }) {
  const [isLoading, setIsLoading] = useState(true);
  const [postPicture, setPostPicture] = useState(null); //image afficher en front
  //const [file, setFile] = useState(); //fichier image envoyer au front
  const error = useSelector((state) => state.errorReducer.postError);
  const userData = useSelector((state) => state.userReducer);
  const [message, setMessage] = useState("");

  const handlePicture = (e) => {
    if (e.target.files.length !== 0) {
      setPostPicture(URL.createObjectURL(e.target.files[0]));
    }
    //setFile(e.target.files[0]);
    setImg(e.target.files[0]);
  };

  useEffect(() => {
    if (!isEmpty(userData)) setIsLoading(false);
  }, [userData, message]);

  return (
    <div>
      {isEmpty() && (
        <>
          <Picture />
          <input
            type="file"
            id="file-upload"
            name="file"
            accept=".jpg, .jpeg, .png, .gif"
            onChange={(e) => handlePicture(e)}
          />
        </>
      )}
      {!isEmpty(error.format) && <p>{error.format}</p>}
      {!isEmpty(error.maxSize) && <p>{error.maxSize}</p>}
    </div>
  );
}
