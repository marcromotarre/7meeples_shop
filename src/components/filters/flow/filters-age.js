/** @jsxImportSource theme-ui */

import React from "react";
import Button from "src/components/common/buttons/button";

import { ID as FILTERS_NUMBERS_PLAYERS_ID } from "./filters-number-players";

export const ID = "FILTERS_AGE";
export default function FiltersAge({ setGoToStep }) {
  const goNext = () => {
    console.log("click");
    setGoToStep(FILTERS_NUMBERS_PLAYERS_ID);
  };
  return (
    <div sx={{ width: "100%", height: "100%", backgroundColor: "blue" }}>
      <Button onClick={goNext}>Siguiente</Button>
    </div>
  );
}
