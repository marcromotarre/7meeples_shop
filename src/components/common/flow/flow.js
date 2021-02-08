/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useState, useEffect } from "react";
import flowAnimation from "./animations/go-left";
import { isRegExp } from "util";

export default function Flow({ steps, default_step, animations }) {
  const getStep = (id) => steps.find((step) => step.id === id);
  const getAnimation = (id) =>
    animations.find((animation) => animation.id === id);

  const [animationId, setAnimationId] = useState("");
  const [actualStepClassName, setActualStepClassName] = useState(
    "step-left-start"
  );
  const [nextStepClassName, setNextStepClassName] = useState(
    "step-right-start"
  );

  const [actualStepId, setActualStepId] = useState(default_step);
  const [nextStepId, setNextStepId] = useState("");

  const actualStep = getStep(actualStepId);
  const nextStep = getStep(nextStepId);
  const playAnimation = (id) => {
    const { animation_type, start_step, end_step } = getAnimation(id);
    setAnimationId(id);
    if (animation_type === "left-to-right") {
      setActualStepId(start_step);
      setNextStepId(end_step);
      setActualStepClassName("left-to-right");
      setNextStepClassName("left-to-right");
    }
    if (animation_type === "right-to-left") {
      setActualStepId(end_step);
      setNextStepId(start_step);
      setActualStepClassName("right-to-left");
      setNextStepClassName("right-to-left");
    }
  };
  const flowAnimationEnd = () => {
    const { animation_type } = getAnimation(animationId);
    if (animation_type === "left-to-right") {
      setActualStepId(nextStepId);
    }
    if (animation_type === "right-to-left") {
      setActualStepId(actualStepId);
    }
    setAnimationId("");
    setActualStepClassName("step-left-start");
    setNextStepClassName("step-right-start");
  };
  return (
    <>
      {flowAnimation()}
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
          {actualStep && actualStep.view({ playAnimation })}
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
          {nextStep && nextStep.view({ playAnimation })}
        </div>
      </div>
    </>
  );
}
