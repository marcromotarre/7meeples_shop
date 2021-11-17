/** @jsxImportSource theme-ui */
import React, { useState } from "react";
import Image from "next/image";
import { IMAGES_REPOSITORY } from "src/constants";
import { s3_name } from "src/utils/name";
import { useSelector, useDispatch } from "react-redux";
import BoardgameImportant from "../components/board-games/boardgame-important";
import BoardgamesList from "../components/board-games/board-games-list";
import Square from "src/components/common/slider/square";
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
          <Image alt="" src={publisher_icon}></Image>
          <h1>Editoriales</h1>
        </div>
        <div
          sx={{
            display: "grid",
            width: "90%",
            gridTemplateColumns: [
              "calc(50% - 8px) calc(50% - 8px)",
              "calc(33% - 10px) calc(33% - 10px) calc(33% - 10px)",
              "calc(25% - 12px) calc(25% - 12px) calc(25% - 12px) calc(25% - 12px)",
              "calc(20% - 13px) calc(20% - 13px) calc(20% - 13px) calc(20% - 13px) calc(20% - 13px)",
            ],
            flexWrap: "wrap",
            alignItems: "center",
            justifyItems: "center",
            columnGap: ["16px", "15px", "15px", "15px"],
            rowGap: ["16px", "15px", "15px", "15px"],
          }}
        >
          {publishers.map(({ name, id, image, color, full = false }) => (
            <Square
              name={name}
              id={id}
              image={`${IMAGES_REPOSITORY}publishers/${image}`}
              color={color}
              full={full}
              onClick={(id, name) => clickOnPublisher(id, name)}
            />
          ))}
        </div>
      </div>
    </MainView>
  );
}

//<h1 onClick={() => clickOnPublisher(id, name)}>{name}</h1>
