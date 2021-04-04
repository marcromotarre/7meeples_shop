/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useState } from "react";
import { IMAGES_REPOSITORY } from "src/constants";
import { s3_name } from "src/utils/name";
import { useSelector, useDispatch } from "react-redux";
import BoardgameImportant from "../components/board-games/boardgame-important";
import BoardgamesList from "../components/board-games/board-games-list";
import {
  sort_importance,
  BOARDGAME_ATTRIBUTES,
  sort_year,
} from "src/components/board-games/utils";
import Description from "src/components/common/text/description";
import MainView from "./main.view";
import { useRouter } from "next/router";

export default function CategoryView({ publishers = [], styles }) {
  const router = useRouter();
  const clickOnPublisher = (id, name) => {
    router.push(`/editoriales/${id}/${name}`);
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
          {publishers.map(({ name, id }) => (
            <h1 onClick={() => clickOnPublisher(id, name)}>{name}</h1>
          ))}
        </div>
      </div>
    </MainView>
  );
}
