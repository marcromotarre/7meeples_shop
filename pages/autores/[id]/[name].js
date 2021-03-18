/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Designer from "src/components/designers/designer";
import BoardgameList from "src/components/board-games/board-games-list";
import designers_icon from "../../../src/assets/svg/sections/designers.svg";
import designers_icon_inverted from "../../../src/assets/svg/sections/designers-inverted.svg";
import Description from "../../../src/components/common/text/description";
import DesignerButton from "../../../src/components/designers/designer";
import { eliminate_duplicates } from "src/utils/array";
import { BOARDGAME_ATTRIBUTES } from "./../../../src/components/board-games/utils";

import DesignerGoBackButton from "../../../src/components/designers/designer-go-back-button";
import DesignerTitle from "../../../src/components/designers/designer-title";
import DesignerBestGame from "../../../src/components/designers/designer-best-game";
import DesignerWorkedWith from "../../../src/components/designers/designer-worked-with-description";
import DesignerBoardgames from "../../../src/components/designers/designer-boardgames";

export default function Designers() {
  const [designer, setDesigner] = useState();
  const [boardgames, setBoardgames] = useState();
  const [designers_worked_with, set_designers_worked_with] = useState([]);
  const router = useRouter();
  const all_designers = useSelector(
    (state) => state.designersReducer.designers
  );
  const all_boardgames = useSelector(
    (state) => state.boardgamesReducer.boardgames
  );
  useEffect(() => {
    if (router.query.id && all_designers && all_boardgames) {
      const designer = all_designers.find(
        ({ id }) => id === parseInt(router.query.id)
      );
      const boardgames = all_boardgames.filter(({ designers }) =>
        designers.includes(designer.id)
      );
      console.log(boardgames);

      const designers_worked_with_ids = eliminate_duplicates(
        boardgames
          .map((boardgame) => boardgame.designers)
          .reduce((accumulator, currentValue) => {
            return [...accumulator, ...currentValue];
          }, [])
          .filter((id) => {
            return id !== designer.id;
          })
      );
      setDesigner(designer);
      setBoardgames(boardgames);
      console.log(
        all_designers.filter((designer) =>
          designers_worked_with_ids.includes(designer.id)
        )
      );
      set_designers_worked_with(
        all_designers.filter((designer) =>
          designers_worked_with_ids.includes(designer.id)
        )
      );
    }
  }, [router, all_designers, all_boardgames]);

  return (
    <div
      sx={{
        display: "grid",
        width: "100%",
        justifyItems: "center",
        alignItems: "center",
        gridTemplateColumns: "100%",
        rowGap: "20px",
      }}
    >
      <div sx={{ height: "10px" }}></div>
      <DesignerGoBackButton></DesignerGoBackButton>
      {designer && boardgames.length > 0 && (
        <>
          <DesignerTitle></DesignerTitle>
          <Designer
            border={3}
            styles={{ width: "40%" }}
            designer={designer}
          ></Designer>
          {designer.description && (
            <Description description={designer.description} />
          )}
          <DesignerBestGame
            designer={designer}
            boardgame={boardgames[0]}
          ></DesignerBestGame>
          <DesignerWorkedWith
            designers={designers_worked_with}
          ></DesignerWorkedWith>
          <DesignerBoardgames
            designer={designer}
            boardgames={boardgames}
          ></DesignerBoardgames>
        </>
      )}
    </div>
  );
}
