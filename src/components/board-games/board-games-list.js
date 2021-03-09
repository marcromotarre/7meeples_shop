/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect, useState } from "react";
import { get_boardgames } from "./../../backend/boardgames";
import Boardgame from "./boardgame-min";
import { useRouter } from "next/router";
import InfiniteScroll from "react-infinite-scroller";
export default function GamesList({
  boardgames,
  styles = {},
  clickOnBoardGame = () => {},
}) {
  const router = useRouter();
  const [page, setPage] = useState(0);
  const onClickBoardgame = (id) => {
    router.push(`/juego/${id}`);
    clickOnBoardGame();
  };

  const pagedBoardgames = boardgames.filter(
    (boardgame, index) => index < (page + 1) * 3
  );

  return (
    <div
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...styles,
      }}
    >
      <InfiniteScroll
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
            display: "grid",
            alignItems: "center",
            justifyItems: "center",
            rowGap: "25px",
          }}
        >
          {pagedBoardgames.map((boardgame) => (
            <Boardgame
              key={boardgame.id}
              onClick={onClickBoardgame}
              boardgame={boardgame}
            />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}
