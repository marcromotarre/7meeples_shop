/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../src/components/header/header";
import Menu from "../src/components/menu/menu";
import store from "./../src/store";
import { Provider } from "react-redux";
export default function Home() {
  return (
    <Provider store={store}>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="preload"
            href="/fonts/Quicksand/static/Quicksand-Regular.ttf"
            as="font"
            crossOrigin=""
          />
        </Head>
        <Header></Header>
        <Menu></Menu>

        <div
          sx={{ height: "500px", width: "100%", backgroundColor: "red" }}
        ></div>
      </div>
    </Provider>
  );
}
