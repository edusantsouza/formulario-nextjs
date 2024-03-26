import React from "react";

const SelectField = ({ options, value, content, setContent }) => {
  const handleChange = (event) => {
    setContent(event.target.value);
  };
  return (
    <div className="flex gap-2 flex-col">
      <h2>{value}</h2>
      <select
        value={content}
        onChange={handleChange}
        className="p-2 text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600
        focus:border-transparent"
        style={{ border: "1px solid grey" }}
      >
        <option className="p-2 " value="">
          Selecione o seu gênero
        </option>
        {options.map((item, index) => (
          <option className="p-2 text-gray-600" key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
