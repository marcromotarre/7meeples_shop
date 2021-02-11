/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useRef, useEffect, useState } from "react";
import { Button, Input } from "../../common";
import texts from "./texts.json";

import { ID as LOGIN_PASSWORD_ID } from "./login-password-view";

export const ID = "LOGIN_EMAIL";
export default function login_email_view({ setGoToStep, data, setData }) {
  const myRef = React.createRef();

  const goNext = (e) => {
    e.preventDefault();
    myRef.current.scrollTo(0, 0);
    setData({ ...data, email: "hola@email.com" });
    setGoToStep(LOGIN_PASSWORD_ID);
  };
  return (
    <div
      ref={myRef}
      sx={{
        display: "grid",
        width: "100%",
        height: "100%",
        gridTemplateRows: "60px auto 60px 33%",
        gridTemplateColumns: "100%",
      }}
    >
      <div sx={{ width: "75%", justifySelf: "center", alignSelf: "center" }}>
        <p sx={{ textAlign: "center" }}>{texts.login_introduce_email}</p>
      </div>
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
