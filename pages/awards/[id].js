/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect, useState } from "react";
import { get_award, get_awards } from "../../src/backend/awards";
import { useRouter } from "next/router";
import { get_multiple_boardgames } from "src/backend/boardgames";
import Award from "../../src/components/awards/award-view";

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
    setBoardgames(boardgames);
  };

  return (
    <div sx={{ display: "flex", flexDirection: "column" }}>
      <div sx={{ height: "20px" }}></div>
      <Award award={award} boardgames={boardgames} />
    </div>
  );
}
