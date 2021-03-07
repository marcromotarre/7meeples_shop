import fillers_icon from "../../assets/svg/categories/fillers.svg";
import dos_jugadores_icon from "../../assets/svg/categories/2-players.svg";
export default [
  {
    id: "iniciacion",
    name: "Iniciación",
    icon: fillers_icon,
    filters: [],
  },
  {
    id: "fillers",
    name: "Fillers",
    icon: fillers_icon,
    filters: [],
  },
  {
    id: "en_pareja",
    name: "En pareja",
    icon: dos_jugadores_icon,
    filter: (boardgames) => {
      return boardgames.filter((boardgame) =>
        boardgame.numberOfPlayersBest.includes(2)
      );
    },
    description: [
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
          src:
            "https://7meeplesimages.s3.us-east-2.amazonaws.com/awards/2_players_icon_7meeples.svg",
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
    ],
  },
  {
    id: "party",
    name: "Party",
    icon: dos_jugadores_icon,
    filters: [],
  },
  {
    id: "familiares",
    name: "Familiares",
    icon: dos_jugadores_icon,
    filters: [],
  },
  {
    id: "niños",
    name: "Niños",
    icon: dos_jugadores_icon,
    filters: [],
  },
];
