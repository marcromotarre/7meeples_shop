/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import MenuItem from "src/components/menu/menu-item";

export const ID = "AWARDS-LIST-VIEW";
export default function awards_list_view({ setGoToStep, data, setData }) {
  const clickOnAward = (id) => {
    setGoToStep(id);
  };

  [
    {
      element: "span",
      properties: {
        text:
          "Los juegos de dos jugadores son perfectos para jugar en pareja o con otra persona.",
      },
    },
    {
      element: "img",
      properties: {
        src:
          "https://7meeplesimages.s3.us-east-2.amazonaws.com/awards/2_players_icon_7meeples.svg",
      },
    },
    {
      element: "span",
      properties: {
        text:
          "La mayoría de la gente tiene la concepción de que los juegos de mesa  son solo para muchos jugadores, y en este post os queremos mostrar que esto NO es cierto",
      },
    },
  ];
  return (
    <div
      sx={{
        width: "100%",
        display: "grid",
        justifyItems: "center",
        alignItems: "center",
        rowGap: "15px",
      }}
    >
      <span
        sx={{
          textAlign: "center",
          width: "75%",
          fontStyle: "italic",
          fontWeight: "100",
        }}
      >
        Estas son nuestras recomendaciones por cada categoria
      </span>
      {data.categories.map((category) => (
        <MenuItem
          key={category.id}
          onClick={() => clickOnAward(category.id)}
          width={"80%"}
          text={category.name}
          icon={category.icon}
        ></MenuItem>
      ))}
    </div>
  );
}
