/** @jsxImportSource theme-ui */
import React, { useState } from "react";
import { IMAGES_REPOSITORY } from "src/constants";
import Image from "next/image";
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
import family_icon from "src/assets/svg/sections/families.svg";
import MainView from "./main.view";
import { useRouter } from "next/router";

export default function AllFamiliesView({ families = [], styles }) {
  const router = useRouter();
  const clickOnPublisher = (id, name) => {
    router.push(`/familias/${id}/${name}`);
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
          <Image alt="" src={family_icon}></Image>
          <h1>Familias</h1>
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
          {families
            .filter(({ type }) => type === "Game")
            .map(({ name, id, image, color, full }) => (
              <div
                key={id}
                sx={{
                  borderRadius: "10px",
                  boxShadow: "rgb(0 0 0 / 10%) 0px 10px 10px",
                  width: "100%",
                  position: "relative",
                  paddingTop: "100%",
                  display: "flex",
                  background: color,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={() => clickOnPublisher(id, name)}
              >
                <div
                  sx={{
                    position: "absolute",
                    top: "0",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    alt=""
                    sx={{
                      borderRadius: full ? "10px" : "0px",
                      display: "block",
                      width: full ? "100%" : "90%",
                      height: "auto",
                      maxHeight: full ? "100%" : "90%",
                      objectFit: "contain",
                    }}
                    src={`${IMAGES_REPOSITORY}families/${image}`}
                  ></Image>
                </div>
              </div>
            ))}
        </div>
      </div>
    </MainView>
  );
}
