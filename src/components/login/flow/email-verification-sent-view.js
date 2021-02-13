/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useRef, useEffect, useState } from "react";
import { Button, Input } from "../../common";
import texts from "./texts.json";
import { isValidEmail } from "../../../utils/email";
import { getText } from "./../../../utils/texts";

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
        gridTemplateRows: "60px auto 60px 33%",
        gridTemplateColumns: "100%",
      }}
    >
      <div sx={{ width: "75%", justifySelf: "center", alignSelf: "center" }}>
        <p sx={{ textAlign: "center" }}>email_verification_sent_view</p>
      </div>
    </div>
  );
}
