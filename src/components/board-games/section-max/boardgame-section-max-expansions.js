/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect, useState } from "react";
import Section from "./boardgame-section-max";
import icon from "../../../assets/svg/sections/expansions.svg";
import { useRouter } from "next/router";
import BoardgamesList from "../board-games-list";
import { BOARDGAME_ATTRIBUTES } from "../utils";

export default function SectionMaxExpansions({ styles, expansions = [] }) {
  const router = useRouter();

  return (
    <Section
      styles={{ ...styles }}
      name={"Expansiones"}
      icon={icon}
      iconStyles={{ marginLeft: "6px" }}
    >
      <div
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "start",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        <BoardgamesList
          styles={{ width: "100%" }}
          boardgames={expansions}
          attributes={[BOARDGAME_ATTRIBUTES.MORE]}
        ></BoardgamesList>
      </div>
    </Section>
  );
}
