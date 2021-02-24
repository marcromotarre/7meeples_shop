/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import EstrenosHeader from "./estrenos-header";
import Calendar from "./calendar";

export default function award_view({ estrenos }) {
  return (
    <div
      sx={{
        display: "grid",
        alignItems: "center",
        justifyItems: "center",
        alignItems: "center",
        rowGap: "20px",
      }}
    >
      <EstrenosHeader></EstrenosHeader>
      <span
        sx={{
          textAlign: "center",
          width: "75%",
          fontStyle: "italic",
          fontWeight: "100",
        }}
      >
        Aquí podeis encontrar los mejores juegos de cada mes
      </span>
      <span
        sx={{
          textAlign: "center",
          width: "75%",
          fontStyle: "italic",
          fontWeight: "100",
        }}
      >
        Podeis moveros de un año a otro con las flechas y seleccionar un mes
        para ver sus estrenos
      </span>
      <Calendar year={2021} styles={{ width: "70%" }}></Calendar>
    </div>
  );
}
