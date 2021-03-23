/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect, useState } from "react";
import BoardgameAverage from "./boardgame-average";
import BoardgameName from "./boardgame-name";
import BoardgameDescription from "./boardgame-description";
import BoardgameGalleryImage from "./boardgame-gallery-image";
import BoardgamesList from "./board-games-list";
import BoardgameImage from "src/components/board-games/boardgame-image";
import BoardgameSection from "./section-max/boardgame-section-max";
import BoardgameSectionMaxNumberOfPlayers from "./section-max/boargame-section-max-number-of-players";
import BoardgameSectionMaxWeight from "./section-max/boardgame-section-max-weight";
import BoardgameSectionMaxAge from "./section-max/boardgame-section-max-age";
import BoardgameSectionMaxPlayTime from "./section-max/boardgame-section-max-playtime";
import BoardgameSectionMaxDesigners from "./section-max/boardgame-section-max-designers";

import BoardgameSectionMechanisms from "./section/boardgame-section-mechanisms";
import BoardgameSectionCategories from "./section/boardgame-section-categories";
import BoardgameSectionText from "./section/boardgame-section-text";
import age_icon from "../../assets/svg/sections/age.svg";
import play_time_icon from "../../assets/svg/sections/play-time.svg";
import number_of_players_icon from "../../assets/svg/sections/number-of-players.svg";
import weight_icon from "../../assets/svg/sections/weight.svg";
import mechanisms_icon from "../../assets/svg/sections/mechanisms.svg";
import categories_icon from "../../assets/svg/sections/categories.svg";
import designers_icon from "../../assets/svg/sections/designers.svg";

import { get_multiple_categories } from "../../backend/categories";
import { get_multiple_designers } from "../../backend/designers";
import { get_multiple_mechanisms } from "../../backend/mechanisms";

import {
  play_time_string,
  weight_string,
  age_string,
  round_weight,
} from "./utils";
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
            `"image" "average" "name" "description" "play-time" "age" "number-players" "weight" "designers"`,
            `"name average" "image play-time" "image age" "image number-players" "image weight" "image designers"`,
          ],
          justifyItems: "center",
          alignItems: "center",
          rowGap: "10px",
        }}
      >
        <BoardgameImage
          styles={{ gridArea: "image", maxHeight: "300px", maxWidth: "80%" }}
          imageDefault={imageDefault}
          name={webname}
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

        {/*categories?.length > 0 && (
          <BoardgameSection
            onClick={() => setModal(MODAL_TYPES.CATEGORIES)}
            styles={{ width: "80%" }}
            name={categories.length > 1 ? "Categorias" : "Categoria"}
            icon={categories_icon}
          >
            <BoardgameSectionCategories categories={categories} />
          </BoardgameSection>
        )*/}
        {/*mechanisms?.length > 0 && (
          <BoardgameSection
            onClick={() => setModal(MODAL_TYPES.WEIGHT)}
            styles={{ width: "80%" }}
            name={mechanisms.length > 1 ? "Mecánicas" : "Mecánica"}
            icon={mechanisms_icon}
          >
            <BoardgameSectionMechanisms mechanisms={mechanisms} />
          </BoardgameSection>
        )*/}

        {/*expansionOf.length > 0 && (
          <>
            És expansión de
            <BoardgamesList
              styles={{ width: "80%" }}
              boardgames={expansionOf}
            ></BoardgamesList>
          </>
        )*/}

        {/*expansions.length > 0 && (
          <>
            Tiene expansiones
            <BoardgamesList
              styles={{ width: "80%" }}
              boardgames={expansions}
            ></BoardgamesList>
          </>
        )*/}

        <div sx={{ height: "50px" }}></div>
      </div>
    </>
  );
}
