/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useRef, useEffect, useState } from "react";
import { Button, Input } from "../../common";
import texts from "../texts.json";
import { generateCode } from "../../../utils/code";
import { getText } from "../../../utils/texts";
import EmailIconMessage from "../email-icon-message";
import SpamInfoEmail from "../spam_info_email";

import { ID as LOGIN_PASSWORD_ID } from "./login-password-view";
import { ID as SIGNUP_EMAIL_ID } from "./signup-password-view";
import Loading from "src/components/common/loading/loading";
import {
  email_exist,
  create_forgot_password_code,
} from "src/backend/credentials";

export const ID = "EMAIL_RESET_PASSWORD_SENT";
export default function email_reset_password_sent_view({
  setGoToStep,
  data,
  setData,
}) {
  const [codeGenerated, setCodeGenerated] = useState(false);
  useEffect(() => {
    //generate code
    //send email
    //
    generateCode();
  }, []);

  const generateCode = async () => {
    setLoading(true);
    /*const generated = await create_forgot_password_code({
      email: data.email,
      code: generateCode(),
    });*/
    console.log("Boom");
    setLoading(false);
  };
  const [loading, setLoading] = useState(true);
  return (
    <div
      sx={{
        display: "grid",
        width: "100%",
        height: "100%",
        gridTemplateRows: loading
          ? "100%"
          : "70px calc(100% - 200px) 120px 10px",
        gridTemplateColumns: "100%",
      }}
    >
      {loading && (
        <div sx={{ display: "grid", gridTemplateRows: "66% 33%" }}>
          <Loading
            style={{
              height: "150px",
              alignSelf: "center",
              justifySelf: "center",
            }}
          />
        </div>
      )}
      {!loading && (
        <div
          sx={{
            display: "flex",
            height: "100%",
            flexDirection: "column",
            width: "85%",
            justifySelf: "center",
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span sx={{ textAlign: "center", fontWeight: "200" }}>
            {getText(texts.not_remember_password)}
          </span>
          <span sx={{ textAlign: "center", fontWeight: "200" }}>
            {getText(texts.not_worries)}
          </span>
        </div>
      )}
      {!loading && (
        <EmailIconMessage
          styles={{ width: "70%", justifySelf: "center" }}
          email={data.email}
          message={getText(texts.instructions_how_you_can_reset_password)}
        />
      )}
      {!loading && (
        <SpamInfoEmail
          styles={{ width: "70%", justifySelf: "center" }}
          all={false}
        />
      )}
    </div>
  );
}
