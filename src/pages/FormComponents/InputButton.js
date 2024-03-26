const InputButton = ({ value, disable }) => {
  return (
    <input
      type="submit"
      value={value}
      disabled={disable}
      className={`button ${!disable && "onhover"}
    ${disable ? "btn-disabled" : null} `}
    />
  );
};

export default InputButton;
