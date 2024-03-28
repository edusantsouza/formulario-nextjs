const InputButton = ({
  type = "button",
  value = "Enviar",
  disabled = false,
  width = "w-24",
  display = "flex",
  bgDisabled = "bg-green-800",
  bgColor = "bg-green-700",
  bgHover = "hover:bg-green-600",
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
      className={`${display}  justify-center px-8 
      py-4 max-sm:px-4 max-sm:py-2 rounded-md ${width}
      font-semibold ${
        !disabled ? `${bgHover} text-gray-200` : `text-gray-400`
      } text-sm 
    ${!disabled ? `${bgColor} cursor-pointer` : bgDisabled} `}
      onClick={name === "return" ? handleClick : null}
    />
  );
};

export default InputButton;
