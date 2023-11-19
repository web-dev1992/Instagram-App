import Head from "next/head";
import { Fragment } from "react";
import { Header } from "./components/Header";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Instagram App</title>
        <meta name="description" content="" />
        <link rel="icon" href="./favicon/ico" />
      </Head>

      {/* header */}
      <Header/>
      {/* feed */}
      {/* modal */}
    </Fragment>
  );
}
