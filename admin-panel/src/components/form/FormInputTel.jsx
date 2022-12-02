import React from "react";
import { ErrorMessage } from "@hookform/error-message";

/**
 *
 * @param {
 *id="string"
 *text="string"
 *name="string"
 *label="string"
 *required={"string"}//errors message
 *accounted={accounted.kind }//if not completed default value is not pro
 *placeholder="string"
 *autoComplete= "string" //on or off
 *register={register}
 *errors={errors}
 * }
 * @returns jsx
 */

export const FormInputTel = ({
  id,
  text,
  name,
  label,
  required,
  accounted,
  placeholder,
  autoComplete,
  register,
  errors,
}) => {
  if (accounted === "pro") {
    //add color if it is necessary or other
  }

  const telRegex = new RegExp(
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
  );

  return (
    <>
      <label htmlFor={id} className="d-block">
        {label}{" "}
        {required && label !== undefined && (
          <span className="text-danger">*</span>
        )}
      </label>
      <div>
        <input
          id={`input${id}`}
          className="mb-3"
          type="tel"
          name={name}
          placeholder={placeholder}
          autoComplete={autoComplete}
          {...register(name, {
            required,
            pattern: {
              value: telRegex,
              message: required,
            },
          })}
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
    </>
  );
};
