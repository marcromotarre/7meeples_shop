/** @jsxImportSource theme-ui */

import BoardgameSectionMaxNumberOfPlayers from "./section-max/boargame-section-max-number-of-players";
import BoardgameSectionMaxWeight from "./section-max/boardgame-section-max-weight";
import BoardgameSectionMaxAge from "./section-max/boardgame-section-max-age";
import BoardgameSectionMaxPlayTime from "./section-max/boardgame-section-max-playtime";
import BoardgameSectionMaxDesigners from "./section-max/boardgame-section-max-designers";
import BoardgameSectionMaxCategories from "./section-max/boardgame-section-max-categories";
import BoardgameSectionMaxMechanisms from "./section-max/boardgame-section-max-mechanisms";
import BoardgameSectionMaxExpansionOf from "./section-max/boardgame-section-max-expansion-of";
import BoardgameSectionMaxExpansions from "./section-max/boardgame-section-max-expansions";
import BoardgameSectionMaxContent from "./section-max/boardgame-section-max-content";
import BoardgameSectionMaxFamilies from "./section-max/boardgame-section-max-families";

import React, { useState } from "react";
export default function BoardgameProperties({
  styles,
  playTimeMin,
  playTimeMax,
  age,
  numberOfPlayersBest,
  numberOfPlayersNotRecommended,
  numberOfPlayers,
  weight,
  designers,
  families,
  categories,
  mechanisms,
}) {
  return (
    <div
      sx={{
        height: "100%",
        overflow: "auto",
        display: "grid",
        justifyItems: "center",
        alignItems: "center",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "100%",
        justifyItems: "center",
        alignItems: "center",
        rowGap: "10px",
        width: "100%",
        ...styles,
      }}
    >
      <BoardgameSectionMaxPlayTime
        styles={{ width: "100%" }}
        playTimeMin={playTimeMin}
        playTimeMax={playTimeMax}
      />
      <BoardgameSectionMaxAge age={age} styles={{ width: "100%" }} />

      <BoardgameSectionMaxNumberOfPlayers
        styles={{ width: "100%" }}
        numberOfPlayersBest={numberOfPlayersBest}
        numberOfPlayersNotRecommended={numberOfPlayersNotRecommended}
        numberOfPlayers={numberOfPlayers}
      />

      <BoardgameSectionMaxWeight styles={{ width: "100%" }} weight={weight} />

      <BoardgameSectionMaxDesigners
        styles={{ width: "100%" }}
        designers={designers}
      />

      {families.length > 0 && (
        <BoardgameSectionMaxFamilies
          styles={{ width: "100%" }}
          families={families}
        />
      )}

      <BoardgameSectionMaxCategories
        styles={{ width: "100%" }}
        categories={categories}
      />

      <BoardgameSectionMaxMechanisms
        styles={{ width: "100%" }}
        mechanisms={mechanisms}
      />

      <BoardgameSectionMaxCategories
        styles={{ width: "100%" }}
        categories={categories}
      />

      <BoardgameSectionMaxMechanisms
        styles={{ width: "100%" }}
        mechanisms={mechanisms}
      />

      <BoardgameSectionMaxCategories
        styles={{ width: "100%" }}
        categories={categories}
      />

      <BoardgameSectionMaxMechanisms
        styles={{ width: "100%" }}
        mechanisms={mechanisms}
      />

      <BoardgameSectionMaxCategories
        styles={{ width: "100%" }}
        categories={categories}
      />

      <BoardgameSectionMaxMechanisms
        styles={{ width: "100%" }}
        mechanisms={mechanisms}
      />
    </div>
  );
}
