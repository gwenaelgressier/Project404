import React from "react";
import { ErrorMessage } from "@hookform/error-message";

/**
 *
 * @param {
 *id="string"
 *text="string"
 *name="string"
 *label="string"
 *value="string"
 *required={"string"}//errors message
 *accounted={accounted.kind }//if not completed default value is not pro
 *register={register}
 *errors={errors}
 * }
 * @returns jsx
 */

export const FormInputCheckbox = ({
  id,
  text,
  name,
  label,
  value,
  required,
  accounted,
  register,
  errors,
}) => {
  if (accounted === "pro") {
    //add color if it is necessary or other
  }

  return (
    <div id="FormInputCheckbox">
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
          type="checkbox"
          value={value}
          name={name}
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
