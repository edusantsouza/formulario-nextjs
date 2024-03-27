import { useEffect, useState } from "react";

const InputField = ({
  type = "text",
  width = "w-full",
  disabled = false,
  messageBool = true,
  label,
  placeholder,
  setContent,
  display,
  name,
  content,
  reset,
}) => {
  const [border, setBorder] = useState("border-gray-300");
  const [message, setMessage] = useState("* Esse campo deve ser preenchido");
  const [visibility, setVisibility] = useState("invisible");

  const handleChange = (event) => {
    {
      /* Seta o value do campo no State passado via prop */
    }
    setContent(event.target.value);

    {
      /* Altera a mensagem de erro abaixo do input e controla as cores das bordas */
    }
    if (event.target.value.trim() !== "") {
      {
        /* Altera a mensagem de erro abaixo do input um aviso personalizado requerindo um e-mail válido */
      }
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

  {
    /* Reseta as cores das bordas */
  }
  useEffect(() => {
    setBorder("border-gray-300");
  }, [reset]);

  return (
    <div className={` ${display} flex-col gap-1 ${width}`}>
      <label className="text-sm text-gray-500">{label}</label>
      <input
        type={type}
        className={`focus:outline-none focus:ring-2 focus:ring-blue-600
           focus:border-transparent border text-sm rounded-md
            ${!disabled && "hover:border-blue-800"} ${
          type.toLowerCase() === "date" ? "text-gray-500" : null
        } p-2 ${border}`}
        placeholder={placeholder}
        onChange={handleChange}
        disabled={disabled}
        name={name}
        value={content}
      />
      {messageBool && (
        <span className={`text-xs text-red-500 ${visibility}`}>{message}</span>
      )}
    </div>
  );
};

export default InputField;
