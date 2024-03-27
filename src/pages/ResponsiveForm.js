import { useEffect, useState } from "react";
import InputButton from "./FormComponents/InputButton";
import InputField from "./FormComponents/InputField";
import SelectField from "./FormComponents/SelectField";
import FormStatus from "./FormComponents/FormStatus";

const ResponsiveForm = ({ maxWidth, width }) => {
  {
    /* Estados de controle para o Layout */
  }
  const [buttonState, setButtonState] = useState(true);
  const [displayState, setDisplayState] = useState("flex");
  const [modalState, setModalState] = useState("hidden");
  const [goBack, setGoBack] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [msgSend, setMsgSend] = useState(false);

  {
    /* Valor de cada campo do formulário */
  }
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [itemSelect, setItemSelect] = useState("");
  const [date, setDate] = useState("");

  {
    /* Ação básica do Form */
  }
  const onFormSubmit = (e) => {
    e.preventDefault();
    setDisplayState("hidden");
    setModalState("flex");
    setSpinner(true);
    setMsgSend(false);
  };

  {
    /* Valida os valores dos campos */
  }
  useEffect(() => {
    if (
      itemSelect !== "" &&
      date !== "" &&
      name !== "" &&
      surname !== "" &&
      email !== "" &&
      email.includes("@")
    ) {
      setButtonState(false);
    } else {
      setButtonState(true);
    }
  }, [name, surname, itemSelect, date, email]);

  {
    /* Controlador da mensagem de envio do formulário */
  }
  useEffect(() => {
    setTimeout(() => {
      setSpinner(false);
      setMsgSend(true);
    }, 2000);
  }, [spinner, msgSend]);

  {
    /* Reseta os campos do formulário */
  }
  useEffect(() => {
    setSpinner(false);
    setMsgSend(false);
    setDisplayState("flex");
    setModalState("hidden");
    setName("");
    setEmail("");
    setSurname("");
    setItemSelect("");
    setDate("");
  }, [goBack]);

  const optionsSelect = [
    "Masculino",
    "Feminino",
    "Não-binário",
    "Prefiro não responder",
  ];

  return (
    <form
      action=""
      onSubmit={onFormSubmit}
      className={`relative flex flex-col px-6 py-8 m-2 bg-white rounded-lg
       gap-12 border border-gray-300 items-start ${
         modalState === "flex" ? "min-h-full h-96" : null
       }  ${maxWidth} ${width}`}
    >
      <p className={`${displayState} font-semibold text-lg`}>Formulário</p>

      <div className="flex gap-2 w-full">
        <InputField
          label="Nome"
          name="nome"
          placeholder="John"
          width="w-1/2"
          setContent={setName}
          content={name}
          display={displayState}
          reset={goBack}
        />
        <InputField
          label="Sobrenome"
          name="sobrenome"
          placeholder="Doe"
          width="w-1/2"
          setContent={setSurname}
          content={surname}
          display={displayState}
          reset={goBack}
        />
      </div>

      <InputField
        name="email"
        label="E-mail"
        placeholder="seunome@email.com"
        type="email"
        setContent={setEmail}
        content={email}
        display={displayState}
        reset={goBack}
      />

      <div className="flex gap-2 w-full items-center">
        <SelectField
          label="Gênero"
          name="gênero"
          width="w-1/2"
          display={displayState}
          content={itemSelect}
          setContent={setItemSelect}
          options={optionsSelect}
          reset={goBack}
        />

        <InputField
          label="Escolha uma data"
          name="data"
          type="date"
          width="w-1/2"
          setContent={setDate}
          content={date}
          display={displayState}
          messageBool={false}
          reset={goBack}
        />
      </div>

      <div className={`${modalState} loader-container`}>
        {spinner && <div className={"spinner"}></div>}

        {msgSend && <FormStatus setGoBack={setGoBack} goBack={goBack} />}
      </div>

      <InputButton
        width="w-full"
        value="Enviar"
        type="submit"
        name="submit"
        disabled={buttonState}
        display={displayState}
      />
    </form>
  );
};

export default ResponsiveForm;
