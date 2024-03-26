import { useEffect, useState } from "react";
import InputButton from "./FormComponents/InputButton";
import InputField from "./FormComponents/InputField";
import SelectField from "./FormComponents/SelectField";

const ResponsiveForm = () => {
  const [buttonState, setButtonState] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [itemSelect, setItemSelect] = useState("");

  useEffect(() => {
    if (
      name !== "" &&
      itemSelect !== "" &&
      email !== "" &&
      email.includes("@")
    ) {
      setButtonState(false);
    } else {
      setButtonState(true);
    }
  }, [name, email, itemSelect]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, itemSelect);
  };

  return (
    <form action="" onSubmit={onFormSubmit} className="form__style">
      <p className="form__title">Formulário Modular</p>

      <InputField
        setContent={setName}
        label="Nome"
        placeholder="Seu nome"
        type="text"
        disable={false}
      />
      <InputField
        setContent={setEmail}
        label="E-mail"
        placeholder="Seu e-mail"
        type="email"
        disable={false}
      />

      <SelectField
        content={itemSelect}
        setContent={setItemSelect}
        value="Gênero"
        options={optionsSelect}
      />

      <InputButton disable={buttonState} value="Enviar" />
    </form>
  );
};

export default ResponsiveForm;
