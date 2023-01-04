import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import FormInputText from "../form/FormInputText";
import { useForm } from "react-hook-form";
import ReactSelectAsync from "../form/ReactSelectAsync";
import FormTextarea from "../form/FormTextarea";
import { originService } from "../../services/origine";
import { postService } from "../../services/post";
import { useDispatch, useSelector } from "react-redux";
import { addPost, getPosts } from "../../actions/post.actions";
import Editeur from "./Editeur";
import "./addArticle.scss";
import UploadImage from "../uploadImage/UploadImage";

export default function AddArticle() {
  const [message, setMessage] = useState();
  const [img, setImg] = useState();

  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(img);
    try {
      const datas = new FormData();
      datas.append("title", data.title);
      datas.append("origin", data.origin);
      datas.append("acroche", data.acroche);
      datas.append("message", message);
      datas.append("posterId", userData._id);
      if (img) datas.append("file", img);

      console.log("datas", datas);

      await dispatch(addPost(datas));
      dispatch(getPosts());
    } catch (err) {
      console.log(err);
    }
    //console.log(JSON.stringify(data));
  };

  return (
    <div id="add-article">
      <Navbar />
      <div className="ms-5">
        <p className="mt-5 text-center title">AddArticle</p>
      </div>
      <div className="d-flex align-items-center">
        <div>
          <FormInputText
            id="title"
            name="title"
            label="Titre"
            required={"Merci de saisire le titre"} //errors message
            placeholder="Titre"
            register={register}
            errors={errors}
          />
        </div>
        <div className="ms-5">
          <ReactSelectAsync
            id="origin"
            name="origin"
            label="Origine"
            required={"Merci de saisire le genre"} //errors message
            placeholder="Origine"
            register={register}
            getOptions={originService.getOrigin}
            errors={errors}
            control={control}
          />
        </div>
      </div>
      <div className="d-flex align-items-center">
        <div>
          <FormTextarea
            id="acroche"
            name="acroche"
            label="acroche"
            required={"Merci de saisire l'acroche"} //errors message
            placeholder="Acroche"
            register={register}
            errors={errors}
          />
        </div>
        <div className="ms-5">
          <UploadImage setImg={setImg} />
        </div>
      </div>
      <Editeur setMessage={setMessage} />

      <button
        onClick={handleSubmit(onSubmit)}
        // disabled={isSubmiting}
        type="submit"
      >
        valider
      </button>
      <div dangerouslySetInnerHTML={{ __html: message }}></div>
    </div>
  );
}
