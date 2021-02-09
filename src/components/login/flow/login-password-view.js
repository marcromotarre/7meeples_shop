/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";

export const login_password_view = ({ goToStep, data, setData }) => {
  const { email } = data;
  const goNext = () => {};
  console.log("password view");
  return (
    <>
      <div>Hi, {email}</div>
      <button onClick={goNext}>ENTRAR</button>
    </>
  );
};
