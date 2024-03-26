import React from "react";

const SelectField = ({ value, content, setContent }) => {
  const handleChange = (event) => {
    setContent(event.target.value);
  };
  const optionsSelect = [
    "Masculino",
    "Feminino",
    "Não-binário",
    "Prefiro não responder",
  ];
  return (
    <div className="form__select-wrapper">
      <h2>{value}</h2>
      <select
        value={content}
        onChange={handleChange}
        className="form__select"
        style={{ border: "1px solid var(--light-gray)" }}
      >
        <option value={""}>Selecione o seu gênero</option>
        {optionsSelect.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
