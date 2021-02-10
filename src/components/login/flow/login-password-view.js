/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";

export const ID = "LOGIN_PASSWORD";

export default function login_password_view({
  STEPS_IDS,
  setGoToStep,
  data,
  setData,
}) {
  console.log("password view");
  const goBack = () => {
    setGoToStep(STEPS_IDS.LOGIN_EMAIL);
  };
  return (
    <>
      <div>Hi, {data.email}</div>
      <button onClick={goBack}>ENTRAR</button>
    </>
  );
}
