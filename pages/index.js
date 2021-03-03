/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import styles from "../styles/Home.module.css";
import Header from "../src/components/header/header";
import BoardGamesList from "../src/components/board-games/board-games-list";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBoardgamesReq } from "src/redux/actions/boardgames";
export default function Home() {
  const dispatch = useDispatch();
  const boardgames = useSelector((state) => state.boardgamesReducer.boardgames);

  return (
    <div
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      className={styles.container}
    >
      <BoardGamesList
        styles={{ width: "80%" }}
        boardgames={boardgames.filter((b, index) => index <= 10)}
      ></BoardGamesList>
    </div>
  );
}
