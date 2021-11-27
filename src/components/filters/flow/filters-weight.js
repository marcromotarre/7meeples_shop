/** @jsxImportSource theme-ui */

import React from "react";
import Button from "src/components/common/buttons/button";

import { ID as FILTERS_TIME_ID } from "./filters-time";

export const ID = "FILTERS_WEIGHT";
export default function FiltersWeight({ setGoToStep }) {
  const goBack = () => {
    setGoToStep(FILTERS_TIME_ID);
  };

  return (
    <div sx={{ width: "100%", height: "100%", backgroundColor: "red" }}>
      <Button onClick={goBack}>Atras</Button>
    </div>
  );
}
