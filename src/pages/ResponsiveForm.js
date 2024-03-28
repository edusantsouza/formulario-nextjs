import { useEffect, useState } from "react";
import InputButton from "./FormComponents/InputButton";
import InputField from "./FormComponents/InputField";
import SelectField from "./FormComponents/SelectField";
import FormStatus from "./FormComponents/FormStatus";

const ResponsiveForm = ({ width, setDataLocal }) => {
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
  const [formInputValues, setFormInputValues] = useState("");
  const [storageItems, setStorageItems] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTodos = localStorage.getItem("registeredItems");
      return savedTodos ? JSON.parse(savedTodos) : [];
    } else {
      return [];
    }
  });
  {
    /* Ação básica do Form */
  }
  const onFormSubmit = (e) => {
    e.preventDefault();
    setDisplayState("hidden");
    setModalState("flex");
    setSpinner(true);
    setMsgSend(false);
    setStorageItems([...storageItems, formInputValues]);
  };

  {
    /* Valida os valores dos campos obrigatórios 
    Cada campo acrescentado no form precisa ser colocado aqui
    E caso o campo seja retirado, ele também precisa sair da condição de verificação 
    Essencialmente ele alternar o estado do botão de submit ao entender que não restam campos 
    considerados obrigatórios, vazios */
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
      setFormInputValues({
        name: name,
        surname: surname,
        email: email,
        itemSelect: itemSelect,
        date: date,
      });
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

  useEffect(() => {
    if (name && surname && itemSelect && date && email)
      localStorage.setItem("registeredItems", JSON.stringify(storageItems));
  }, [onFormSubmit]);

  {
    /* Array passada via prop para o componente de SelectField  */
  }
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
      className={`relative flex flex-col px-6 py-8 m-4 bg-gray-900 rounded-lg
       gap-12 items-start shadow-lg ${
         modalState === "flex" ? "min-h-600" : null
       }  ${width}`}
    >
      <p className={`${displayState} font-semibold text-lg text-green-400`}>
        Formulário
      </p>

      <div className="flex gap-2 w-full max-sm:flex-col">
        <InputField
          label="Nome"
          name="nome"
          placeholder="John"
          width="w-1/2  max-sm:w-full"
          setContent={setName}
          content={name}
          display={displayState}
          reset={goBack}
        />
        <InputField
          label="Sobrenome"
          name="sobrenome"
          placeholder="Doe"
          width="w-1/2  max-sm:w-full"
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

      <div className="flex gap-2 w-full items-center max-sm:flex-col">
        <SelectField
          label="Gênero"
          name="gênero"
          standardValue="Selecione o seu gênero"
          width="w-1/2 max-sm:w-full"
          display={displayState}
          content={itemSelect}
          setContent={setItemSelect}
          options={optionsSelect}
          reset={goBack}
        />

        <InputField
          label="Data de nascimento"
          name="data"
          type="date"
          width="w-1/2 max-sm:w-full"
          setContent={setDate}
          content={date}
          display={displayState}
          messageBool={false}
          reset={goBack}
        />
      </div>

      <div className={`${modalState} loader-container`}>
        {/* Animação de loading */}
        {spinner && <div className={"spinner"}></div>}
        {/* Mensagem de status do formulário */}
        {msgSend && <FormStatus setGoBack={setGoBack} goBack={goBack} />}
      </div>

      <InputButton
        value="Enviar"
        type="submit"
        name="submit"
        width="w-full"
        disabled={buttonState}
        display={displayState}
      />
    </form>
  );
};

export default ResponsiveForm;
