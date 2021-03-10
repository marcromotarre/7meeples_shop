import fillers_icon from "../../../assets/svg/categories/categoria-fillers.svg";
import colaborativos_icon from "../../../assets/svg/categories/categoria-colaborativos.svg";
import party_icon from "../../../assets/svg/categories/categoria-party.svg";
import infantiles_icon from "../../../assets/svg/categories/categoria-infantiles.svg";
import solitarios_icon from "../../../assets/svg/categories/categoria-solitarios.svg";

import iniciacion from "./iniciacion";
import en_pareja from "./en_pareja";
export default [
  en_pareja,
  iniciacion,
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
