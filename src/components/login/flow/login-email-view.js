/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useRef, useEffect, useState } from "react";
import { Button, Input } from "../../common";

export const ID = "LOGIN_EMAIL";
export default function login_email_view({
  STEPS_IDS,
  setGoToStep,
  data,
  setData,
}) {
  const goNext = (e) => {
    e.preventDefault();
    setData({ ...data, email: "hola@email.com" });
    setGoToStep(STEPS_IDS.LOGIN_PASSWORD);
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
      <form
        sx={{
          justifySelf: "center",
          alignSelf: "center",
          width: "75%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Input text="Introduce tu email"></Input>
        <Button type="submit" onClick={goNext}>
          SIGUIENTE
        </Button>
      </form>
    </div>
  );
}
