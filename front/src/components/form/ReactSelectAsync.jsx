import React, { useEffect } from "react";
import AsyncSelect from "react-select/async";
import makeAnimated from "react-select/animated";
import { ErrorMessage } from "@hookform/error-message";
import { Controller } from "react-hook-form";
import "./reactSelectAsync.scss";
/**
 *
 * @param {
 *
 * id="string"
 * name="string"
 * label: "string"
 * placeholder:"string"
 * fontWeight:"string"//bold,normal,light,italic
 * fontHeight:"string"//h1,h2,h3,h4,h5
 * isMulti={boolean}// if not defined or false single selected
 * getOptions={[{value:"sting",label:"Sting"},{value:"sting",label:"Sting"},...]}
 * required={"string"}//errors message
 * accounted={accounted.kind }//if not completed default value is not pro
 * control={control}
 * errors={errors}
 *
 * }
 * @returns jsx
 */
export default function ReactSelectAsync({
  id,
  isMulti,
  getOptions,
  name,
  label,
  fontWeight,
  fontHeight,
  required,
  errors,
  control,
  placeholder,
  defaultValue,
}) {
  const animatedComponents = makeAnimated();

  useEffect(() => {
    if (
      fontWeight === "bold" ||
      fontWeight === "normal" ||
      fontWeight === "light"
    ) {
      const elem = document.getElementById(`label-react-select${id}`);
      elem.classList.add(`font-weight-${fontWeight}`);
      elem.classList.add(`mb-3}`);
    }

    if (fontWeight === "italic") {
      const elem = document.getElementById(`label-react-select${id}`);
      elem.classList.add(`font-${fontWeight}`);
      elem.classList.add(`mb-3}`);
    }
  }, []);

  return (
    <div id={`react-select${id}`} className="mb-3 mr-3 w-100">
      <label id={`label-react-select${id}`} className={`mb-2 ${fontHeight}`}>
        {label}
        {required && label !== undefined && (
          <span className="text-danger"> *</span>
        )}
      </label>
      <Controller
        name={name}
        control={control}
        rules={{ required }}
        render={({ field: { onChange }, fieldState: { error } }) => (
          <AsyncSelect
            classNamePrefix="select"
            className={`p-0`}
            closeMenuOnSelect={true}
            components={animatedComponents}
            placeholder={placeholder ?? "Chargement..."}
            isMulti={isMulti}
            isSearchable={true}
            onChange={(selectedOptions) => {
              {
                if (isMulti)
                  return onChange(
                    selectedOptions.map((option) => option.value)
                  );
                return onChange(selectedOptions.value);
              }
            }}
            loadOptions={getOptions}
            cacheOptions
            defaultOptions
            loadingMessage={() => "Chargement..."}
            noOptionsMessage={() => "Aucun résultat"}
          />
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
}
