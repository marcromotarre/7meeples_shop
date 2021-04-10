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
import SliderBoardgames from "src/components/common/slider/game-slider";
import SliderBoardgamesTemplate from "src/components/common/slider/game-slider-template";

const SALES_IDS = [173346, 214396, 172, 192291, 266192];

export default function SaleOfThe({ styles }) {
  const [loading, setLoading] = useState(true);
  const [saleBoardgames, setSaleBoardgames] = useState();
  const boardgames = useSelector((state) => state.boardgamesReducer.boardgames);

  useEffect(() => {
    if (boardgames) {
      const saleBoardgames = boardgames.filter(({ id }) =>
        SALES_IDS.includes(id)
      );
      setSaleBoardgames(saleBoardgames);
      setLoading(false);
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
      <div
        sx={{
          display: "grid",
          width: "100%",
          gridTemplateColumns: "100%",
          alignItems: "center",
          justifyItems: "center",
          rowGap: "35px",
        }}
      >
        {!loading && (
          <SliderBoardgames
            title={"Ofertas"}
            elements={saleBoardgames}
          ></SliderBoardgames>
        )}
        {loading && <SliderBoardgamesTemplate />}
      </div>
    </div>
  );
}
/*
 <BoardgameMin
            styles={{ width: "100%" }}
            boardgame={saleBoardgame}
            attributes={[
              BOARDGAME_ATTRIBUTES.PLAY_TIME,
              BOARDGAME_ATTRIBUTES.AGE,
              BOARDGAME_ATTRIBUTES.NUMBER_OF_PLAYERS,
              BOARDGAME_ATTRIBUTES.WEIGHT,
            ]}
          />*/
