import { ErrorMessage } from "@hookform/error-message";
import React from "react";

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
 *register={register}
 *errors={errors}
 * }
 * @returns jsx
 */

export const FormInputNumber = ({
  id,
  text,
  name,
  label,
  required,
  accounted,
  placeholder,
  register,
  errors,
  defaultValue,
}) => {
  return (
    <div id={"form-input-text"}>
      <label htmlFor={id} className="d-block">
        {label}{" "}
        {required && label !== undefined && (
          <span className="text-danger">*</span>
        )}
      </label>
      <div>
        <input
          id={`input${id}`}
          className="w-100"
          type="text"
          name={name}
          placeholder={placeholder}
          defaultValue={defaultValue}
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
