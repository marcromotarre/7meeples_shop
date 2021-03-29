/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useState, useEffect } from "react";
import style from "./style";
import { isRegExp } from "util";

export default function Flow({ styles, goToStep, steps, children }) {
  const [actualStepClassName, setActualStepClassName] = useState(
    "step-left-start"
  );
  const [nextStepClassName, setNextStepClassName] = useState(
    "step-right-start"
  );

  const [go, setGo] = useState(true);
  const [animation, setAnimation] = useState("");
  const [actualStepIndex, setActualStepIndex] = useState(0);
  const [goToStepIndex, setGoToStepIndex] = useState(-1);

  if (go && goToStep !== steps[actualStepIndex]) {
    setGo(false);
    const index = steps.findIndex((step) => step === goToStep);
    if (actualStepIndex === -1 || index === -1 || actualStepIndex === index) {
      return;
    }
    if (actualStepIndex < index) {
      setGoToStepIndex(index);
      setActualStepClassName("left-to-right");
      setNextStepClassName("left-to-right");
      setAnimation("left-to-right");
    }
    if (actualStepIndex > index) {
      setGoToStepIndex(actualStepIndex);
      setActualStepIndex(index);
      setActualStepClassName("right-to-left");
      setNextStepClassName("right-to-left");
      setAnimation("right-to-left");
    }
  }

  const flowAnimationEnd = () => {
    if (animation === "left-to-right") {
      setActualStepIndex(goToStepIndex);
    }
    if (animation === "right-to-left") {
      //setActualStepId(actualStepId);
    }
    setAnimation("");
    setActualStepClassName("step-left-start");
    setNextStepClassName("step-right-start");
    setGo(true);
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
          ...styles,
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
          {children[actualStepIndex]}
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
          {children[goToStepIndex]}
        </div>
      </div>
    </>
  );
}
