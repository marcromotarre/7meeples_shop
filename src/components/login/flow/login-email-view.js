/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import { STEPS_IDS } from "./steps";
import React from "react";
import { Button, Input } from "../../common";

export const login_email_view = ({ goToStep, data, setData }) => {
  const email = "marcromotarra@gmail.com";
  const goNext = () => {
    setData({ ...data, email: "hola@email.com" });
    goToStep(STEPS_IDS.LOGIN_PASSWORD);
  };
  console.log("login view");
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
