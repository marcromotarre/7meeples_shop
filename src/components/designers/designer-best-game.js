/** @jsxImportSource theme-ui */
import awards_icon from "../../assets/svg/categories/icon.svg";
import BoardgameMin from "../board-games/boardgame-min";
import { BOARDGAME_ATTRIBUTES } from "../board-games/utils";
import Image from "next/image";

export default function DesignerBestGame({ styles, designer, boardgame }) {
  console.log(boardgame);
  return (
    <div
      sx={{
        display: "grid",
        width: "100%",
        gridTemplateColumns: "100%",
        flexWrap: "wrap",
        alignItems: "center",
        justifyItems: "center",
        rowGap: "10px",
        ...styles,
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
        <Image
          sx={{ justigySelf: "center", height: "32px", width: "auto" }}
          src={awards_icon}
        ></Image>
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
        <Image
          alt=""
          sx={{ justigySelf: "center", height: "32px", width: "auto" }}
          src={awards_icon}
        ></Image>
      </div>
      <BoardgameMin
        styles={{ width: "100%" }}
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
