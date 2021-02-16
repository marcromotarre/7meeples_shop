/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useRef, useEffect, useState } from "react";
import { Button, InputPassword, Loading } from "../../common";
import ok from "../../../assets/svg/ok.svg";

export const ID = "PASSWORD_UPDATED";
export default function check_code_view({ setGoToStep, data, setData }) {
  const goNext = (e) => {};

  return (
    <div
      sx={{
        display: "flex",

        height: "66%",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span
        sx={{
          textAlign: "center",
          width: "80%",
          color: "#33BAFB",
          fontSize: "15px",
        }}
      >
        Tu constraseña ha sido actualizada
      </span>
      <img
        src={ok}
        sx={{
          height: "100px",
        }}
      />
      <span
        sx={{
          textAlign: "center",
          width: "80%",
          color: "#33BAFB",
          fontSize: "15px",
        }}
      >
        Toca la pantalla para iniciar sesión con tu nueva contraseña
      </span>
    </div>
  );
}
