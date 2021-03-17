/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect, useState } from "react";
import BoardgameAverage from "./boardgame-average";
import BoardgameName from "./boardgame-name";
import BoardgameDescription from "./boardgame-description";
import BoardgameGalleryImage from "./boardgame-gallery-image";
import BoardgamesList from "./board-games-list";

import BoardgameSection from "./section/boardgame-section-max";
import BoardgameSectionNumberOfPlayers from "./section/boargame-section-number-of-players";
import BoardgameSectionWeight from "./section/boardgame-section-weight";

import BoardgameSectionDesigners from "./section/boardgame-section-designers";
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
    <div
      sx={{
        width: "100%",
        display: "grid",
        justifyItems: "center",
        alignItems: "center",
        rowGap: "10px",
      }}
    >
      <div sx={{ height: "20px" }}></div>
      <img
        onError={() => setShowDefaultImage(true)}
        sx={{ maxHeight: "300px", maxWidth: "80%" }}
        src={
          showDefaultImage
            ? imageDefault
            : `${IMAGES_REPOSITORY}boardgames/${s3_name(webname)}.jpg`
        }
      />
      <BoardgameAverage average={average} numVotes={numVotes} />
      <BoardgameName name={webname} year={year} />
      <BoardgameDescription description={description} />
      <div
        sx={{
          width: "100%",
          display: "grid",
          justifyItems: "center",
          rowGap: "13px",
        }}
      >
        <BoardgameSection
          onClick={() => setModal(MODAL_TYPES.PLAY_TIME)}
          styles={{ width: "80%" }}
          name={"Duración"}
          icon={play_time_icon}
        >
          <BoardgameSectionText>
            {play_time_string(playTimeMin, playTimeMax)}
          </BoardgameSectionText>
        </BoardgameSection>
        <BoardgameSection
          onClick={() => setModal(MODAL_TYPES.AGE)}
          styles={{ width: "80%" }}
          name={"Edad"}
          icon={age_icon}
        >
          <BoardgameSectionText>{age_string(age)}</BoardgameSectionText>
        </BoardgameSection>
        <BoardgameSection
          onClick={() => setModal(MODAL_TYPES.NUM_PLAYERS)}
          styles={{ width: "80%" }}
          name={"Número de jugadorxs"}
          icon={number_of_players_icon}
        >
          <BoardgameSectionNumberOfPlayers
            numberOfPlayersBest={numberOfPlayersBest}
            numberOfPlayersNotRecommended={numberOfPlayersNotRecommended}
            numberOfPlayers={numberOfPlayers}
          />
        </BoardgameSection>
        <BoardgameSection
          onClick={() => setModal(MODAL_TYPES.WEIGHT)}
          styles={{ width: "80%" }}
          name={"Dificultad"}
          icon={weight_icon}
        >
          <BoardgameSectionWeight
            styles={{ marginTop: "10px" }}
            weight={weight}
          ></BoardgameSectionWeight>
        </BoardgameSection>
        {designers?.length > 0 && (
          <BoardgameSection
            styles={{ width: "80%" }}
            name={designers.length > 1 ? "Autores" : "Autor"}
            icon={designers_icon}
          >
            <div
              sx={{
                marginTop: "10px",
                display: "grid",
                gridTemplateColumns:
                  "calc(33% - 7px) calc(33% - 7px) calc(33% - 7px)",
                justifyItems: "flex-start",
                alignItems: "center",
                columnGap: "20px",
              }}
            >
              {designers.map((designer) => (
                <DesignerButton
                  styles={{
                    width: "100%",
                    maxWidth: "100%",
                    paddingRight: "10%",
                  }}
                  designer={designer}
                ></DesignerButton>
              ))}
            </div>
          </BoardgameSection>
        )}
        {categories?.length > 0 && (
          <BoardgameSection
            onClick={() => setModal(MODAL_TYPES.CATEGORIES)}
            styles={{ width: "80%" }}
            name={categories.length > 1 ? "Categorias" : "Categoria"}
            icon={categories_icon}
          >
            <BoardgameSectionCategories categories={categories} />
          </BoardgameSection>
        )}
        {mechanisms?.length > 0 && (
          <BoardgameSection
            onClick={() => setModal(MODAL_TYPES.WEIGHT)}
            styles={{ width: "80%" }}
            name={mechanisms.length > 1 ? "Mecánicas" : "Mecánica"}
            icon={mechanisms_icon}
          >
            <BoardgameSectionMechanisms mechanisms={mechanisms} />
          </BoardgameSection>
        )}

        {expansionOf.length > 0 && (
          <>
            És expansión de
            <BoardgamesList
              styles={{ width: "80%" }}
              boardgames={expansionOf}
            ></BoardgamesList>
          </>
        )}

        {expansions.length > 0 && (
          <>
            Tiene expansiones
            <BoardgamesList
              styles={{ width: "80%" }}
              boardgames={expansions}
            ></BoardgamesList>
          </>
        )}
      </div>
      <Modal boardgame={boardgame} type={modal} onClose={onCloseModal}></Modal>
      <div sx={{ height: "50px" }}></div>
    </div>
  );
}
