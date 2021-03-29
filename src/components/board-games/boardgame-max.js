/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect, useState } from "react";
import BoardgameAverage from "./boardgame-average";
import BoardgameName from "./boardgame-name";
import BoardgameDescription from "./boardgame-description";
import BoardgameGalleryImage from "./boardgame-gallery-image";
import BoardgamesList from "./board-games-list";
import BoardgameImageCarousel from "src/components/board-games/boardgame-image-carousel";
import BoardgameSectionMaxNumberOfPlayers from "./section-max/boargame-section-max-number-of-players";
import BoardgameSectionMaxWeight from "./section-max/boardgame-section-max-weight";
import BoardgameSectionMaxAge from "./section-max/boardgame-section-max-age";
import BoardgameSectionMaxPlayTime from "./section-max/boardgame-section-max-playtime";
import BoardgameSectionMaxDesigners from "./section-max/boardgame-section-max-designers";
import BoardgameSectionMaxCategories from "./section-max/boardgame-section-max-categories";
import BoardgameSectionMaxMechanisms from "./section-max/boardgame-section-max-mechanisms";
import BoardgameSectionMaxExpansionOf from "./section-max/boardgame-section-max-expansion-of";
import BoardgameSectionMaxExpansions from "./section-max/boardgame-section-max-expansions";

import { get_multiple_boardgames } from "src/backend/boardgames";
import Modal, { TYPES as MODAL_TYPES } from "./modals/boardgame-modal";
import { IMAGES_REPOSITORY } from "src/constants";
import { s3_name } from "src/utils/name";
import { useRouter } from "next/router";
import List from "../common/list/list";
import DesignerButton from "../designers/designer";

export default function BoardgameMax({ boardgame }) {
  const {
    id = 0,
    webname = "",
    PVP = 0,
    age = 0,
    average = 0,
    categories = [],
    description = "",
    designers = [],
    expansionOf = [],
    expansions = [],
    images = [],
    mechanisms = [],
    numVotes = 0,
    numberOfPlayers = [],
    numberOfPlayersBest = [],
    numberOfPlayersNotRecommended = [],
    playTimeMax = 0,
    playTimeMin = 0,
    price = 0,
    stock = 0,
    year = 0,
    weight = 0,
    image,
    imageDefault,
  } = boardgame;
  console.log(boardgame);
  const router = useRouter();

  const [modal, setModal] = useState("");
  const onCloseModal = () => {
    setModal("");
  };
  const [showDefaultImage, setShowDefaultImage] = useState(false);

  return (
    <>
      <div sx={{ height: "20px" }}></div>
      <div
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: ["100%", "400px auto"],
          gridTemplateAreas: [
            `"image" "average" "name" "description" "play-time" "age" "number-players" "weight" "designers" "categories" "mechanisms" "expansion-of" "expansions"`,
            `"name average" "image play-time" "image age" "image number-players" "image weight" "image designers"`,
          ],
          justifyItems: "center",
          alignItems: "center",
          rowGap: "10px",
        }}
      >
        <BoardgameImageCarousel
          images={images}
          image={image}
          styles={{ gridArea: "image" }}
          height={"300px"}
          width={"80%"}
          imageDefault={imageDefault}
        />
        <BoardgameAverage
          styles={{ gridArea: "average" }}
          average={average}
          numVotes={numVotes}
        />
        <BoardgameName
          styles={{ gridArea: "name" }}
          name={webname}
          year={year}
        />
        <BoardgameDescription
          styles={{ gridArea: "description" }}
          description={description}
        />

        <BoardgameSectionMaxPlayTime
          styles={{ gridArea: "play-time", width: "80%" }}
          playTimeMin={playTimeMin}
          playTimeMax={playTimeMax}
        />
        <BoardgameSectionMaxAge
          age={age}
          styles={{ gridArea: "age", width: "80%" }}
        />

        <BoardgameSectionMaxNumberOfPlayers
          styles={{ gridArea: "number-players", width: "80%" }}
          numberOfPlayersBest={numberOfPlayersBest}
          numberOfPlayersNotRecommended={numberOfPlayersNotRecommended}
          numberOfPlayers={numberOfPlayers}
        />

        <BoardgameSectionMaxWeight
          styles={{ gridArea: "weight", width: "80%" }}
          weight={weight}
        />

        <BoardgameSectionMaxDesigners
          styles={{ gridArea: "designers", width: "80%" }}
          designers={designers}
        />

        <BoardgameSectionMaxCategories
          styles={{ gridArea: "categories", width: "80%" }}
          categories={categories}
        />

        <BoardgameSectionMaxMechanisms
          styles={{ gridArea: "mechanisms", width: "80%" }}
          mechanisms={mechanisms}
        />
        {expansionOf.length > 0 && (
          <BoardgameSectionMaxExpansionOf
            styles={{ gridArea: "expansion-of", width: "80%" }}
            expansionOf={expansionOf}
          />
        )}

        {expansions.length > 0 && (
          <BoardgameSectionMaxExpansions
            styles={{ gridArea: "expansions", width: "80%" }}
            expansions={expansions}
          />
        )}

        <div sx={{ height: "50px" }}></div>
      </div>
    </>
  );
}
