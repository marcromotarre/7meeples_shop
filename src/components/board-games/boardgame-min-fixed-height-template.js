/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect, useState } from "react";
import BoardgameScore from "./boardgame-average";
import BoardgameName from "./boardgame-name-small";
import { get_min_section } from "./section/utils";
import { IMAGES_REPOSITORY } from "src/constants";
import { DEFAULT_BOARDGAME_ATTRIBUTES } from "./utils";
import { s3_name } from "src/utils/name";
import Image from "../common/images/image";
import hexa_default from "../../assets/svg/hexa-default.svg";

export default function BoardgameMinFixedHeight({ styles }) {
  return (
    <div
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        transition: "0.3s",
        display: "grid",
        justifyItems: "center",
        alignItems: "center",
        gridTemplateRows: "0px calc(100% - 60px - 44px - 40px) 60px 44px 0px",
        rowGap: "10px",
        ...styles,
      }}
    >
      <div></div>
      <div
        sx={{
          width: "100%",
          position: "relative",
          paddingTop: "80%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
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
          <div
            sx={{
              width: "80%",
              height: "100%",
              backgroundColor: "#EFF2F5",
            }}
          />
        </div>
      </div>

      <div
        sx={{
          display: "grid",
          gridTemplateColumns: ["auto", "auto auto"],
          justifyItems: "center",
          alignItems: "center",
          rowGap: ["0px", "0px"],
          columnGap: ["0px", "10px"],
          ...styles,
        }}
      >
        <div
          sx={{
            position: "relative",
          }}
        >
          <img sx={{ height: "40px" }} src={hexa_default}></img>
        </div>
        <div
          sx={{ backgroundColor: "#EFF2F5", height: "10px", width: "100%" }}
        />
      </div>
      <div sx={{ display: "flex", width: "calc(100% - 60px)" }}>
        <div
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%",
            ...styles,
          }}
        >
          <div
            sx={{
              height: "100%",
              display: "grid",
              rowGap: "3px",
              width: "100%",
            }}
          >
            <div
              sx={{
                height: "15px",
                width: "100%",
                backgroundColor: "#EFF2F5",
              }}
            ></div>
            <div
              sx={{
                height: "15px",
                width: "100%",
                backgroundColor: "#EFF2F5",
              }}
            ></div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}
