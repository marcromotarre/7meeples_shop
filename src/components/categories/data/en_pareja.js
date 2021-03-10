import en_pareja_icon from "../../../assets/svg/categories/categoria-en-pareja.svg";
import en_pareja_description_icon from "../../../assets/svg/categories/en-pareja/2-jugadores-icon.svg";

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
      icon: en_pareja_description_icon,
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
    .filter((boardgame) => boardgame.numberOfPlayersBest.includes(2))
    .sort((boardgame1, boardgame2) => {
      return boardgame1.numVotes / 1000 + boardgame1.average >
        boardgame2.numVotes / 1000 + boardgame2.average
        ? -1
        : 1;
    });
};

const category = {
  id: "en_pareja",
  name: "En pareja",
  icon: en_pareja_icon,
  filter: (boardgames) => filter_boardgames(boardgames),
  description: description,
};

export default category;
