/** @jsxImportSource theme-ui */

import React, { useEffect, useState } from "react";
import Flow from "../common/flow/flow";
import Stepper from "./stepper";

import FiltersAge, { ID as FILTERS_AGE_ID } from "./flow/filters-age";
import FiltersNumberPlayers, {
  ID as FILTERS_NUMBER_PLAYERS_ID,
} from "./flow/filters-number-players";
import FiltersTime, { ID as FILTERS_TIME_ID } from "./flow/filters-time";
import FiltersWeight, { ID as FILTERS_WEIGHT_ID } from "./flow/filters-weight";

import age_stepper_selected from "src/assets/svg/stepper/age_stepper_selected.svg";
import age_stepper from "src/assets/svg/stepper/age_stepper.svg";

export const ORDER = [
  FILTERS_AGE_ID,
  FILTERS_NUMBER_PLAYERS_ID,
  FILTERS_TIME_ID,
  FILTERS_WEIGHT_ID,
];

export default function Filters() {
  const [stepIndex, setStepIndex] = useState(0);
  const stepToGo = (stepToGo) => {
    const index = ORDER.findIndex((e) => e === stepToGo);
    setStepIndex(index);
  };

  const stepId = ORDER[stepIndex];

  const stepperGo = (index) => {
    setStepIndex(index);
  };
  return (
    <div sx={{ width: "100%", height: "200px" }}>
      <Stepper steps={steps} actualStep={stepIndex} clickOnStep={stepperGo} />
      <Flow goToStep={stepId} steps={ORDER}>
        <FiltersAge setGoToStep={stepToGo} />
        <FiltersNumberPlayers setGoToStep={stepToGo} />
        <FiltersTime setGoToStep={stepToGo} />
        <FiltersWeight setGoToStep={stepToGo} />
      </Flow>
    </div>
  );
}

const steps = [
  {
    name: "Edad",
    icon: age_stepper,
    icon_selected: age_stepper_selected,
  },
  {
    name: "Número de jugadores",
    icon: age_stepper,
    icon_selected: age_stepper_selected,
  },
  {
    name: "Tiempo de partida",
    icon: age_stepper,
    icon_selected: age_stepper_selected,
  },
  {
    name: "Dificultad",
    icon: age_stepper,
    icon_selected: age_stepper_selected,
  },
];
