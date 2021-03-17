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
import { delete_special_characters } from "src/utils/name";
import BoardgameListElement from "src/components/searcher/boardgame-list-element";
import DesignerListElement from "src/components/searcher/designer-list-element";

import { levenshtein } from "../src/utils/levenstein";
import { get_search_points } from "src/utils/texts";

export default function Home() {
  const dispatch = useDispatch();
  const boardgames = useSelector((state) => state.boardgamesReducer.boardgames);
  const designers = useSelector((state) => state.designersReducer.designers);
  const searchValue = useSelector((state) => state.searchReducer.searchString);
  const [searchedList, setSearchedList] = useState([]);

  useEffect(() => {
    dispatch(changeSearchValue(""));
  }, []);

  const getBySearch = async () => {
    const boardgame_searched_list = boardgames
      .map((boardgame) => {
        return {
          type: "boardgame",
          element: boardgame,
          score: get_search_points(boardgame.webname, searchValue),
        };
      })
      .filter(({ score }) => score > 0);

    const desginers_searched_list = designers
      .map((designer) => {
        return {
          type: "designer",
          element: designer,
          score: get_search_points(designer.name, searchValue),
        };
      })
      .filter(({ score }) => score > 0);

    const total_searched_list = [
      ...boardgame_searched_list,
      ...desginers_searched_list,
    ]
      .sort((boardgame1, boardgame2) => {
        return boardgame1.score >= boardgame2.score ? -1 : 1;
      })
      .filter(({}, index) => index < 10);
    setSearchedList(total_searched_list);
  };

  useEffect(() => {
    getBySearch();
  }, [searchValue]);

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
                {searchedList.map(({ element, type }) => (
                  <div
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                      width: "100%",
                    }}
                  >
                    {type === "boardgame" && (
                      <BoardgameListElement
                        styles={{ width: "100%", height: "50px" }}
                        element={element}
                      ></BoardgameListElement>
                    )}
                    {type === "designer" && (
                      <DesignerListElement
                        styles={{ width: "100%", height: "50px" }}
                        element={element}
                      ></DesignerListElement>
                    )}

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
