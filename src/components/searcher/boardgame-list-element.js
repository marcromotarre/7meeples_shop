/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import BoardgameImage from "../board-games/boardgame-image";

export default function BoardgameListElement({ boardgame, styles }) {
  const { imageDefault, webname } = boardgame;
  const height = styles?.height ? styles.height : "100%";
  return (
    <div
      sx={{
        display: "grid",
        width: "100%",
        height: "100%",
        gridTemplateColumns: "40px auto 60px",
        columnGap: "10px",
        ...styles,
      }}
    >
      <BoardgameImage
        name={webname}
        imageDefault={imageDefault}
        styles={{
          justifySelf: "center",
          alignSelf: "center",
          objectFit: "contain",
          width: "100%",
          height: `calc(${height} - 15px)`,
          maxHeight: "100%",
        }}
      ></BoardgameImage>

      <div sx={{ justifySelf: "start", alignSelf: "center" }}>{webname}</div>
      <div></div>
    </div>
  );
}
