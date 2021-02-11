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
  const myRef = React.createRef();

  const goNext = (e) => {
    e.preventDefault();
    myRef.current.scrollTo(0, 0);
    setData({ ...data, email: "hola@email.com" });
    setGoToStep(STEPS_IDS.LOGIN_PASSWORD);
  };
  return (
    <div
      ref={myRef}
      sx={{
        display: "grid",
        width: "100%",
        height: "100%",
        gridTemplateRows: "66% 33%",
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
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Input sx={{ width: "100%" }} text="Introduce tu email"></Input>
        <div sx={{ height: "20px" }}></div>
        <Button onClick={goNext}>SIGUIENTE</Button>
      </div>
    </div>
  );
}
