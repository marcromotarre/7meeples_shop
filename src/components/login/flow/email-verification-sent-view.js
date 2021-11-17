/** @jsxImportSource theme-ui */
import React, { useRef, useEffect, useState } from "react";
import { Button, Input } from "../../common";
import texts from "../texts.json";
import { isValidEmail } from "../../../utils/email";
import { getText } from "./../../../utils/texts";
import EmailIconMessage from "../email-icon-message";
import SpamInfoEmail from "../spam_info_email";

import { ID as LOGIN_PASSWORD_ID } from "./login-password-view";
import { ID as SIGNUP_EMAIL_ID } from "./signup-password-view";
import Loading from "src/components/common/loading/loading";
import { email_exist } from "src/backend/credentials";

export const ID = "EMAIL_VERIFICATION_SENT";
export default function email_verification_sent({
  setGoToStep,
  data,
  setData,
}) {
  return (
    <div
      sx={{
        display: "grid",
        width: "100%",
        height: "100%",
        gridTemplateRows: "100px calc(100% - 310px) 180px 30px",
        gridTemplateColumns: "100%",
      }}
    >
      <div
        sx={{
          display: "flex",
          height: "100%",
          flexDirection: "column",
          width: "85%",
          justifySelf: "center",
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <span sx={{ textAlign: "center", fontWeight: "200" }}>
          {getText(texts.just_create_a_7_meeples_account)}
        </span>
        <span sx={{ textAlign: "center", fontWeight: "200" }}>
          {getText(texts.need_to_verify_email)}
        </span>
      </div>
      <EmailIconMessage
        styles={{ width: "70%", justifySelf: "center" }}
        email={data.email}
        message={getText(texts.instructions_how_you_can_activate)}
      />
      <SpamInfoEmail
        styles={{ width: "70%", justifySelf: "center" }}
        all={true}
      />
    </div>
  );
}
