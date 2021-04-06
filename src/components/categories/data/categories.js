import iniciacion from "./iniciacion";
import en_pareja from "./en_pareja";
import solitarios from "./solitarios";
import para_los_peques from "./infantiles";
import colaborativos from "./colaborativos";
import party from "./party";
import fillers from "./fillers";
import rollAdnWrite from "./roll-and-write";
export default [
  en_pareja,
  iniciacion,
  solitarios,
  fillers,
  para_los_peques,
  fillers,
  colaborativos,
  party,
  rollAdnWrite,
  /*{
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
  */
];
