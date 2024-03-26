import Image from "next/image";
import { Inter } from "next/font/google";
import ResponsiveForm from "./ResponsiveForm";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return <ResponsiveForm />;
};

export default Home;
