import fillers_icon from "../../../assets/svg/categories/fillers-icon.svg";

const description = [
  {
    element: "span",
    properties: {
      sx: { textAlign: "center", fontWeight: "200" },
      text: "Los fillers son juegos",
    },
  },
];

const filter_boardgames = (boardgames) => {
  return boardgames.filter(
    (boardgame) => boardgame.playTimeMax < 30 && boardgame.weight < 2
  );
};

const category = {
  id: "fillers",
  name: "Fillers",
  icon: fillers_icon,
  filter: (boardgames) => filter_boardgames(boardgames),
  description,
};

export default category;
