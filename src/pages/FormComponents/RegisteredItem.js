import { useEffect, useState } from "react";

const RegisteredItem = () => {
  const [storageItems, setStorageItems] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      setStorageItems(JSON.parse(localStorage.getItem("registeredItems")));
    }
  }, []);

  return storageItems ? (
    storageItems.map((item, index) => {
      return (
        <li
          key={index}
          className="flex w-full max-sm:flex-col gap-2 max-sm:gap-4 justify-between border rounded-md border-gray-800 p-4 "
        >
          <div className="info flex w-5/6 items-start gap-4 max-sm:gap-2 max-sm:flex-col">
            <div className="flex flex-col w-1/2 gap-2">
              <p className="text-xs w-full text-gray-300">
                <span className="font-medium text-green-300">Nome:</span>{" "}
                {item.name}
              </p>

              <p className="text-xs w-full text-gray-300">
                <span className="font-medium text-green-300">Sobrenome:</span>{" "}
                {item.surname}
              </p>

              <p className="text-xs w-full text-gray-300">
                <span className="font-medium text-green-300">E-mail:</span>{" "}
                {item.email}
              </p>
            </div>

            <div className="flex flex-col w-full max-w-max gap-2">
              <p className="text-xs w-full text-gray-300">
                <span className="font-medium text-green-300">Gênero:</span>{" "}
                {item.selecItem}
              </p>

              <p className="text-xs w-full text-gray-300">
                <span className="font-medium text-green-300">Nascimento:</span>{" "}
                {item.date}
              </p>
            </div>
          </div>
          <div className="actions font-medium items-center justify-center flex w-1/6 max-sm:w-full max-sm:w-full max-sm:bg-red-800 max-sm:rounded-sm max-sm:text-white">
            <button className="text-white p-2 bg-red-800 text-xs rounded-sm">
              Excluir
            </button>
          </div>
        </li>
      );
    })
  ) : (
    <div className={`flex items-center justify-center w-full min-h-450`}>
      <div className={"spinner "}></div>
    </div>
  );
};

export default RegisteredItem;
