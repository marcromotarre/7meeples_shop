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
        <div sx={{ whidth: "100%" }}>
          <div sx={{ backgroundColor: "white", width: "100%" }}>
            <Searcher></Searcher>
          </div>

          {searchValue !== "" && (
            <div
              sx={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <div
                sx={{
                  position: "absolute",
                  zIndex: "8",
                  width: "100%",
                  height: "25px",
                  background:
                    "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 20%, rgba(255,255,255,0) 100%)",
                }}
              ></div>
              <div
                sx={{
                  position: "absolute",
                  zIndex: "7",
                  width: "100%",
                  height: "3px",
                  backgroundColor: "white",
                }}
              ></div>
              <SearchList
                styles={{
                  paddingTop: "25px",
                  width: "calc(100% - 20px)",
                  height: "calc(100% - 20px - 50px - 44px - 15px)",
                  overflowY: "scroll",
                  position: "fixed",
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
