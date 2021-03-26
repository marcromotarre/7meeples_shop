/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect, useState } from "react";
import Section from "./boardgame-section-max";
import icon from "../../../assets/svg/sections/expansion-of.svg";
import { useRouter } from "next/router";
import BoardgamesList from "../board-games-list";

export default function SectionMaxExpansionOf({ styles, expansionOf = [] }) {
  const router = useRouter();

  return (
    <Section
      styles={{ ...styles }}
      name={"Expansión de"}
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
          boardgames={expansionOf}
        ></BoardgamesList>
      </div>
    </Section>
  );
}
