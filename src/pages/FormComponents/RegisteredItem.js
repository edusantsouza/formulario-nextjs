import { useState } from "react";

const RegisteredItem = ({ storageItems }) => {
  const [newItems, setNewItems] = useState();

  const formatDate = (inputDate) => {
    const dateParts = inputDate.split("-");
    const year = dateParts[0];
    const month = dateParts[1];
    const day = dateParts[2];

    const months = [
      "jan",
      "fev",
      "mar",
      "abr",
      "mai",
      "jun",
      "jul",
      "ago",
      "set",
      "out",
      "nov",
      "dez",
    ];

    const monthIndex = parseInt(month, 10) - 1; // Subtrai 1 porque o array de meses começa em 0

    const formattedDate = `${parseInt(day, 10)} ${months[monthIndex]} ${year}`;

    return formattedDate;
  };

  const deleteItem = (e) => {
    const itemIndexToRemove = e.target.id;
    setNewItems(storageItems.splice(itemIndexToRemove, 1));
    localStorage.setItem("registeredItems", JSON.stringify(newItems));
  };

  if (storageItems.length > 0) {
    return storageItems.map((item, index) => {
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
                {item.itemSelect}
              </p>

              <p className="text-xs w-full text-gray-300">
                <span className="font-medium text-green-300">Nascimento:</span>{" "}
                {formatDate(item.date)}
              </p>
            </div>
          </div>
          <div className="actions font-medium items-center justify-center flex w-1/6 max-sm:w-full max-sm:w-full max-sm:bg-red-800 max-sm:rounded-sm max-sm:text-white">
            <button
              id={index}
              onClick={deleteItem}
              className="text-white p-2 bg-red-800 text-xs rounded-sm"
            >
              Excluir
            </button>
          </div>
        </li>
      );
    });
  } else {
    return (
      <li className={"text-md font-medium text-gray-400 "}>
        Nenhum item adicionado.
      </li>
    );
  }
};

export default RegisteredItem;
