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
import Loading from "src/components/common/loading/loading";
import { useSelector, useDispatch } from "react-redux";

export default function Boardgame() {
  const router = useRouter();
  const [boardgame, setBoardgame] = useState();
  const [loading, setLoading] = useState(false);
  const boardgames = useSelector((state) => state.boardgamesReducer.boardgames);
  const all_designers = useSelector(
    (state) => state.designersReducer.designers
  );

  const refreshBoardGameInfo = () => {
    setBoardgame(undefined);
  };

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      setBoardgame(undefined);
    };
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  useEffect(() => {
    setBoardgame(undefined);
    console.log("router", router);
    if (router.query.id) {
      const _boardgame = boardgames?.find(
        ({ id }) => id === parseInt(router?.query?.id)
      );
      if (_boardgame) {
        setBoardgame(
          boardgames?.find(({ id }) => id === parseInt(router.query.id))
        );
      }
    }
  }, [router, boardgames]);

  const all_categories = useSelector(
    (state) => state.categoriesReducer.categories
  );
  /*const [boardgame, setBoardGame] = useState({});

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
    setLoading(true);
    const boardgame = await get_boardgame({ id: router.query.id });
    setBoardGame(boardgame);
    setLoading(false);
    loadExpansions({ ids: boardgame.expansions });
    loadCategories({ ids: boardgame.categories });
    loadMechanisms({ ids: boardgame.mechechanisms });
    loadDesigners({ ids: boardgame.designers });
    loadExpansionOf({ ids: boardgame.expansionOf });
  };

  const loadCategories = async ({ ids }) => {
    const categories = await get_multiple_categories({ ids });
    setCategories(categories);
  };

  const loadExpansions = async ({ ids }) => {
    const expansions = await get_multiple_boardgames({ ids });

    setExpansions(
      expansions.map((expansion) => {
        return { ...expansion, reduced: true };
      })
    );
  };

  const loadExpansionOf = async ({ ids }) => {
    const expansionOf = await get_multiple_boardgames({ ids });

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
  console.log(boardgame);
*/
  return (
    <>
      {boardgame && (
        <BoardgameMax
          boardgame={{
            ...boardgame,
            designers: all_designers
              ? all_designers.filter(({ id }) =>
                  boardgame.designers.includes(id)
                )
              : [],
            categories: all_categories
              ? all_categories.filter(({ id }) =>
                  boardgame.categories.includes(id)
                )
              : [],
            expansions: boardgames.filter(({ id }) =>
              boardgame.expansions.includes(id)
            ),
            expansionOf: boardgames.filter(({ id }) =>
              boardgame.expansionOf.includes(id)
            ),
          }}
        ></BoardgameMax>
      )}
      {!boardgame && (
        <div
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItem: "center",
          }}
        >
          <Loading style={{ height: "100px" }}></Loading>
        </div>
      )}
    </>
  );
}
