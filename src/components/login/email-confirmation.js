/** @jsxImportSource theme-ui */
import { useState } from "react";
import React from "react";
import back_button_icon from "../../assets/svg/back-button.svg";
import Image from "next/image";

import loader from "./../../assets/gif/loader.gif";

export default function EmailConfirmation({
  email = "marcromotarre@gmail.com",
  onClickNext = () => {},
}) {
  const [className, setClassName] = useState("");

  return (
    <div
      sx={{
        display: "grid",
        gridTemplateRows: "25% 50% 25%",
        gridTemplateColumns: "100%",
        gridTemplateAreas: `"text" "back" "."`,
        height: "100%",
      }}
    >
      <div
        sx={{
          gridArea: "text",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <span>Te hemos enviado un email a</span>
        <span>{email}</span>
      </div>
      <div
        sx={{
          gridArea: "back",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image alt="" src={back_button_icon}></Image>
        <span
          sx={{
            paddingTop: "5px",
            color: "#33BAFB",
            fontSize: "12px",
          }}
        >
          Pulsa para volver al inicio
        </span>
      </div>
    </div>
  );
}
