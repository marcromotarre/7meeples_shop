/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect, useState, useCallback } from "react";
import { get_boardgames } from "./../../backend/boardgames";
import Boardgame from "./boardgame-min";
import { useRouter } from "next/router";
import InfiniteScroll from "react-infinite-scroller";

import { getDevice, DEVICES } from "../../../utils/media-querys";

export default function GamesList({
  boardgames,
  styles = {},
  clickOnBoardGame = () => {},
}) {
  const device = getDevice();

  let boardgames_by_type = [boardgames];
  let pagedBoardgames = boardgames.filter(
    (boardgame, index) => index < (page + 1) * 6
  );
  if (device === DEVICES.TABLET) {
    boardgames_by_type = [
      boardgames.filter((boardgame, index) => index % 2 === 0),
      boardgames.filter((boardgame, index) => index % 2 === 1),
    ];
    console.log(boardgames_by_type);
    pagedBoardgames = boardgames_by_type.filter(
      (boardgame, index) => index < (page + 1) * 6
    );
  } else if (device === DEVICES.LAPTOP) {
  } else if (device === DEVICES.DESKTOP) {
  } else if (device === DEVICES.DESKTOP_LARGE) {
  }
  const router = useRouter();
  const [page, setPage] = useState(0);
  const onClickBoardgame = (id) => {
    router.push(`/juego/${id}`);
    clickOnBoardGame();
  };

  return (
    <div
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...styles,
      }}
    >
      <InfiniteScroll
        sx={{ width: "100%" }}
        pageStart={page}
        loadMore={() => setPage(page + 1)}
        hasMore={boardgames.length > (page + 1) * 3}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
      >
        <div
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "flex-start",
            justifyContent: "space-around",
          }}
        >
          {boardgames_by_type.map((boardgame_by_type) => (
            <div
              sx={{
                width: ["80%", "47%"],
                gridTemplateColumns: "100%",
                display: "grid",
                alignItems: "center",
                justifyItems: "center",
                rowGap: "25px",
              }}
            >
              {boardgame_by_type.map((boardgame) => (
                <Boardgame
                  reduced={true}
                  key={boardgame.id}
                  onClick={onClickBoardgame}
                  boardgame={boardgame}
                />
              ))}
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}
