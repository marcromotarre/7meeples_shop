/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import styles from "../styles/Home.module.css";
import Header from "../src/components/header/header";
import BoardGamesList from "../src/components/board-games/board-games-list";
import { useState, useEffect } from "react";
import { get_boardgames } from "src/backend/boardgames";
export default function Home() {
  //  <Menu></Menu>;
  const [boardgames, setBoardGames] = useState([]);
  useEffect(() => {
    getBoardgames();
  }, []);

  const getBoardgames = async () => {
    const boardgames = await get_boardgames();
    setBoardGames(boardgames);
  };
  console.log(boardgames);
  return (
    <div
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      className={styles.container}
    >
      <BoardGamesList
        styles={{ width: "80%" }}
        boardgames={boardgames}
      ></BoardGamesList>
    </div>
  );
}
