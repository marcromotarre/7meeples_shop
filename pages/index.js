/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import styles from "../styles/Home.module.css";
import Header from "../src/components/header/header";
import BoardGamesList from "../src/components/board-games/board-games-list";
import MiaMain from "../src/components/mia/mia-main";
import CategoriesMain from "../src/components/categories/categories-main";
import NewnessMain from "../src/components/newness/newness-main.js";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBoardgamesReq } from "src/redux/actions/boardgames";
import Searcher from "src/components/searcher/searcher";
export default function Home() {
  const dispatch = useDispatch();
  const boardgames = useSelector((state) => state.boardgamesReducer.boardgames);

  return (
    <>
      <div sx={{ height: "20px" }}></div>
      <div sx={{ display: "grid", rowGap: "50px" }}>
        <Searcher></Searcher>
        <MiaMain></MiaMain>
        <CategoriesMain></CategoriesMain>
        <NewnessMain></NewnessMain>
        {/*<div
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        className={styles.container}
      >
        <BoardGamesList
          styles={{ width: "80%" }}
          boardgames={boardgames.filter((b, index) => index <= 10)}
        ></BoardGamesList>
      </div>*/}
      </div>
    </>
  );
}
