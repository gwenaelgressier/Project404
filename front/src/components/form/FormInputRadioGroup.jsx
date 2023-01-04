import React, { useEffect } from "react";
import { ErrorMessage } from "@hookform/error-message";
import { Controller } from "react-hook-form";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import "./formInputRadioGroup.scss";

/**
 *
 * @param {
 * label="string"
 * fontWeight="string"//bold,normal,light,italic
 * fontHeight="string"//h1,h2,h3,h4,h5
 * name= "string"
 *accounted={accounted.kind }//if not completed default value is not pro
 * radios: [
 *  {value: "string", text: "sting" },
 *  {value: "string", text: "sting" },...
 * ]
 *required={"string"}//errors message
 *control={control}
 *errors={errors}
 * }
 *
 * @returns jsx
 */
export const FormInputRadioGroup = ({
  id,
  label,
  fontWeight,
  fontHeight,
  name,
  accounted,
  radios,
  required,
  control,
  errors,
}) => {
  useEffect(() => {
    if (
      fontWeight === "bold" ||
      fontWeight === "normal" ||
      fontWeight === "light"
    ) {
      const elem = document.getElementById(`label-toggle-button-group${id}`);
      elem.classList.add(`font-weight-${fontWeight}`);
    }

    if (fontWeight === "italic") {
      const elem = document.getElementById(`label-toggle-button-group${id}`);
      elem.classList.add(`font-${fontWeight}`);
    }
  }, []);

  if (accounted === "pro") {
    //add color if it is necessary or other
  }

  return (
    <div className="radio-group">
      <p id={`label-toggle-button-group${id}`} className={`mb-2 ${fontHeight}`}>
        {label}
        {required && label !== undefined && (
          <span className="text-danger"> *</span>
        )}
      </p>
      <Controller
        name={name}
        control={control}
        rules={{ required }}
        render={({ field: { onChange }, fieldState: { error } }) => (
          <ToggleButtonGroup
            name={name}
            onChange={onChange}
            error={error}
            className="mb-3"
          >
            {radios.map((radio, idx) => (
              <ToggleButton
                key={idx}
                className="mr-3 btn btn-blue btn btn-primary"
                id={`radio-${idx}`}
                name={name}
                value={radio.value}
              >
                {radio.text}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        )}
      />
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
  );
};
