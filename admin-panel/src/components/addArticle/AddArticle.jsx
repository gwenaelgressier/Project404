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

export default function AddArticle() {
  const [message, setMessage] = useState();
  const [message2, setMessage2] = useState();
  const [message3, setMessage3] = useState();
  const [message4, setMessage4] = useState();
  const [message5, setMessage5] = useState();

  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const datas = {
        title: data.title,
        origin: data.origin,
        acroche: data.acroche,
        message: message,
        message2: message2,
        message3: message3,
        message4: message4,
        message5: message5,
        posterId: userData._id,
      };
      console.log("datas", datas);

      await dispatch(addPost(datas));
      dispatch(getPosts());
    } catch (err) {
      console.log(err);
    }
    console.log(JSON.stringify(data));
  };

  return (
    <div>
      <Navbar />
      <div className="ms-5">
        <p className="mt-5 text-center">AddArticle</p>
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
      <FormTextarea
        id="acroche"
        name="acroche"
        label="acroche"
        required={"Merci de saisire l'acroche"} //errors message
        placeholder="Acroche"
        register={register}
        errors={errors}
      />

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
