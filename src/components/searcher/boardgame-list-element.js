/** @jsxImportSource theme-ui */
import BoardgameImage from "../board-games/boardgame-image";
import { useRouter } from "next/router";

export default function BoardgameListElement({ element, styles }) {
  const { imageDefault, webname, id } = element;
  const height = styles?.height ? styles.height : "100%";

  const router = useRouter();
  const onClickBoardgame = () => {
    router.push(`/juego/${id}`);
  };
  return (
    <div
      onClick={onClickBoardgame}
      sx={{
        display: "grid",
        width: "100%",
        height: "100%",
        gridTemplateColumns: "40px auto ",
        columnGap: "20px",
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
          maxHeight: styles.maxHeight,
          maxWidth: styles.maxWidth,
        }}
      ></BoardgameImage>

      <div sx={{ justifySelf: "start", alignSelf: "center" }}>{webname}</div>
    </div>
  );
}
