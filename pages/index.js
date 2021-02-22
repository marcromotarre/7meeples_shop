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
  return (
    <div sx={{ width: "100%" }} className={styles.container}>
      <BoardGamesList boardgames={boardgames}></BoardGamesList>
    </div>
  );
}
