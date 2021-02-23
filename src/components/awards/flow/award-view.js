/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import BoardgamesList from "../../board-games/board-games-list";

export const ID = "AWARD-VIEW";
export default function award_view({ setGoToStep, data, setData }) {
  const category_index = data.categories.findIndex(
    (category) => category.id === data.selected
  );

  const category_information = { ...data.categories[category_index] };
  const boardgames = category_information.boardgames?.map((boardgame_id) =>
    data.boardgames.find(({ id }) => id === boardgame_id)
  );

  const separator = {
    width: "100%",
    height: "0.05em",
    backgroundColor: "rgba(181, 181, 181, 0.5)",
  };

  const getHTML = ({ element, properties, index }) => {
    if (element === "span") {
      return (
        <span sx={properties.sx} key={index}>
          {properties.text}
        </span>
      );
    }
    if (element === "img") {
      return <img sx={properties.sx} src={properties.src} />;
    }
  };
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {category_information?.description && (
        <div
          sx={{
            display: "grid",
            rowGap: "10px",
            flexDirection: "column",
            width: "90%",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          <div sx={separator}></div>

          {category_information.description.map(
            ({ element, properties }, index) =>
              getHTML({ element, properties, index })
          )}
          <div sx={separator}></div>
        </div>
      )}
      <div sx={{ height: "20px" }}></div>
      <BoardgamesList
        styles={{ width: "80%" }}
        boardgames={boardgames ? boardgames : []}
      />
    </div>
  );
}
