/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import styles from "../styles/Home.module.css";
import Header from "../src/components/header/header";
import Games from "../src/components/board-games/board-games-list";
export default function Home() {
  //  <Menu></Menu>;

  return (
    <div className={styles.container}>
      <Header></Header>
      <div sx={{ height: "50px" }}></div>
      <Games></Games>
    </div>
  );
}
