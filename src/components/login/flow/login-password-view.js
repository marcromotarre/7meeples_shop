/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";

export const login_password_view = ({ goToStep }) => {
  const goNext = () => {};
  return (
    <>
      <div>login password</div>
      <button onClick={goNext}>ENTRAR</button>
    </>
  );
};
