import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      className="grid place-items-center h-full bg-gradient-to-r from-blue-600 via-blue-800 to-blue-900"
      lang="pt"
    >
      <Head />
      <body className="bg-transparent max-w-screen-sm w-full">
        <Main className="bg-transparent" />
        <NextScript className="bg-transparent" />
      </body>
    </Html>
  );
}
