import Image from "next/image";
import { Inter } from "next/font/google";
import ResponsiveForm from "./ResponsiveForm";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return <ResponsiveForm maxWidth="max-w-screen-sm" width="w-full" />;
};

export default Home;
