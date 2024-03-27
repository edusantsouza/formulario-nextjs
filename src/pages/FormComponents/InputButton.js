const InputButton = ({
  type = "button",
  value = "Enviar",
  disabled = false,
  width = "w-24",
  display = "flex",
  setContent,
  content,
  name,
}) => {
  const handleClick = () => {
    setContent(!content);
  };

  return (
    <input
      type={type}
      value={value}
      disabled={disabled}
      className={`${display} justify-center px-8 py-4 rounded-md text-white ${width}
    font-semibold ${!disabled && "hover:bg-blue-600"} text-sm 
    ${!disabled ? "bg-blue-500 cursor-pointer" : "bg-blue-300"} `}
      onClick={name === "return" ? handleClick : null}
    />
  );
};

export default InputButton;
