import React, { useEffect } from "react";
import { ErrorMessage } from "@hookform/error-message";

/**
 *
 * @param {
 *id="string"
 *text="string"
 *name="string"
 *label="string"
 *fontWeight="string"
 *fontHeight="string"
 *required={"string"}//errors message
 *accounted={accounted.kind }//if not completed default value is not pro
 *placeholder,
 *register={register}
 *errors={errors}
 * }
 * @returns jsx
 */

export const FormInputSearch = ({
  id,
  text,
  name,
  label,
  fontWeight,
  fontHeight,
  required,
  accounted,
  placeholder,
  register,
  errors,
}) => {
  if (accounted === "pro") {
    //add color if it is necessary or other
  }

  useEffect(() => {
    if (
      fontWeight === "bold" ||
      fontWeight === "normal" ||
      fontWeight === "light"
    ) {
      const elem = document.getElementById(`labelSearch${id}`);
      elem.classList.add(`font-weight-${fontWeight}`);
    }

    if (fontWeight === "italic") {
      const elem = document.getElementById(`labelSearch${id}`);
      elem.classList.add(`font-${fontWeight}`);
    }
  }, []);

  return (
    <div className="form-input-search mr-3">
      <label
        id={`labelSearch${id}`}
        htmlFor={`input${id}`}
        className={fontHeight}
      >
        {label}
        {required && label !== undefined && (
          <span className="text-danger">*</span>
        )}
      </label>
      <div>
        <input
          id={`input${id}`}
          className="mb-3 w-100"
          type="search"
          name={name}
          placeholder={placeholder}
          {...register(name, { required })}
        />
        <span className="ml-3">{text}</span>
      </div>
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
    </div>
  );
};
