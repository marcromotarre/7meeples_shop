import fillers_icon from "../../assets/svg/categories/categoria-fillers.svg";
import en_pareja_icon from "../../assets/svg/categories/categoria-en-pareja.svg";
import iniciacion_icon from "../../assets/svg/categories/categoria-iniciacion.svg";
import colaborativos_icon from "../../assets/svg/categories/categoria-colaborativos.svg";
import party_icon from "../../assets/svg/categories/categoria-party.svg";
import infantiles_icon from "../../assets/svg/categories/categoria-infantiles.svg";
import solitarios_icon from "../../assets/svg/categories/categoria-solitarios.svg";
export default [
  {
    id: "iniciacion",
    name: "Iniciación",
    icon: iniciacion_icon,
    filter: (boardgames) => {
      return boardgames.filter((boardgame) =>
        [13, 2653, 39856].includes(boardgame.id)
      );
    },
  },
  {
    id: "fillers",
    name: "Fillers",
    icon: fillers_icon,
    filter: (boardgames) => {
      return boardgames.filter(
        (boardgame) => boardgame.playTimeMax < 30 && boardgame.weight < 2
      );
    },
  },
  {
    id: "solitarios",
    name: "Solitarios",
    icon: solitarios_icon,
    filter: (boardgames) => {
      return boardgames
        .filter((boardgame) => boardgame.numberOfPlayersBest.includes(1))
        .sort((boardgame1, boardgame2) => {
          return boardgame1.numVotes / 1000 + boardgame1.average >
            boardgame2.numVotes / 1000 + boardgame2.average
            ? -1
            : 1;
        });
    },
  },
  {
    id: "en_pareja",
    name: "En pareja",
    icon: en_pareja_icon,
    filter: (boardgames) => {
      return boardgames
        .filter((boardgame) => boardgame.numberOfPlayersBest.includes(2))
        .sort((boardgame1, boardgame2) => {
          return boardgame1.numVotes / 1000 + boardgame1.average >
            boardgame2.numVotes / 1000 + boardgame2.average
            ? -1
            : 1;
        });
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
    icon: party_icon,
    filter: (boardgames) => {
      return boardgames.filter((boardgame) =>
        boardgame.categories.includes(1030)
      );
    },
  },
  {
    id: "familiares",
    name: "Familiares",
    icon: party_icon,
    filter: () => {},
  },
  {
    id: "colaborativos",
    name: "Familiares",
    icon: colaborativos_icon,
    filter: () => {},
  },
  {
    id: "infantiles",
    name: "Infantiles",
    icon: infantiles_icon,
    filter: (boardgames) => {
      return boardgames.filter((boardgame) => boardgame.age <= 6);
    },
  },
];
