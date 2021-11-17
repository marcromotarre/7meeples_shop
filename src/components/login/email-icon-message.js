/** @jsxImportSource theme-ui */
import { useState } from "react";
import React from "react";
import back_button_icon from "../../assets/svg/back-button.svg";
import Image from "next/image";

import email_icon from "./../../assets/svg/email-icon.svg";
import Button from "../common/buttons/button";
import { getText } from "../../utils/texts";
import texts from "./texts.json";

export default function EmailIconMessage({
  styles = {},
  message = "",
  email = "",
}) {
  return (
    <div
      sx={{
        ...styles,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span sx={{ textAlign: "center", fontWeight: "300" }}>
          {getText(texts.sent_you_an_email)}
        </span>
        <span sx={{ textAlign: "center", fontWeight: "400" }}>
          {getText(texts.email, { email })}
        </span>
      </div>
      <Image
        alt=""
        sx={{ margin: "10px 0", width: "100px", height: "100px" }}
        src={email_icon}
      />
      <span sx={{ textAlign: "center", fontWeight: "300" }}>{message}</span>
    </div>
  );
}
