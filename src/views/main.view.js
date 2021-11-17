/** @jsxImportSource theme-ui */
import React from "react";
import { IMAGES_REPOSITORY } from "src/constants";
import { s3_name } from "src/utils/name";
import { useSelector, useDispatch } from "react-redux";
import BoardgameImportant from "../components/board-games/boardgame-important";
import BoardgamesList from "../components/board-games/board-games-list";
import { sort_importance } from "src/components/board-games/utils";
import Description from "src/components/common/text/description";
import GoBackButton from "src/components/common/go-back/go-back-button";

export default function MainView({ children, styles, back }) {
  return (
    <div
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        ...styles,
      }}
    >
      {!back && <div sx={{ width: "100%", height: "50px" }}></div>}
      {back && (
        <>
          <div sx={{ width: "100%", height: "10px" }}></div>
          <GoBackButton route={back.route} text={back.text}></GoBackButton>
        </>
      )}
      {children}
      <div sx={{ width: "100%", height: "50px" }}></div>
    </div>
  );
}
