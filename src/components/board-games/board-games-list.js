/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect, useState, useCallback } from "react";
import { get_boardgames } from "./../../backend/boardgames";
import Boardgame from "./boardgame-min";
import { useRouter } from "next/router";
import InfiniteScroll from "react-infinite-scroller";
import { useSelector } from "react-redux";

import { DEVICES } from "../../../utils/media-querys";
import { DEFAULT_BOARDGAME_ATTRIBUTES } from "./utils";
import { s3_name } from "src/utils/name";

export default function GamesList({
  boardgames,
  styles = {},
  clickOnBoardGame = () => {},
  attributes = DEFAULT_BOARDGAME_ATTRIBUTES,
  moreAttributes = [],
}) {
  const [boardgamesRows, setBoardgamesRows] = useState();
  const device = useSelector((state) => state.deviceReducer.device);
  useEffect(() => {
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
      setBoardgamesRows([
        {
          boardgames: boardgames.filter((boardgame, index) => index % 5 === 0),
          page: 0,
        },
        {
          boardgames: boardgames.filter((boardgame, index) => index % 5 === 1),
          page: 0,
        },
        {
          boardgames: boardgames.filter((boardgame, index) => index % 5 === 2),
          page: 0,
        },
        {
          boardgames: boardgames.filter((boardgame, index) => index % 5 === 3),
          page: 0,
        },
        {
          boardgames: boardgames.filter((boardgame, index) => index % 5 === 4),
          page: 0,
        },
      ]);
    }
  }, [device, boardgames]);
  const pagedBoardGamesRows = boardgamesRows?.map(({ boardgames, page }) => {
    return {
      boardgames: boardgames.filter((boardgame, index) => index < page * 3),
      page,
    };
  });

  const router = useRouter();
  const onClickBoardgame = (id, name) => {
    router.push(`/juego/${id}/${s3_name(name)}`);
    clickOnBoardGame();
  };

  const addPageToGamesRow = (row) => {
    const b = [...boardgamesRows];
    b[row].page = b[row].page + 1;
    setBoardgamesRows([...b]);
  };

  const getWidthByDevice = () => {
    if (device === DEVICES.MOBILE) {
      return "100%";
    } else if (device === DEVICES.TABLET) {
      return "calc(50% - 12.5px)";
    } else if (device === DEVICES.LAPTOP) {
      return "calc(33% - 16.7px)";
    } else if (device === DEVICES.DESKTOP) {
      return "calc(25% - 18.75px)";
    } else if (device === DEVICES.DESKTOP_LARGE) {
      return "calc(20% - 20px)";
    }
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
          justifyContent: "space-between",
        }}
      >
        {pagedBoardGamesRows &&
          boardgames.length > 0 &&
          pagedBoardGamesRows.map(({ boardgames, page }, index) => (
            <InfiniteScroll
              key={index}
              sx={{ width: getWidthByDevice() }}
              pageStart={page}
              loadMore={() => addPageToGamesRow(index)}
              hasMore={boardgames.length / 3 >= page}
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
                  rowGap: "25px",
                }}
              >
                {boardgames.map((boardgame) => (
                  <>
                    {boardgame && (
                      <div
                        sx={{
                          width: "100%",
                          maxWidth: "350px",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        key={boardgame?.id}
                      >
                        <Boardgame
                          key={boardgame?.id}
                          onClick={onClickBoardgame}
                          boardgame={boardgame}
                          attributes={attributes}
                          moreAttributes={moreAttributes}
                        />
                      </div>
                    )}
                  </>
                ))}
              </div>
            </InfiniteScroll>
          ))}
      </div>
    </div>
  );
}
