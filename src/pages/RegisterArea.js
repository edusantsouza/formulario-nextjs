import RegisteredItem from "./FormComponents/RegisteredItem";

const RegisterArea = ({ title }) => {
  return (
    <div
      className="register flex-col px-6 py-8 m-4 bg-gray-900 rounded-lg
  gap-12 items-start w-full overflow-y-scroll overflow-x-hidden max-h-600 shadow-lg"
    >
      <h2
        className="font-semibold bg-gray-900 text-green-400 text-lg max-w-auto w-full
      p-2"
      >
        {title}
      </h2>

      <ul className="flex flex-col gap-4 pt-8">
        <RegisteredItem />
      </ul>
    </div>
  );
};

export default RegisterArea;
