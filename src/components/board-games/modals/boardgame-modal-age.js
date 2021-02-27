/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import age_icon from "../../../assets/svg/sections/age.svg";
import {
  duration_string,
  play_time_string,
  age_string,
  age_group_string,
} from "../utils";
import { Question, Option, Link } from "../../common/index";

export default function BoardgameModalAge({ boardgame }) {
  const { webname, age } = boardgame;

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
        <p>{age_group_string(age)}</p>
        <img sx={{ height: "22px" }} src={age_icon} />
        <h3>Edad</h3>
      </div>
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h5 sx={{ textAlign: "center" }}>
          {"és un juego no recomendado para menores de"}
        </h5>
        <p>{age_string(age)}</p>
      </div>
      <Link>{"Ver otros juegos de edad similar"}</Link>
      <div />
      <div>
        <Question>{"¿Que tipo de juegos hay segun su rango de edad?"}</Question>
      </div>
      <Option title={"Infantil"} text={"juegos para menores de 8 años"} />
      <Option title={"Juvenil"} text={"juegos para mayour de 8 años"} />
      <Option title={"Mayores"} text={"juegos para mayores de 14 años"} />
      <Option title={"Adultos"} text={"juegos para mayores de 18 años"} />
    </div>
  );
}
