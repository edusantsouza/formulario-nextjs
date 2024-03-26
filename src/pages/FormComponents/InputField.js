import { useState } from "react";

const InputField = ({ label, placeholder, type, disable, setContent }) => {
  const [value, setValue] = useState("");
  const [border, setBorder] = useState("gray-border");
  const [message, setMessage] = useState("* Esse campo deve ser preenchido");
  const [visibility, setVisibility] = useState("invisible");

  const handleChange = (event) => {
    setValue(event.target.value);

    setContent(event.target.value);

    if (event.target.value.trim() !== "") {
      if (!event.target.value.includes("@") && type.toLowerCase() === "email") {
        setBorder("red-border");
        setMessage("* Esse campo deve possuir um e-mail válido");
        setVisibility("visible");
      } else {
        setVisibility("invisible");
        setBorder("green-border");
      }
    } else {
      setBorder("red-border");
      setVisibility("visible");
    }
  };

  return (
    <div className="form__input-wrapper">
      <label>{label}</label>
      <input
        type={type}
        className={`${border}`}
        placeholder={placeholder}
        onChange={handleChange}
        disabled={disable}
      />
      <span className={`message-text ${visibility}`}>{message}</span>
    </div>
  );
};

export default InputField;
