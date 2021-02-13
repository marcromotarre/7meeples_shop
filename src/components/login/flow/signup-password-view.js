/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useRef, useEffect, useState } from "react";
import { Button, InputPassword } from "../../common";
import texts from "./texts.json";
import { getText } from "./../../../utils/texts";
import { ID as EMAIL_VERIFICATION_SENT } from "./email-verification-sent-view";
import Loading from "src/components/common/loading/loading";
import { generateCode } from "../../../utils/code";
import { emailJS } from "../../../utils/email";
import { email_exist, create_account } from "src/backend/credentials";
var passwordHash = require("password-hash");

export const ID = "SIGN_UP_PASSWORD";
export default function login_email_view({ setGoToStep, data, setData }) {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState();
  const handleNotYou = (e) => {
    setData({ ...data, email: "" });
    setGoToStep(LOGIN_EMAIL_ID);
  };
  const createAccount = async () => {
    setLoading(true);
    const hashedPassword = passwordHash.generate(password);
    const code = generateCode();

    const { error } = await email_exist({
      email: data.email,
    });
    console.log(error);
    if (error) {
      const user = await create_account({
        email: data.email,
        code,
        password: hashedPassword,
      });
      setLoading(false);
      setGoToStep(EMAIL_VERIFICATION_SENT);
    } else {
      //gotoConfirmaction user already exist
      setLoading(false);
    }

    //emailJS({email: data.email, code});
    //gotoConfirmaction email
    setLoading(false);
  };

  return (
    <div
      sx={{
        display: "grid",
        width: "100%",
        height: "100%",
        gridTemplateColumns: "100%",
        gridTemplateRows: "60px 20px 60px 20px 60px auto 20%",
        gridTemplateAreas: `
            "email-not-you" 
            "."
            "not-account-message"
            "."
            "create-account-message"
            "input-go"
        `,
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
          gridArea: "email-not-you",
        }}
      >
        <span>{getText(texts.hi)} </span>
        <span>{getText(texts.email, { email: data.email })}</span>
        <div sx={{ height: "5px" }}></div>
        <span
          onClick={handleNotYou}
          sx={{ fontSize: "13px", color: "#339BCC" }}
        >
          {getText(texts.not_you)}
        </span>
      </div>
      <div
        sx={{
          gridArea: "not-account-message",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p sx={{ textAlign: "center", width: "60%" }}>
          {getText(texts.not_account_to_this_email)}
        </p>
      </div>
      <div
        sx={{
          gridArea: "create-account-message",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p sx={{ fontSize: "13px", textAlign: "center", width: "80%" }}>
          {getText(texts.one_step_to_create_account)}
        </p>
      </div>
      <div
        sx={{
          gridArea: "input-go",
          justifySelf: "center",
          alignSelf: "center",
          width: "75%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <InputPassword
          sx={{ width: "100%" }}
          onHangleInputChange={setPassword}
          text="Introduce tu email"
        />
        <div sx={{ height: "20px" }}></div>
        <div sx={{ height: "60px" }}>
          {loading && <Loading />}
          {!loading && (
            <Button onClick={createAccount}>{getText(texts.NEXT)}</Button>
          )}
        </div>
      </div>
    </div>
  );
}
