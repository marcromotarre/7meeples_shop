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
import Modal from "../common/modals/modal";
export default function BoardgameMax({ boardgame, setBoardGame }) {
  const {
    id = 0,
    webname = "",
    image = "",
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
    imageDefault = "",
  } = boardgame;

  const [modal, setModal] = useState(false);
  const onCloseModal = () => {
    setModal(false);
  };
  const clickOnPlayTimeInfo = () => {
    setModal(true);
  };

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
      {image && (
        <img
          sx={{ maxHeight: "300px", maxWidth: "80%" }}
          src={image ? image : imageDefault}
        />
      )}
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
          onClick={clickOnPlayTimeInfo}
          styles={{ width: "80%" }}
          name={"Duración"}
          icon={play_time_icon}
        >
          <BoardgameSectionText>
            {play_time_string(playTimeMin, playTimeMax)}
          </BoardgameSectionText>
        </BoardgameSection>
        <BoardgameSection
          styles={{ width: "80%" }}
          name={"Edad"}
          icon={age_icon}
        >
          <BoardgameSectionText>{age_string(age)}</BoardgameSectionText>
        </BoardgameSection>
        <BoardgameSection
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
          styles={{ width: "80%" }}
          name={"Dificultad"}
          icon={weight_icon}
        >
          <BoardgameSectionText>
            {weight_string(round_weight(weight))}
          </BoardgameSectionText>
        </BoardgameSection>
        {designers?.length > 0 && (
          <BoardgameSection
            styles={{ width: "80%" }}
            name={designers.length > 1 ? "Diseñadores" : "Diseñador"}
            icon={designers_icon}
          >
            <BoardgameSectionDesigners designers={designers} />
          </BoardgameSection>
        )}
        {categories?.length > 0 && (
          <BoardgameSection
            styles={{ width: "80%" }}
            name={categories.length > 1 ? "Categorias" : "Categoria"}
            icon={categories_icon}
          >
            <BoardgameSectionCategories categories={categories} />
          </BoardgameSection>
        )}
        {mechanisms?.length > 0 && (
          <BoardgameSection
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
              clickOnBoardGame={() => setBoardGame({})}
              styles={{ width: "80%" }}
              boardgames={expansionOf}
            ></BoardgamesList>
          </>
        )}

        {expansions.length > 0 && (
          <>
            Tiene expansiones
            <BoardgamesList
              clickOnBoardGame={() => setBoardGame({})}
              styles={{ width: "80%" }}
              boardgames={expansions}
            ></BoardgamesList>
          </>
        )}
      </div>
      {modal && <Modal onClose={onCloseModal} />}
    </div>
  );
}
