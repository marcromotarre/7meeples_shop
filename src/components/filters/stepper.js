/** @jsxImportSource theme-ui */

import React, { useEffect, useRef, useState } from "react";

const STEP_WIDTH = 30;
const STEP_SELECTECTED_WIDTH = 36;
const STEP_COMPLETED_WIDTH = 30;

const COMPLETED_COLOR = "#FFBC8B";
const SELECTED_COLOR = "#FFBC8B";
const DISABLED_COLOR = "#B2B2B2";

const LINE_HEIGHT = 2;
const LINE_HEIGHT_SELECTED = 3;

export default function Stepper({ steps, actualStep, clickOnStep = () => {} }) {
  const ref = useRef(null);
  const [stepperWidth, setStepperWidth] = useState(0);

  useEffect(() => {
    setStepperWidth(ref?.current?.offsetWidth);
  }, [ref]);

  const numberOfSteps = steps.length;

  const goToStep = (index) => {
    clickOnStep(index);
  };
  return (
    <div ref={ref} sx={styles().stepper}>
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
            stepIndex === actualStep
              ? styles({
                  stepperWidth: stepperWidth,
                  selected: stepIndex === actualStep,
                  completed: stepIndex < actualStep,
                  position: 0,
                  stepIndex,
                  numberOfSteps,
                }).circleSelected
              : styles({
                  stepperWidth: stepperWidth,
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

const styles = ({
  stepperWidth,
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
    left: `calc(${
      (stepperWidth * (1 - STEP_WIDTH / stepperWidth) * stepIndex) /
      (numberOfSteps - 1)
    }px )`,
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
  circleSelected: {
    position: "absolute",
    left: `calc(${
      (stepperWidth * (1 - STEP_SELECTECTED_WIDTH / stepperWidth) * stepIndex) /
      (numberOfSteps - 1)
    }px )`,
    top: `calc(50% - ${STEP_SELECTECTED_WIDTH / 2}px)`,
    width: `${STEP_SELECTECTED_WIDTH}px`,
    height: `${STEP_SELECTECTED_WIDTH}px`,
    borderRadius: `${STEP_SELECTECTED_WIDTH / 2}px`,
    background: SELECTED_COLOR,
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
