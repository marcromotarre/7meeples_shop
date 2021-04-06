import para_los_peques_icon from "../../../assets/svg/categories/para-los-peques-icon.svg";

const description = [
  {
    element: "span",
    properties: {
      sx: { textAlign: "center", fontWeight: "200" },
      text: "Juegos para los más peques.",
    },
  },
];

const filter_boardgames = (boardgames) => {
  return boardgames.filter((boardgame) => boardgame.age <= 6);
};

const category = {
  id: "para_los_peques",
  name: "Para los Peques",
  icon: para_los_peques_icon,
  filter: (boardgames) => filter_boardgames(boardgames),
  description,
};

export default category;
