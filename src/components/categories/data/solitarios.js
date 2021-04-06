import un_jugador_icon from "../../../assets/svg/categories/solitarios/1-jugador-icon.svg";
import solitarios_icon from "../../../assets/svg/categories/solitarios-icon.svg";

const description = [
  {
    element: "span",
    properties: {
      sx: { textAlign: "center", fontWeight: "200" },
      text:
        "Los juegos de dos jugadores son perfectos para jugar en pareja o con otra persona.",
    },
  },
  {
    element: "img",
    properties: {
      sx: { width: "50%" },
      icon: un_jugador_icon,
    },
  },
  {
    element: "span",
    properties: {
      sx: { textAlign: "center", fontWeight: "200" },
      text:
        "La mayoría de la gente tiene la concepción de que los juegos de mesa  son solo para muchos jugadores, y en este post os queremos mostrar que esto NO es cierto",
    },
  },
];

const filter_boardgames = (boardgames) => {
  return boardgames
    .filter((boardgame) => boardgame.numberOfPlayersBest.includes(1))
    .sort((boardgame1, boardgame2) => {
      return boardgame1.numVotes / 1000 + boardgame1.average >
        boardgame2.numVotes / 1000 + boardgame2.average
        ? -1
        : 1;
    });
};

const category = {
  id: "solitarios",
  name: "solitarios",
  icon: solitarios_icon,
  filter: (boardgames) => filter_boardgames(boardgames),
  description,
};

export default category;
