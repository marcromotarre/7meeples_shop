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
import publisher_icon from "src/assets/svg/publisher.svg";
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
          display: "grid",
          width: "100%",
          gridTemplateColumns: "100%",
          alignItems: "center",
          justifyItems: "center",
          rowGap: "20px",
          ...styles,
        }}
      >
        <div
          sx={{
            display: "grid",
            gridTemplateColumns: "100%",
            alignItems: "center",
            justifyItems: "center",
            rowGap: "10px",
          }}
        >
          <img src={publisher_icon}></img>
          <h1>Editoriales</h1>
        </div>
        <div
          sx={{
            display: "grid",
            width: "90%",
            gridTemplateColumns: "calc(50% - 8px) calc(50% - 8px)",
            flexWrap: "wrap",
            alignItems: "center",
            justifyItems: "center",
            columnGap: "16px",
            rowGap: "16px",
          }}
        >
          {publishers.map(({ name, id, image, color }) => (
            <div
              sx={{
                borderRadius: "10px",
                boxShadow: "rgb(0 0 0 / 10%) 0px 10px 10px",
                background: color,
                width: "100%",
                aspectRatio: "1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={() => clickOnPublisher(id, name)}
            >
              <img
                sx={{ width: "90%", height: "auto", maxHeight: "90%" }}
                src={`${IMAGES_REPOSITORY}publishers/${image}`}
              ></img>
            </div>
          ))}
        </div>
      </div>
    </MainView>
  );
}

//<h1 onClick={() => clickOnPublisher(id, name)}>{name}</h1>
