/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect, useState } from "react";
import { get_boardgame } from "../../src/backend/boardgames";
import BoardgameMax from "../../src/components/board-games/boardgame-max";
import { useRouter } from "next/router";

export default function Boardgame() {
  const router = useRouter();
  const [boardgame, setBoardGame] = useState({});

  useEffect(() => {
    if (router.query.id) {
      loadBoardGame();
    }
  }, [router.query.id]);

  const loadBoardGame = async () => {
    const boardgame = await get_boardgame({ id: router.query.id });
    setBoardGame(boardgame);
  };

  return (
    <>{boardgame.id && <BoardgameMax boardgame={boardgame}></BoardgameMax>}</>
  );
}
