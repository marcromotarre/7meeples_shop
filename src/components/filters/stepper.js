/** @jsxImportSource theme-ui */

import React, { useState } from "react";

const STEP_WIDTH = 30;
const STEP_SELECTECTED_WIDTH = 36;
const STEP_COMPLETED_WIDTH = 30;

const COMPLETED_COLOR = "#FFBC8B";
const SELECTED_COLOR = "#FFBC8B";
const DISABLED_COLOR = "#B2B2B2";

const LINE_HEIGHT = 2;
const LINE_HEIGHT_SELECTED = 3;

export default function Stepper({ steps, actualStep, clickOnStep = () => {} }) {
  const numberOfSteps = steps.length;
  //const [actualStep, setActualStep] = useState(stepIndex);
  const goToStep = (index) => {
    // setActualStep(index);
    clickOnStep(index);
  };
  return (
    <div sx={styles().stepper}>
      {steps.map((step, stepIndex) => {
        return (
          stepIndex < numberOfSteps - 1 && (
            <div
              key={stepIndex}
              sx={
                styles({
                  position: 0,
                  stepIndex,
                  numberOfSteps,
                }).line
              }
            ></div>
          )
        );
      })}
      {steps.map((step, stepIndex) => (
        <div
          onClick={() => goToStep(stepIndex)}
          key={stepIndex}
          sx={
            styles({
              selected: stepIndex === actualStep,
              completed: stepIndex < actualStep,
              position: 0,
              stepIndex,
              numberOfSteps,
            }).circle
          }
        ></div>
      ))}
    </div>
  );
}

/*
@keyframes animation_menu {
    0% {
      opacity: 0;
    }
    30% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
*/
const animations = ({} = {}) => {};

const styles = ({
  selected,
  completed,
  position = 0,
  numberOfSteps,
  stepIndex,
} = {}) => ({
  stepper: {
    width: "100%",
    height: "50px",
    position: "relative",
  },
  circle: {
    position: "absolute",
    left: `${(stepIndex * 100) / (numberOfSteps - 1)}%`,
    top: `calc(50% - ${STEP_WIDTH / 2}px)`,
    width: `${STEP_WIDTH}px`,
    height: `${STEP_WIDTH}px`,
    borderRadius: `${STEP_WIDTH / 2}px`,
    background: selected
      ? SELECTED_COLOR
      : completed
      ? COMPLETED_COLOR
      : DISABLED_COLOR,
  },
  line: {
    width: `${100 / (numberOfSteps - 1)}%`,
    top: `${LINE_HEIGHT / 2}px`,
    left: `${(stepIndex * 100) / (numberOfSteps - 1)}%`,
    height: "50%",
    borderBottom: `${LINE_HEIGHT}px solid ${DISABLED_COLOR}`,
    position: "absolute",
  },
});
