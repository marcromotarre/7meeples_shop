/** @jsxImportSource theme-ui */
import React, { useState } from "react";
import { IMAGES_REPOSITORY } from "src/constants";
import { s3_name } from "src/utils/name";
import { useSelector, useDispatch } from "react-redux";
import BoardgameImportant from "../components/board-games/boardgame-important";
import BoardgamesList from "../components/board-games/board-games-list";
import Image from "next/image";
import {
  sort_importance,
  BOARDGAME_ATTRIBUTES,
  sort_year,
} from "src/components/board-games/utils";
import Description from "src/components/common/text/description";
import MainView from "./main.view";

export default function CategoryView({ family = {}, styles }) {
  const boardgames = useSelector((state) => state.boardgamesReducer.boardgames);
  const { id, name, webname, description, image } = family;
  const filteredBoardgames = boardgames
    ? boardgames
        .filter(({ families }) => families?.includes(id))
        .sort((boardgame1, boardgame2) => sort_year(boardgame1, boardgame2))
    : [];

  return (
    <MainView>
      <div
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          ...styles,
        }}
      >
        <div
          sx={{
            display: "grid",
            width: "80%",
            gridTemplateColumns: "100%",
            flexWrap: "wrap",
            alignItems: "center",
            justifyItems: "center",
            rowGap: "15px",
          }}
        >
          {image && (
            <div
              sx={{
                position: "relative",
                width: "80%",
                height: "0",
                paddingBottom: "80%",
              }}
            >
              <Image
                objectFit="contain"
                alt=""
                layout={"fill"}
                src={`${IMAGES_REPOSITORY}families/${image}`}
              />
            </div>
          )}
          {description && <Description description={description} />}
          {(image || description) && (
            <h3 sx={{ textAlign: "center" }}>
              Los mejores juegos de {webname ? webname : name}
            </h3>
          )}
          <BoardgamesList
            styles={{ width: "100%" }}
            boardgames={filteredBoardgames}
            attributes={[BOARDGAME_ATTRIBUTES.MORE]}
            moreAttributes={[
              BOARDGAME_ATTRIBUTES.PLAY_TIME,
              BOARDGAME_ATTRIBUTES.AGE,
              BOARDGAME_ATTRIBUTES.NUMBER_OF_PLAYERS,
              BOARDGAME_ATTRIBUTES.WEIGHT,
            ]}
          ></BoardgamesList>
        </div>
      </div>
    </MainView>
  );
}
