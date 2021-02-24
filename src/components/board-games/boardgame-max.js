/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect, useState } from "react";
import BoardgameAverage from "./boardgame-average";
import BoardgameName from "./boardgame-name";
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
export default function BoardgameMax({ boardgame }) {
  const {
    id,
    webname: name,
    image,
    PVP,
    active,
    age,
    average,
    categories: categoriesBBDD,
    description,
    designers: designersBBDD,
    expansionOf,
    expansions,
    images,
    mechechanisms,
    numVotes,
    numberOfPlayers,
    numberOfPlayersBest,
    numberOfPlayersNotRecommended,
    playTimeMax,
    playTimeMin,
    price,
    stock,
    year,
    weight,
  } = boardgame;

  useEffect(() => {
    loadCategories();
    loadDesigners();
    setMechanisms();
  }, []);

  const [categories, setCategories] = useState([]);
  const [designers, setDesigners] = useState([]);
  const [mechanisms, setMechanisms] = useState([]);

  const loadCategories = async () => {
    const categories = await get_multiple_categories({ ids: categoriesBBDD });
    console.log(categories);
    setCategories(categories);
  };

  const loadDesigners = async () => {
    const designers = await get_multiple_designers({ ids: designersBBDD });
    setDesigners(designers);
  };

  const loadMechanisms = async () => {
    const mechanisms = await get_multiple_mechanisms({ ids: mechanismsBBDD });
    setMechanisms(mechanisms);
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
      {image && <img sx={{ width: "80%" }} src={image} />}
      <BoardgameAverage average={average} numVotes={numVotes} />
      <BoardgameName name={name} year={year} />
      <div
        sx={{
          width: "100%",
          display: "grid",
          justifyItems: "center",
          rowGap: "13px",
        }}
      >
        <BoardgameSection
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
      </div>
    </div>
  );
}
