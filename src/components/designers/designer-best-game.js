/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import designers_icon from "../../assets/svg/sections/designers.svg";
import designers_icon_inverted from "../../assets/svg/sections/designers-inverted.svg";
import DesignerImage from "../common/images/designer-image";
import { useRouter } from "next/router";
import awards_icon from "../../assets/svg/categories/icon.svg";
import BoardgameMin from "../board-games/boardgame-min";
import { BOARDGAME_ATTRIBUTES } from "../board-games/utils";

export default function DesignerBestGame({ designer, boardgame }) {
  console.log(boardgame);
  return (
    <div
      sx={{
        display: "grid",
        gridTemplateColumns: "100%",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        rowGap: "10px",
      }}
    >
      <div
        sx={{
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          columnGap: "15px",
        }}
      >
        <img
          sx={{ justigySelf: "center", height: "32px", width: "auto" }}
          src={awards_icon}
        ></img>
        <div
          sx={{
            width: "fit-content",
            display: "grid",
            justifyItems: "center",
            alignItems: "center",
            gridTemplateColumns: "100%",
          }}
        >
          <h3
            sx={{
              whiteSpace: "nowrap",
            }}
          >
            Juego Recomendado
          </h3>
          <h3
            sx={{
              whiteSpace: "nowrap",
            }}
          >
            de {designer?.name}
          </h3>
        </div>
        <img
          sx={{ justigySelf: "center", height: "32px", width: "auto" }}
          src={awards_icon}
        ></img>
      </div>
      <BoardgameMin
        boardgame={boardgame}
        attributes={[
          BOARDGAME_ATTRIBUTES.PLAY_TIME,
          BOARDGAME_ATTRIBUTES.AGE,
          BOARDGAME_ATTRIBUTES.NUMBER_OF_PLAYERS,
          BOARDGAME_ATTRIBUTES.WEIGHT,
          BOARDGAME_ATTRIBUTES.DESIGNERS,
        ]}
      />
    </div>
  );
}
