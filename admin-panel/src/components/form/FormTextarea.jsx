import { ErrorMessage } from "@hookform/error-message";
import React, { useEffect } from "react";

/**
 *
 * @param {
 *id="string"
 *name="string"
 *accounted={accounted.kind }//if not completed default value is not pro
 *placeholder="string"
 *required={"string"}//errors message
 *label="string"
 *fontWeight:"string"//bold,normal,light,italic
 *fontHeight:"string"//h1,h2,h3,h4,h5
 *register={register}
 *errors={errors}
 * }
 * @returns jsx
 */
export default function FormTextarea({
  register,
  id,
  name,
  accounted,
  placeholder,
  required,
  label,
  fontWeight,
  fontHeight,
  errors,
}) {
  if (accounted === "pro") {
    //add color if it is necessary or other
  }

  useEffect(() => {
    if (
      fontWeight === "bold" ||
      fontWeight === "normal" ||
      fontWeight === "light"
    ) {
      const elem = document.getElementById("labelTextArea");
      elem.classList.add(`font-weight-${fontWeight}`);
    }

    if (fontWeight === "italic") {
      const elem = document.getElementById("labelTextArea");
      elem.classList.add(`font-${fontWeight}`);
    }
  }, []);

  return (
    <>
      <label id="labelTextArea" htmlFor={id} className={fontHeight}>
        {label} {required && <span className="text-danger">*</span>}
      </label>
      <textarea
        id={id}
        placeholder={placeholder}
        name={name}
        {...register(name, { required })} //: textrequired
      ></textarea>
      <div className="text-danger mt-2 errors-message">
        <ErrorMessage
          errors={errors}
          name={name}
          render={(messages) => {
            return messages
              ? Object.entries(messages).map(([type, message]) => (
                  <p className="errorMsg" key={type}>
                    {message}
                  </p>
                ))
              : null;
          }}
        />
      </div>
    </>
  );
}
