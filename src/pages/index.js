import { Inter } from "next/font/google";
import { useState } from "react";
import ResponsiveForm from "./ResponsiveForm";
import RegisterArea from "./RegisterArea";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [itemSelect, setItemSelect] = useState("");
  const [date, setDate] = useState("");
  const [buttonState, setButtonState] = useState(true);
  const [displayState, setDisplayState] = useState("flex");
  const [modalState, setModalState] = useState("hidden");
  const [goBack, setGoBack] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [msgSend, setMsgSend] = useState(false);

  const [formInputValues, setFormInputValues] = useState("");
  const [storageItems, setStorageItems] = useState(() => {
    if (typeof window !== "undefined") {
      const savedItems = localStorage.getItem("registeredItems");
      return savedItems !== "undefined" ? JSON.parse(savedItems) : [];
    } else {
      return [];
    }
  });

  return (
    <section className="flex items-center gap-2 max-lg:flex-col  max-w-screen-xl w-full ">
      <ResponsiveForm
        width="w-full"
        formInputValues={formInputValues}
        setFormInputValues={setFormInputValues}
        storageItems={storageItems}
        setStorageItems={setStorageItems}
        name={name}
        setName={setName}
        surname={surname}
        setSurname={setSurname}
        email={email}
        setEmail={setEmail}
        itemSelect={itemSelect}
        setItemSelect={setItemSelect}
        date={date}
        setDate={setDate}
        buttonState={buttonState}
        setButtonState={setButtonState}
        displayState={displayState}
        setDisplayState={setDisplayState}
        modalState={modalState}
        setModalState={setModalState}
        goBack={goBack}
        setGoBack={setGoBack}
        spinner={spinner}
        setSpinner={setSpinner}
        msgSend={msgSend}
        setMsgSend={setMsgSend}
      />

      <RegisterArea
        title="Dados cadastrados"
        storageItems={storageItems}
        setStorageItems={setStorageItems}
        spinner={spinner}
      />
    </section>
  );
};

export default Home;
