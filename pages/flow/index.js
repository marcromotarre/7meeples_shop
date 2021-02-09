/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useState, useEffect } from "react";
import LoginLogo from "../../src/components/login/login-logo";

import { steps } from "../../src/components/login/flow/steps";
import Flow from "../../src/components/common/flow/flow";
import { getLogo } from "../../src/data/logo";

export default function Agura() {
  const [logo, setLogo] = useState(false);
  useEffect(() => {
    setLogo(getLogo());
  }, []);
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
        <div
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {logo && (
            <LoginLogo sx={{ gridArea: "logo" }} logo={logo}></LoginLogo>
          )}
        </div>
        <Flow steps={steps}></Flow>
      </div>
    </>
  );
}
