import InputButton from "./InputButton";

const FormStatus = ({ status = "success", setGoBack, goBack }) => {
  if (status === "success") {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-4 form-notice`}
      >
        <span className="text-lg font-semibold text-gray-900">
          Formulário enviado com sucesso!
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 48 48"
        >
          <path
            fill="#c8e6c9"
            d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
          ></path>
          <path
            fill="#4caf50"
            d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z"
          ></path>
        </svg>

        <InputButton
          value="Retornar"
          type="button"
          name="return"
          width="w-48"
          setContent={setGoBack}
          content={goBack}
        />
      </div>
    );
  } else if (status === "deleted") {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-4 form-notice`}
      >
        <span className="text-lg font-semibold text-gray-900">
          As informações foram deletadas com sucesso!
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 48 48"
        >
          <path
            fill="#f44336"
            d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
          ></path>
          <path
            fill="#fff"
            d="M29.656,15.516l2.828,2.828l-14.14,14.14l-2.828-2.828L29.656,15.516z"
          ></path>
          <path
            fill="#fff"
            d="M32.484,29.656l-2.828,2.828l-14.14-14.14l2.828-2.828L32.484,29.656z"
          ></path>
        </svg>

        <InputButton
          value="Retornar"
          type="button"
          name="return"
          width="w-48"
          setContent={setGoBack}
          content={goBack}
        />
      </div>
    );
  }
};

export default FormStatus;
