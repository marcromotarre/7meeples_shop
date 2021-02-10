/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useRef, useEffect, useState } from "react";
import { Button, Input } from "../../common";

export default function login_email_view({
  STEPS_IDS,
  setGoToStep,
  data,
  setData,
}) {
  const inputEl = useRef(null);

  const goNext = () => {
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
        <Input ref={inputEl} text="Introduce tu email"></Input>
        <Button onClick={goNext}>SIGUIENTE</Button>
      </div>
    </div>
  );
}
