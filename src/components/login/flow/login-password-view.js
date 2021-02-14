/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useRef, useEffect, useState } from "react";
import { Button, InputPassword } from "../../common";
import texts from "../texts.json";
import { getText } from "./../../../utils/texts";
import { ID as LOGIN_EMAIL_ID } from "./login-email-view";
import { ID as EMAIL_RESET_PASSWORD_SENT } from "./email-reset-password-sent-view";

export const ID = "LOGIN_PASSWORD";
export default function login_email_view({ setGoToStep, data, setData }) {
  const [password, setPassword] = useState();
  const handleNotYou = (e) => {
    setData({ ...data, email: "" });
    setGoToStep(LOGIN_EMAIL_ID);
  };

  const handleForgotYourPassword = () => {
    //send email
    setGoToStep(EMAIL_RESET_PASSWORD_SENT);
    //go to forgot password
  };
  const goNext = (e) => {};
  return (
    <div
      sx={{
        display: "grid",
        width: "100%",
        height: "100%",
        gridTemplateRows: "60px auto 60px 33%",
        gridTemplateColumns: "100%",
      }}
    >
      <div
        sx={{
          width: "75%",
          justifySelf: "center",
          alignSelf: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <span sx={{ fontWeight: "100" }}>{getText(texts.hi)} </span>
        <span sx={{ fontWeight: "200" }}>
          {getText(texts.email, { email: data.email })}
        </span>
        <div sx={{ height: "5px" }}></div>
        <span
          onClick={handleNotYou}
          sx={{ fontWeight: "500", fontSize: "13px", color: "#339BCC" }}
        >
          {getText(texts.not_you)}
        </span>
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
        <InputPassword
          sx={{ width: "100%" }}
          onHangleInputChange={setPassword}
          text="Introduce tu email"
        />
        <div sx={{ height: "20px" }}></div>
        <Button onClick={goNext}>{getText(texts.ENTER)}</Button>
      </div>
      <span
        onClick={handleForgotYourPassword}
        sx={{
          justifySelf: "center",
          alignItems: "center",
          fontWeight: "500",
          fontSize: "13px",
          color: "#339BCC",
        }}
      >
        {getText(texts.forgot_your_password)}
      </span>
    </div>
  );
}
