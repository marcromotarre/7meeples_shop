/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useState, useEffect } from "react";
import style from "./style";
import { isRegExp } from "util";

export default function Flow({ steps }) {
  const getStep = (id) => steps.find((step) => step.id === id);

  const [data, setData] = useState({});

  const [actualStepClassName, setActualStepClassName] = useState(
    "step-left-start"
  );
  const [nextStepClassName, setNextStepClassName] = useState(
    "step-right-start"
  );

  const [animation, setAnimation] = useState("");
  const [actualStepId, setActualStepId] = useState(steps[0].id);
  const [goToStepId, setGoToStepId] = useState("");

  const actualStep = getStep(actualStepId);
  const objectiveStep = getStep(goToStepId);

  const goToStep = (id) => {
    const actualIndex = steps.findIndex((step) => step.id === actualStepId);
    const goToStepIndex = steps.findIndex((step) => step.id === id);
    if (
      actualIndex === -1 ||
      goToStepIndex === -1 ||
      actualIndex === goToStepIndex
    ) {
      return;
    }
    if (actualIndex < goToStepIndex) {
      setGoToStepId(id);
      setActualStepClassName("left-to-right");
      setNextStepClassName("left-to-right");
      setAnimation("left-to-right");
    }
    if (actualIndex > goToStepIndex) {
      setActualStepId(id);
      setGoToStepId(actualStepId);
      setActualStepClassName("right-to-left");
      setNextStepClassName("right-to-left");
      setAnimation("right-to-left");
    }
  };
  const flowAnimationEnd = () => {
    if (animation === "left-to-right") {
      setActualStepId(goToStepId);
    }
    if (animation === "right-to-left") {
      setActualStepId(actualStepId);
    }
    setAnimation("");
    setActualStepClassName("step-left-start");
    setNextStepClassName("step-right-start");
  };
  return (
    <>
      {style()}
      <div
        sx={{
          overflow: "hidden",
          display: "grid",
          gridTemplateColumns: "100% 100%",
          gridTemplateAreas: `"step-first step-end"`,
          height: "100%",
          width: "100%",
        }}
      >
        <div
          onAnimationEnd={flowAnimationEnd}
          className={actualStepClassName}
          sx={{
            position: "relative",
            gridArea: "step-first",
            height: "100%",
            width: "100%",
          }}
        >
          {actualStep && actualStep.view({ goToStep, data, setData })}
        </div>
        <div
          className={nextStepClassName}
          sx={{
            position: "relative",
            gridArea: "step-end",
            height: "100%",
            width: "100%",
          }}
        >
          {objectiveStep && objectiveStep.view({ goToStep, data, setData })}
        </div>
      </div>
    </>
  );
}
