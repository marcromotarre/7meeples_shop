/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import search_icon from "../../assets/svg/search.svg";
import { changeSearchValue } from "src/redux/actions/search";
import { simple_string } from "src/utils/name";
import BoardgameListElement from "./boardgame-list-element";
import React from "react";
export default function SearchList({ styles }) {
  const boardgames = useSelector((state) => state.boardgamesReducer.boardgames);
  const searchValue = useSelector((state) => state.searchReducer.searchString);

  const list = boardgames.filter(({ webname }) =>
    simple_string(webname).includes(simple_string(searchValue))
  );

  return (
    <>
      <style jsx global>
        {`
          body {
            overflow: hidden;
          }
        `}
      </style>
      <div
        sx={{
          display: "grid",
          alignItems: "center",
          justifyItems: "center",
          gridTemplateColumns: "100%",
          width: "100%",
          gridTemplateRows: `repeat(${list.length}, 50px)`,
          ...styles,
        }}
      >
        {list.map((element) => (
          <div sx={{ width: "100%", height: "100%" }} key={element.id}>
            <BoardgameListElement
              styles={{ height: "50px" }}
              boardgame={element}
            ></BoardgameListElement>
          </div>
        ))}
      </div>
    </>
  );
}
