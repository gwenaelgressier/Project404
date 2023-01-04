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
 *min="number in string"
 * max="number in string"
 *register={register}
 *errors={errors}
 * }
 * @returns jsx
 */

export const FormInputRange = ({
  id,
  text,
  name,
  label,
  required,
  accounted,
  min,
  max,
  register,
  errors,
}) => {
  if (accounted === "pro") {
    //add color if it is necessary or other
  }

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
          type="range"
          name={name}
          min={min}
          max={max}
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
    </>
  );
};
