import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.ajkal.us/contact" />
        <meta name="robots" content="index, follow" />
      </Head>
      {children}
    </>
  );
}
