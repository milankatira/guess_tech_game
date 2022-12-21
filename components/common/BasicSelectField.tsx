import React from "react";
import { Field } from "formik";
import { SelectFieldProps } from "component";
const BasicSelectField: React.FC<SelectFieldProps> = ({
  error,
  options,
  inputLabel,
  name,
  disabled=false
}) => {
  return (
    <div className="relative mb-4">
      <label
        htmlFor="country"
        className="block uppercase text-gray-600 text-xs font-bold mb-2"
      >
        {inputLabel}
      </label>

      <Field
        as="select"
        id={name}
        disabled={disabled}
        name={name}
        className="select-none border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
      >
        <option value="none" selected disabled hidden>
          Select a {inputLabel}
        </option>
        {options &&
          options?.map((singleValue: any) => (
            <option value={singleValue.name} key={singleValue.name}>
              {singleValue.name}
            </option>
          ))}
      </Field>
      <span className="text-red-700 font-sans font-semibold">{error}</span>
    </div>
  );
};

export default BasicSelectField;
