import React, { useEffect, useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { ErrorMessage } from "@hookform/error-message";
import { Controller } from "react-hook-form";
import "./reactSelect.scss";
/**
 *
 * @param {
 *
 * name="string"
 * label: "string"
 * placeholder:"string"
 * fontWeight:"string"//bold,normal,light,italic
 * fontHeight:"string"//h1,h2,h3,h4,h5
 * isMulti={boolean}// if not defined or false single selected
 * getOptions={[{value:"sting",label:"Sting"},{value:"sting",label:"Sting"},...]}
 * required={"string"}//errors message
 * control={control}
 * errors={errors}
 *
 * }
 * @returns jsx
 */
export default function ReactSelect({
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
}) {
  const animatedComponents = makeAnimated();
  const [isLoading, setIsLoading] = useState(true);
  const [options, setOptions] = useState(null);
  console.log(options);
  useEffect(async () => {
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
    try {
      const options = await { getOptions };
      setOptions(options);
    } catch (error) {
      console.log(error);
      setOptions([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div id={`react-select${id}`} className="mb-3 mr-3 w-100">
      <p id={`label-react-select${id}`} className={`mb-2 ${fontHeight}`}>
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
          <Select
            classNamePrefix="select"
            className={`p-0`}
            closeMenuOnSelect={true}
            components={animatedComponents}
            placeholder={isLoading ? "Chargement..." : placeholder}
            isMulti={isMulti}
            options={options}
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
