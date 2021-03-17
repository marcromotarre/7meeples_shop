import { BOARDGAME_ATTRIBUTES } from "../utils";
import SectionPlayTime from "./boardgame-section-playtime";
import SectionAge from "./boardgame-section-age";
import SectionNumberOfPlayers from "./boargame-section-number-of-players";
import SectionWeight from "./boardgame-section-weight";
import SectionDesigners from "./boardgame-section-designers";
import SectionMore from "./boardgame-section-more";
export const get_min_section = ({ attribute, values }) => {
  if (attribute === BOARDGAME_ATTRIBUTES.PLAY_TIME)
    return <SectionPlayTime {...values}></SectionPlayTime>;
  else if (attribute === BOARDGAME_ATTRIBUTES.AGE)
    return <SectionAge {...values}></SectionAge>;
  else if (attribute === BOARDGAME_ATTRIBUTES.NUMBER_OF_PLAYERS)
    return <SectionNumberOfPlayers {...values}></SectionNumberOfPlayers>;
  else if (attribute === BOARDGAME_ATTRIBUTES.WEIGHT)
    return <SectionWeight {...values}></SectionWeight>;
  else if (attribute === BOARDGAME_ATTRIBUTES.DESIGNERS)
    return <SectionDesigners {...values}></SectionDesigners>;
  else if (attribute === BOARDGAME_ATTRIBUTES.MORE)
    return <SectionMore {...values}></SectionMore>;
};
