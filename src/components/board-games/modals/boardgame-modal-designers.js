/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import designers_icon from "../../../assets/svg/sections/designers.svg";
import Designer from "../../designers/designer";
import {
  duration_string,
  play_time_string,
  age_string,
  age_group_string,
  weight_string,
  weight_group_string,
} from "../utils";
import { Question, Option, Link } from "../../common/index";

export default function BoardgameModalDesigners({ boardgame }) {
  const { webname, designers } = boardgame;

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
        <img sx={{ height: "22px" }} src={designers_icon} />
        <h3>Diseñadores</h3>
      </div>
      <div
        sx={{
          display: "flex",
          alignItems: "start",
          justifyContent: "space-around",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {designers.map(({ id, name }) => (
          <div sx={{ width: "40%" }} key={id}>
            <Designer key={id} name={name} />
          </div>
        ))}
      </div>
    </div>
  );
}
