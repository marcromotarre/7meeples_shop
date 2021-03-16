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
import List from "src/components/common/list/list";
import { simple_string } from "src/utils/name";
import BoardgameListElement from "src/components/searcher/boardgame-list-element";
export default function Home() {
  const dispatch = useDispatch();
  const boardgames = useSelector((state) => state.boardgamesReducer.boardgames);
  const searchValue = useSelector((state) => state.searchReducer.searchString);

  const list = boardgames.filter(({ webname }) =>
    simple_string(webname).includes(simple_string(searchValue))
  );

  useEffect(() => {
    dispatch(changeSearchValue(""));
  }, []);
  return (
    <>
      {searchValue !== "" && (
        <div
          sx={{
            zIndex: "1",
            position: "fixed",
            width: "100%",
            height: "80px",
            background:
              "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 30%, rgba(255,255,255,0.7) 55%, rgba(255,255,255,0.2) 100%)",
          }}
        ></div>
      )}
      <div sx={{ display: "grid", rowGap: "50px" }}>
        <div sx={{ width: "100%" }}>
          <div sx={{ width: "100%" }}>
            <Searcher
              styles={{
                marginTop: "20px",
                zIndex: "2",
                position: searchValue === "" ? "relative" : "fixed",
              }}
              onChangeValue={(value) => dispatch(changeSearchValue(value))}
            ></Searcher>
          </div>

          {searchValue !== "" && (
            <div
              sx={{
                marginTop: "70px",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                position: "relative",
              }}
            >
              <List styles={{ width: "90%" }}>
                {list.map((element) => (
                  <div
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                      width: "100%",
                    }}
                  >
                    <BoardgameListElement
                      styles={{ width: "100%", height: "50px" }}
                      boardgame={element}
                    ></BoardgameListElement>
                    <div
                      sx={{
                        height: "1px",
                        backgroundColor: "#D6D6D6",
                        width: "95%",
                      }}
                    ></div>
                  </div>
                ))}
              </List>
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
