/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import weight_icon from "../../../assets/svg/sections/weight.svg";
import {
  duration_string,
  play_time_string,
  age_string,
  age_group_string,
  weight_string,
  weight_group_string,
} from "../utils";
import { Question, Option, Link } from "../../common/index";

export default function BoardgameModalWeight({ boardgame }) {
  const { webname, weight } = boardgame;

  const gridStyles = {
    display: "grid",
    gridTemplateColumns: "100%",
    justifyItems: "center",
    alignItems: "center",
  };

  return (
    <div
      sx={{
        ...gridStyles,
        rowGap: "15px",
      }}
    >
      <div
        sx={{
          ...gridStyles,
          rowGap: "10px",
        }}
      >
        <h1>{webname}</h1>
      </div>
      <div
        sx={{
          ...gridStyles,
          rowGap: "5px",
        }}
      >
        <p>{weight_group_string(weight)}</p>
        <img sx={{ height: "22px" }} src={weight_icon} />
        <h3>Dureza</h3>
      </div>

      <div
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>{weight_string(weight)}</p>
      </div>
      <p>
        {
          "la dureza va de 1 a 5. Siendo los de 1 los más fáciles y los 5 los más complicados"
        }
      </p>
      <Link>{"Ver otros juegos de dureza similar"}</Link>
      <div />
      <div>
        <Question>{"¿Que tipo de juegos hay segun su dureza?"}</Question>
      </div>
      <Option
        title={"Fáciles"}
        text={"juegos que se aprenden a jugar en un santiamen"}
      />
      <Option
        title={"Medios"}
        text={"juegos senzillos con un poquito de complejidad"}
      />
      <Option title={"Rebuscados"} text={"deberas aprender el manual"} />
      <Option
        title={"Jugones Expertos"}
        text={"muy densos, juegos para los reales juegones"}
      />
    </div>
  );
}
