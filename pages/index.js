/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import styles from "../styles/Home.module.css";
import Header from "../src/components/header/header";
import Menu from "../src/components/menu/menu";
export default function Home() {
  //  <Menu></Menu>;

  return (
    <div className={styles.container}>
      <Header></Header>
      <div
        sx={{ height: "300px", width: "100%", backgroundColor: "yellow" }}
      ></div>
      <div
        sx={{ height: "300px", width: "100%", backgroundColor: "red" }}
      ></div>
      <div
        sx={{ height: "300px", width: "100%", backgroundColor: "green" }}
      ></div>
      <div
        sx={{ height: "300px", width: "100%", backgroundColor: "blue" }}
      ></div>
      <div
        sx={{ height: "300px", width: "100%", backgroundColor: "yellow" }}
      ></div>
      <div
        sx={{ height: "300px", width: "100%", backgroundColor: "red" }}
      ></div>
      <div
        sx={{ height: "300px", width: "100%", backgroundColor: "green" }}
      ></div>
      <div
        sx={{ height: "300px", width: "100%", backgroundColor: "blue" }}
      ></div>
    </div>
  );
}
