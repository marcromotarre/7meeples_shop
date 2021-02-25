/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect, useState } from "react";
import {
  get_boardgame,
  get_multiple_boardgames,
} from "../../src/backend/boardgames";
import BoardgameMax from "../../src/components/board-games/boardgame-max";
import { useRouter } from "next/router";
import { get_multiple_mechanisms } from "src/backend/mechanisms";
import { get_multiple_designers } from "src/backend/designers";
import { get_multiple_categories } from "src/backend/categories";

export default function Boardgame() {
  const router = useRouter();
  const [boardgame, setBoardGame] = useState({});

  const [categories, setCategories] = useState([]);
  const [designers, setDesigners] = useState([]);
  const [mechanisms, setMechanisms] = useState([]);
  const [expansions, setExpansions] = useState([]);
  const [expansionOf, setExpansionOf] = useState([]);

  useEffect(() => {
    if (router.query.id) {
      loadBoardGame();
    }
  }, [router.query.id]);

  const loadBoardGame = async () => {
    const boardgame = await get_boardgame({ id: router.query.id });
    setBoardGame(boardgame);
    loadExpansions({ ids: boardgame.expansions });
    loadCategories({ ids: boardgame.categories });
    loadMechanisms({ ids: boardgame.mechechanisms });
    loadDesigners({ ids: boardgame.designers });
  };

  const loadCategories = async ({ ids }) => {
    const categories = await get_multiple_categories({ ids });
    setCategories(categories);
  };

  const loadExpansions = async ({ ids }) => {
    const expansions = await get_multiple_boardgames({ ids });
    console.log(expansions);

    setExpansions(
      expansions.map((expansion) => {
        return { ...expansion, reduced: true };
      })
    );
  };

  const loadExpansionOf = async ({ ids }) => {
    const expansionOf = await get_multiple_boardgames({ ids });
    console.log(expansions);

    setExpansionOf(
      expansionOf.map((expansion) => {
        return { ...expansion, reduced: true };
      })
    );
  };

  const loadDesigners = async ({ ids }) => {
    const designers = await get_multiple_designers({ ids });
    setDesigners(designers);
  };

  const loadMechanisms = async ({ ids }) => {
    const mechanisms = await get_multiple_mechanisms({ ids });
    setMechanisms(mechanisms);
  };

  return (
    <>
      {boardgame.id && (
        <BoardgameMax
          boardgame={{
            ...boardgame,
            designers,
            mechanisms,
            categories,
            expansions,
            expansionOf,
          }}
        ></BoardgameMax>
      )}
    </>
  );
}
