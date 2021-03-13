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
import SearchList from "src/components/searcher/search-list";
import { changeSearchValue } from "src/redux/actions/search";
export default function Home() {
  const dispatch = useDispatch();
  const boardgames = useSelector((state) => state.boardgamesReducer.boardgames);
  const searchValue = useSelector((state) => state.searchReducer.searchString);
  useEffect(() => {
    dispatch(changeSearchValue(""));
  }, []);
  return (
    <>
      <div sx={{ height: "20px" }}></div>
      <div sx={{ display: "grid", rowGap: "50px" }}>
        <div>
          <Searcher></Searcher>
          {searchValue !== "" && (
            <div
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <SearchList
                styles={{
                  width: "calc(100% - 20px)",
                  height: "calc(100% - 20px - 50px - 44px)",
                  overflow: "scroll",
                }}
              ></SearchList>
            </div>
          )}
        </div>

        {searchValue === "" && (
          <>
            <MiaMain></MiaMain>
            <CategoriesMain></CategoriesMain>
            <NewnessMain></NewnessMain>
          </>
        )}
      </div>
    </>
  );
}
