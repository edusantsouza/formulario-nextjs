const InputButton = ({
  type = "button",
  value = "Enviar",
  disabled = false,
  width = "w-24",
  display = "flex",
  setContent,
  content,
  name,
  bgColor = "bg-blue-500",
  bgDisabled = "bg-blue-300",
  bgHover = "hover:bg-blue-600",
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
    font-semibold ${!disabled && bgHover} text-sm 
    ${!disabled ? `${bgColor} cursor-pointer` : bgDisabled} `}
      onClick={name === "return" ? handleClick : null}
    />
  );
};

export default InputButton;
