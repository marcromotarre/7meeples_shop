/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";

import { steps } from "../../src/components/login/flow/steps";
import Flow from "../../src/components/common/flow/flow";
export default function Agura() {
  return (
    <>
      <style jsx global>
        {`
          body {
            overflow: hidden;
          }
        `}
      </style>
      <div
        sx={{
          display: "grid",
          width: "100%",
          height: "100vH",
          gridTemplateRows: "25% 75%",
          gridTemplateColumns: "100%",
        }}
      >
        <div>logo</div>
        <Flow steps={steps}></Flow>
      </div>
    </>
  );
}
