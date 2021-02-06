import logo_red from "../assets/svg/logo/7meeples-logo-red.svg";
import logo_green from "../assets/svg/logo/7meeples-logo-green.svg";
import logo_blue from "../assets/svg/logo/7meeples-logo-blue.svg";
import logo_yellow from "../assets/svg/logo/7meeples-logo-yellow.svg";
import logo_black from "../assets/svg/logo/7meeples-logo-black.svg";
import logo_orange from "../assets/svg/logo/7meeples-logo-orange.svg";
import logo_purple from "../assets/svg/logo/7meeples-logo-purple.svg";

export const getLogo = () => {
  const random_index = Math.floor(Math.random() * logo.length);
  console.log(random_index);
  return {
    ...logo[random_index],
    color: { base: logo[random_index].color, gray: GRAY_COLOR },
  };
};

const GRAY_COLOR = "#B5B5B5";
const logo = [
  {
    name: "red",
    color: "#EA4335",
    svg: logo_red,
  },
  {
    name: "blue",
    color: "#4285F4",
    svg: logo_blue,
  },
  {
    name: "green",
    color: "#34A853",
    svg: logo_green,
  },
  {
    name: "yellow",
    color: "#FBF205",
    svg: logo_yellow,
  },
];
