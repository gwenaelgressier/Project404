import React from "react";
import { useForm } from "react-hook-form";
import { FormInputEmail } from "../form/FormInputEmail";
import { FormInputPassword } from "../form/FormInputPassword";
import { accountService } from "../../services/account";

export default function Log() {
  //const uid = useContext(UidContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (account) => {
    try {
      const data = {
        email: account.mail,
        password: account.password,
      };
      await accountService.signin(data);
    } catch (err) {
      console.log(err);
    }
    //console.log(JSON.stringify(data));
  };

  return (
    <div id="log" className="text-center mt-3">
      <p>AdminPanel</p>

      <FormInputEmail
        id="mail"
        name="mail"
        label="Mail"
        required={"Adresse mail non valide"} //errors message
        placeholder="votre adresse mail"
        register={register}
        errors={errors}
      />
      <div className="email error"></div>

      <FormInputPassword
        id="password"
        name="password"
        label="mot de passe"
        required={
          "Le mot de passe doit contenir une majuscule un chifre et un symbole"
        } //errors message
        placeholder=" saisire votre mot de passe"
        register={register}
        errors={errors}
      />
      <div className="password error"></div>

      <button
        onClick={handleSubmit(onSubmit)}
        // disabled={isSubmiting}
        type="submit"
      >
        <span>
          {/* {isSubmiting && (
            <span
              class="spinner-border spinner-border-sm mr-2"
              role="status"
              aria-hidden="true"
            ></span>
          )} */}
          Valider
        </span>
      </button>
    </div>
  );
}
