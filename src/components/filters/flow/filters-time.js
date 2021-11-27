/** @jsxImportSource theme-ui */

import React from "react";
import Button from "src/components/common/buttons/button";

import { ID as FILTERS_NUMBER_PLAYERS_ID } from "./filters-number-players";
import { ID as FILTERS_WEIGHT_ID } from "./filters-weight";

export const ID = "FILTERS_TIME";
export default function FiltersTime({ setGoToStep }) {
  const goBack = () => {
    setGoToStep(FILTERS_NUMBER_PLAYERS_ID);
  };
  const goNext = () => {
    setGoToStep(FILTERS_WEIGHT_ID);
  };
  return (
    <div sx={{ width: "100%", height: "100%", backgroundColor: "green" }}>
      <Button onClick={goBack}>Atras</Button>
      <Button onClick={goNext}>Siguiente</Button>
    </div>
  );
}
