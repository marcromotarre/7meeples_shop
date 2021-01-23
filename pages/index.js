/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../src/components/header/header";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
    </div>
  );
}
