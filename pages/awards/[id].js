/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect, useState } from "react";
import { get_award, get_awards } from "../../src/backend/awards";
import BoardgameMin from "../../src/components/board-games/boardgame-min";
import { useRouter } from "next/router";
import { get_multiple_boardgames } from "src/backend/boardgames";
import Boardgame from "../../src/components/board-games/boardgame-min";
import BoardgamesList from "../../src/components/board-games/board-games-list";

export default function Awards() {
  const router = useRouter();
  const [award, setAward] = useState({});
  const [boardgames, setBoardgames] = useState([]);

  useEffect(() => {
    if (router.query.id) {
      loadAward();
    }
  }, [router.query.id]);

  const loadAward = async () => {
    const award = await get_award({ id: router.query.id });
    setAward(award);
    const boardgames = await get_multiple_boardgames({ ids: award.boardgames });
    console.log(boardgames);
    setBoardgames(boardgames);
  };
  const onClickBoardgame = (id) => {
    console.log("onClickBoardgame", id);
    router.push(`/juego/${id}`);
  };

  return (
    <div sx={{ display: "flex", flexDirection: "column" }}>
      {boardgames.map((boardgame) => (
        <BoardgamesList boardgames={boardgames} />
      ))}
    </div>
  );
}
