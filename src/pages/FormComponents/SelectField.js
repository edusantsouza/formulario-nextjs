import React, { useState, useEffect } from "react";

const SelectField = ({
  disabled = false,
  options,
  label,
  content,
  setContent,
  width,
  display,
  name,
  reset,
}) => {
  const [border, setBorder] = useState("#6b7280b2");

  const handleChange = (event) => {
    setContent(event.target.value);
    if (event.target.value.trim() !== "") {
      setBorder("#22c55e");
    } else {
      setBorder("#ef4444");
    }
  };

  useEffect(() => {
    setBorder("#6b7280b2");
  }, [reset]);

  return (
    <div className={`${display} gap-1 flex-col max-w-screen-sm ${width}`}>
      <label className="text-gray-500 text-sm">{label}</label>
      <select
        value={content}
        onChange={handleChange}
        className={`p-2 text-gray-600 ${border} text-sm 
        rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600
        focus:border-transparent`}
        style={{ border: `1px solid ${border}` }}
        disabled={disabled}
        name={name}
      >
        <option className="p-2 " value="">
          Selecione o seu gênero
        </option>
        {options?.map((item, index) => (
          <option className="p-2 text-gray-600" key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
