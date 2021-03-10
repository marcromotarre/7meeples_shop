import iniciacion_icon from "../../../assets/svg/categories/categoria-iniciacion.svg";
import iniciacion_dificultad_icon from "../../../assets/svg/categories/iniciacion/iniciacion-dificultad-icon.svg";
import iniciacion_duracion_icon from "../../../assets/svg/categories/iniciacion/iniciacion-duracion-icon.svg";
import iniciacion_jugadores_icon from "../../../assets/svg/categories/iniciacion/iniciacion-jugadores-icon.svg";

const description = [
  {
    element: "span",
    properties: {
      sx: { textAlign: "center", fontWeight: "200" },
      text:
        "Los juegos de iniciación son juegos perfectos para adentrarse en el mundo de los juegos de mesa.",
    },
  },
  {
    element: "span",
    properties: {
      sx: { textAlign: "center", fontWeight: "200" },
      text: "Suelen ser juegos senzillos de aprender",
    },
  },
  {
    element: "img",
    properties: {
      sx: { width: "234px" },
      icon: iniciacion_dificultad_icon,
    },
  },
  {
    element: "span",
    properties: {
      sx: { textAlign: "center", fontWeight: "200" },
      text: "De duración no muy extensa",
    },
  },
  {
    element: "img",
    properties: {
      sx: { width: "124px" },
      icon: iniciacion_duracion_icon,
    },
  },
  {
    element: "span",
    properties: {
      sx: { textAlign: "center", fontWeight: "200" },
      text: "Se juegan bien en grupos",
    },
  },
  {
    element: "img",
    properties: {
      sx: { width: "252px" },
      icon: iniciacion_jugadores_icon,
    },
  },
];

const filter_boardgames = (boardgames) => {
  return boardgames.filter((boardgame) =>
    [13, 2653, 39856].includes(boardgame.id)
  );
};

const category = {
  id: "iniciacion",
  name: "Iniciación",
  icon: iniciacion_icon,
  filter: (boardgames) => filter_boardgames(boardgames),
  description,
};

export default category;
