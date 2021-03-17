/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect, useState } from "react";
import categories from "../../../src/components/categories/data/categories";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Designer from "src/components/designers/designer";
import BoardgameList from "src/components/board-games/board-games-list";
import designers_icon from "../../../src/assets/svg/sections/designers.svg";
import Description from "../../../src/components/common/text/description";
import List from "../../../src/components/common/list/list";
import ListItem from "../../../src/components/common/list/list-item";
import DesignerButton from "../../../src/components/designers/designer";
import DesignerImage from "../../../src/components/common/images/designer-image";
import { eliminate_duplicates } from "src/utils/array";
import Button from "src/components/common/buttons/button";
import { BOARDGAME_ATTRIBUTES } from "./../../../src/components/board-games/utils";

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

      const designers_worked_with_ids = eliminate_duplicates(
        boardgames
          .map((boardgame) => boardgame.designers)
          .reduce((accumulator, currentValue) => {
            return [...accumulator, ...currentValue];
          }, [])
          .filter((designer) => designer !== designer.id)
      );
      setDesigner(designer);
      setBoardgames(boardgames);
      set_designers_worked_with(
        all_designers.filter((designer) =>
          designers_worked_with_ids.includes(designer.id)
        )
      );
    }
  }, [router, all_designers, all_boardgames]);

  return (
    <>
      {designer && (
        <div
          sx={{
            display: "grid",
            justifyItems: "center",
            alignItems: "flex-start",
            rowGap: "30px",
          }}
        >
          <div sx={{ height: "10px" }}></div>
          <>
            <div
              sx={{
                display: "grid",
                justifyItems: "center",
                alignItems: "center",
                gridTemplateColumns: "auto auto",
                columnGap: "5px",
              }}
            >
              <img sx={{ height: "35px" }} src={designers_icon} />
              <h1 sx={{ paddingTop: "5px" }}>Autor</h1>
            </div>

            <Designer
              border={3}
              styles={{ width: "40%" }}
              designer={designer}
            ></Designer>
            {designer.description && (
              <Description description={designer.description} />
            )}
          </>
          <div
            sx={{
              display: "grid",
              width: "100%",
              justifyItems: "center",
              alignItems: "center",
              gridTemplateColumns: "100%",
              rowGap: "10px",
            }}
          >
            <h3 sx={{ width: "80%", textAlign: "center" }}>
              Ha hecho juegos con:
            </h3>
            <div
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                flexWrap: "wrap",
                width: "100%",
              }}
            >
              {designers_worked_with.map((designer) => (
                <DesignerButton
                  border={3}
                  styles={{
                    width: "26%",
                    maxWidth: "100%",
                    marginBottom: "20px",
                  }}
                  designer={designer}
                ></DesignerButton>
              ))}
            </div>
          </div>
          <div
            sx={{
              display: "grid",
              width: "100%",
              justifyItems: "center",
              alignItems: "center",
              gridTemplateColumns: "100%",
              rowGap: "10px",
            }}
          >
            <h3 sx={{ textAlign: "center", width: "80%" }}>Sus juegos:</h3>
            <BoardgameList
              styles={{ width: "80%" }}
              boardgames={boardgames}
              attributes={[
                BOARDGAME_ATTRIBUTES.DESIGNERS,
                BOARDGAME_ATTRIBUTES.MORE,
              ]}
              moreAttributes={[
                BOARDGAME_ATTRIBUTES.DESIGNERS,
                BOARDGAME_ATTRIBUTES.PLAY_TIME,
                BOARDGAME_ATTRIBUTES.AGE,
                BOARDGAME_ATTRIBUTES.NUMBER_OF_PLAYERS,
                BOARDGAME_ATTRIBUTES.WEIGHT,
              ]}
            ></BoardgameList>
          </div>
          <div sx={{ height: "50px" }}></div>
        </div>
      )}
    </>
  );
}
