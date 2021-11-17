/** @jsxImportSource theme-ui */
import React, { useState } from "react";
import { IMAGES_REPOSITORY } from "src/constants";
import { s3_name } from "src/utils/name";
import { useSelector, useDispatch } from "react-redux";
import BoardgameImportant from "../components/board-games/boardgame-important";
import Image from "next/image";
import BoardgamesList from "../components/board-games/board-games-list";
import {
  sort_importance,
  BOARDGAME_ATTRIBUTES,
} from "src/components/board-games/utils";
import Description from "src/components/common/text/description";
import MainView from "./main.view";

export default function MechanismView({ mechanism = {}, styles }) {
  //get boardgames
  const boardgames = useSelector((state) => state.boardgamesReducer.boardgames);
  const { id, name, webname, description } = mechanism;
  const boardgamesFiltered = boardgames
    ? boardgames
        .filter(({ mechechanisms }) => mechechanisms.includes(id))
        .sort((boardgame1, boardgame2) =>
          sort_importance(boardgame1, boardgame2)
        )
    : [];
  const [showImage, setShowImage] = useState(true);
  const onImageError = () => {
    setShowImage(false);
  };

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
          <h1 sx={{ textAlign: "center" }}>{webname ? webname : name}</h1>
          {showImage && (
            <Image
              alt=""
              onError={onImageError}
              src={`${IMAGES_REPOSITORY}mechanisms/${s3_name(name)}.svg`}
            />
          )}
          {description && <Description description={description} />}
          {(showImage || description) && (
            <h3 sx={{ textAlign: "center" }}>
              Los mejores juegos de {webname ? webname : name}
            </h3>
          )}
          <BoardgamesList
            styles={{ width: "100%" }}
            boardgames={boardgamesFiltered}
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
