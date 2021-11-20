/** @jsxImportSource theme-ui */
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import search_icon from "../../assets/svg/search.svg";
import { changeSearchValue } from "src/redux/actions/search";
import { simple_string } from "src/utils/name";
import BoardgameListElement from "./boardgame-list-element";
import React, { useState } from "react";
import { get_search_points } from "src/utils/texts";
import List from "../common/list/list";
import DesignerListElement from "./designer-list-element";
export default function SearchList({ styles, searchValue }) {
  const boardgames = useSelector((state) => state.boardgamesReducer.boardgames);
  const designers = useSelector((state) => state.designersReducer.designers);
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
  ].sort((boardgame1, boardgame2) => {
    return boardgame1.score >= boardgame2.score ? -1 : 1;
  });
  //  .filter(({}, index) => index < 10);
  const zIndex = styles.zIndex ? parseInt(styles.zIndex) : 0;
  return (
    <>
      <div
        sx={{
          zIndex: `${zIndex + 1}`,
          position: "fixed",
          width: "100%",
          height: "80px",
          background:
            "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%,  rgba(255,255,255,0) 100%)",
        }}
      ></div>
      <div
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          position: "relative",
          ...styles,
        }}
      >
        <List styles={{ width: "100%" }}>
          {total_searched_list.map(({ element, type }, index) => (
            <div
              key={index}
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
    </>
  );
}
