import { useState } from "react";

const InputField = ({ label, placeholder, type, disable, setContent }) => {
  const [value, setValue] = useState("");
  const [border, setBorder] = useState("border-gray-300");
  const [message, setMessage] = useState("* Esse campo deve ser preenchido");
  const [visibility, setVisibility] = useState("invisible");

  const handleChange = (event) => {
    setValue(event.target.value);

    setContent(event.target.value);

    if (event.target.value.trim() !== "") {
      if (!event.target.value.includes("@") && type.toLowerCase() === "email") {
        setBorder("border-red-500");
        setMessage("* Esse campo deve possuir um e-mail válido");
        setVisibility("visible");
      } else {
        setVisibility("invisible");
        setBorder("border-green-500");
      }
    } else {
      setBorder("border-red-500");
      setVisibility("visible");
    }
  };

  return (
    <div className="flex flex-col gap-1 max-w-screen-sm w-full">
      <label className="text-sm text-gray-500">{label}</label>
      <input
        type={type}
        className={`focus:outline-none focus:ring-2 focus:ring-blue-600
           focus:border-transparent border text-sm rounded-md
            ${!disable && "hover:border-blue-800"} p-2 ${border}`}
        placeholder={placeholder}
        onChange={handleChange}
        disabled={disable}
      />
      <span className={`text-xs text-red-500 ${visibility}`}>{message}</span>
    </div>
  );
};

export default InputField;
