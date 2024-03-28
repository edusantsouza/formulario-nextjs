import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      className="grid place-items-center h-full bg-gradient-to-r from-gray-800 to-gray-900"
      lang="pt"
    >
      <Head />
      <body className="bg-transparent flex max-w-screen-xl w-full">
        <Main className="bg-transparent" />
        <NextScript className="bg-transparent" />
      </body>
    </Html>
  );
}
