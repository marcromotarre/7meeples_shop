/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import sale_icon from "../../assets/svg/menu/sale-icon.svg";
import BoardgameMin from "../board-games/boardgame-min";
import { BOARDGAME_ATTRIBUTES } from "../board-games/utils";
import React, { useState, useEffect } from "react";
import Loading from "../common/loading/loading";
import { useSelector } from "react-redux";
import SectionTitle from "../sections/section-title";
import { Button } from "../common";

const SALE_ID = 173346;
const SALE_TYPE = "Oferta del día";

export default function SaleOfThe({ styles }) {
  const [saleBoardgame, setSaleBoardgame] = useState();
  const boardgames = useSelector((state) => state.boardgamesReducer.boardgames);

  useEffect(() => {
    if (boardgames) {
      const saleBoardgame = boardgames.find(({ id }) => id === SALE_ID);
      setSaleBoardgame(saleBoardgame);
    }
  }, [boardgames]);

  return (
    <div
      sx={{
        display: "grid",
        width: "100%",
        gridTemplateColumns: "100%",
        alignItems: "center",
        justifyItems: "center",
        rowGap: "15px",
        height: "fit-content",
        ...styles,
      }}
    >
      <SectionTitle title={SALE_TYPE}></SectionTitle>

      {saleBoardgame && (
        <div
          sx={{
            display: "grid",
            width: "100%",
            gridTemplateColumns: "100%",
            alignItems: "center",
            justifyItems: "center",
            rowGap: "35px",
            maxWidth: "350px",
          }}
        >
          <BoardgameMin
            styles={{ width: "100%" }}
            boardgame={saleBoardgame}
            attributes={[
              BOARDGAME_ATTRIBUTES.PLAY_TIME,
              BOARDGAME_ATTRIBUTES.AGE,
              BOARDGAME_ATTRIBUTES.NUMBER_OF_PLAYERS,
              BOARDGAME_ATTRIBUTES.WEIGHT,
            ]}
          />
          <Button>Ver más ofertas</Button>
        </div>
      )}

      {!saleBoardgame && <Loading></Loading>}
    </div>
  );
}
