const InputButton = ({ value, disable }) => {
  return (
    <input
      type="submit"
      value={value}
      disabled={disable}
      className={`px-8 py-4 rounded-md text-white 
    font-semibold ${!disable && "hover:bg-blue-600"} text-sm 
    ${!disable ? "bg-blue-500 cursor-pointer" : "bg-blue-300"} `}
    />
  );
};

export default InputButton;
