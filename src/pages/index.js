import { Inter } from "next/font/google";
import { useState } from "react";
import ResponsiveForm from "./ResponsiveForm";
import RegisterArea from "./RegisterArea";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  const [dataLocal, setDataLocal] = useState([]);
  return (
    <div className="flex items-center gap-2 max-lg:flex-col  max-w-screen-xl w-full ">
      <ResponsiveForm width="w-full" setDataLocal={setDataLocal} />
      <RegisterArea title="Dados cadastrados" dataLocal={dataLocal} />
    </div>
  );
};

export default Home;
