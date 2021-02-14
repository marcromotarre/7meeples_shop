/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import { useState } from "react";
import React from "react";
import back_button_icon from "../../assets/svg/back-button.svg";

import email_icon from "./../../assets/svg/email-icon.svg";
import Button from "../common/buttons/button";
import { getText } from "../../utils/texts";
import texts from "./texts.json";

export default function SpamInfoEmail({ styles = {}, all = false }) {
  return (
    <div
      sx={{
        ...styles,
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        display: "flex",
      }}
    >
      {all && (
        <span sx={{ fontSize: "12px", fontWeight: "300", textAlign: "center" }}>
          {getText(texts.mail_not_received)}
        </span>
      )}
      {all && (
        <span sx={{ textAlign: "center", fontWeight: "200" }}>
          {getText(texts.be_sure_email_is_correct)}
        </span>
      )}
      <span sx={{ textAlign: "center", fontWeight: "200" }}>
        {getText(texts.look_spam_folder)}
      </span>
      <span sx={{ textAlign: "center", fontWeight: "200" }}>
        {getText(texts.not_received_contact_us)}
      </span>
      <span sx={{ textAlign: "center", fontWeight: "300" }}>
        {getText(texts.info_email)}
      </span>
    </div>
  );
}
