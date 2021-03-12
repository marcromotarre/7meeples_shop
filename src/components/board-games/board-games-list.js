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
  const [boardgamesRows, setBoardgamesRows] = useState();

  useEffect(() => {
    console.log("boardgames", boardgames);

    setBoardgamesRows([{ boardgames: boardgames, page: 0 }]);
    if (device === DEVICES.MOBILE) {
      setBoardgamesRows([{ boardgames: boardgames, page: 0 }]);
    } else if (device === DEVICES.TABLET) {
      setBoardgamesRows([
        {
          boardgames: boardgames.filter((boardgame, index) => index % 2 === 0),
          page: 0,
        },
        {
          boardgames: boardgames.filter((boardgame, index) => index % 2 === 1),
          page: 0,
        },
      ]);
    } else if (device === DEVICES.LAPTOP) {
      setBoardgamesRows([
        {
          boardgames: boardgames.filter((boardgame, index) => index % 3 === 0),
          page: 0,
        },
        {
          boardgames: boardgames.filter((boardgame, index) => index % 3 === 1),
          page: 0,
        },
        {
          boardgames: boardgames.filter((boardgame, index) => index % 3 === 2),
          page: 0,
        },
      ]);
    } else if (device === DEVICES.DESKTOP) {
      setBoardgamesRows([
        {
          boardgames: boardgames.filter((boardgame, index) => index % 4 === 0),
          page: 0,
        },
        {
          boardgames: boardgames.filter((boardgame, index) => index % 4 === 1),
          page: 0,
        },
        {
          boardgames: boardgames.filter((boardgame, index) => index % 4 === 2),
          page: 0,
        },
        {
          boardgames: boardgames.filter((boardgame, index) => index % 4 === 3),
          page: 0,
        },
      ]);
    } else if (device === DEVICES.DESKTOP_LARGE) {
    }
  }, [device, boardgames]);
  console.log("boardgamesRows", boardgamesRows);
  const pagedBoardGamesRows = boardgamesRows?.map(({ boardgames, page }) => {
    return {
      boardgames: boardgames.filter((boardgame, index) => index < page * 3),
      page,
    };
  });

  console.log("pagedBoardGamesRows", pagedBoardGamesRows);
  const router = useRouter();
  const onClickBoardgame = (id) => {
    router.push(`/juego/${id}`);
    clickOnBoardGame();
  };

  const addPageToGamesRow = (row) => {
    const b = [...boardgamesRows];
    b[row].page = b[row].page + 1;
    console.log("b", b, row);
    setBoardgamesRows([...b]);
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
        {pagedBoardGamesRows &&
          boardgames.length > 0 &&
          pagedBoardGamesRows.map(({ boardgames, page }, index) => (
            <InfiniteScroll
              sx={{ width: ["80%", "48%", "32%", "24%"] }}
              pageStart={page}
              loadMore={() => addPageToGamesRow(index)}
              hasMore={true}
              loader={
                <div className="loader" key={0}>
                  Loading ...
                </div>
              }
            >
              <div
                className="bgg-grid"
                sx={{
                  width: "100%",
                  gridTemplateColumns: "100%",
                  display: "grid",
                  alignItems: "center",
                  justifyItems: "center",
                  rowGap: "10px",
                }}
              >
                {boardgames.map((boardgame) => (
                  <Boardgame
                    reduced={true}
                    key={boardgame.id}
                    onClick={onClickBoardgame}
                    boardgame={boardgame}
                  />
                ))}
              </div>
            </InfiniteScroll>
          ))}
      </div>
    </div>
  );
}
