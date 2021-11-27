/** @jsxImportSource theme-ui */

import React from "react";
import Button from "src/components/common/buttons/button";

import { ID as FILTERS_TIME_ID } from "./filters-time";
import { ID as FILTERS_AGE_ID } from "./filters-age";

export const ID = "FILTERS_NUM_PLAYERS";
export default function FiltersNumPlayers({ setGoToStep }) {
  const goNext = () => {
    setGoToStep(FILTERS_TIME_ID);
  };
  const goBack = () => {
    setGoToStep(FILTERS_AGE_ID);
  };
  return (
    <div sx={{ width: "100%", height: "100%", backgroundColor: "yellow" }}>
      <Button onClick={goBack}>Atras</Button>
      <Button onClick={goNext}>Siguiente</Button>
    </div>
  );
}
