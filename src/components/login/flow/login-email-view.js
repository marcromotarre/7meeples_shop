/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import { STEPS_IDS } from "./steps";
import React from "react";
import { Button, Input } from "../../common";

export const login_email_view = ({ goToStep }) => {
  const email = "marcromotarra@gmail.com";
  const goNext = () => {
    goToStep(STEPS_IDS.LOGIN_PASSWORD);
  };
  return (
    <div
      sx={{
        display: "grid",
        width: "100%",
        height: "100%",
        gridTemplateRows: "33% 66%",
        gridTemplateColumns: "100%",
      }}
    >
      <div
        sx={{
          justifySelf: "center",
          alignSelf: "center",
          width: "75%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Input text="Introduce tu email"></Input>
        <Button onClick={goNext}>SIGUIENTE</Button>
      </div>
    </div>
  );
};
