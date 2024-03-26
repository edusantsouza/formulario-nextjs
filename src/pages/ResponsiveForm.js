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
    if (name !== "" && email !== "" && email.includes("@")) {
      setButtonState(false);
    } else {
      setButtonState(true);
    }
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(email, name);
  };

  let optionsSelect = [
    "Masculino",
    "Feminino",
    "Não-binário",
    "Prefiro não responder",
  ];
  return (
    <form
      action=""
      onSubmit={onFormSubmit}
      className="m-2 flex w-full flex-col px-6 py-8 bg-white rounded-lg
       gap-12 border border-gray-300 items-start max-w-screen-sm w-screen"
    >
      <p className="font-semibold">Formulário Modular</p>

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
