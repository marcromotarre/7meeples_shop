/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useRef, useEffect, useState } from "react";
import { Button, Input } from "../../common";
import texts from "../texts.json";
import { isValidEmail } from "../../../utils/email";
import { getText } from "./../../../utils/texts";

import { ID as LOGIN_PASSWORD_ID } from "./login-password-view";
import { ID as SIGNUP_EMAIL_ID } from "./signup-password-view";
import Loading from "src/components/common/loading/loading";
import { email_exist as email_exist_credentials } from "src/backend/credentials";
import { email_exist as email_exist_credentials_confirmation } from "src/backend/credentials-conformation";

export const ID = "LOGIN_EMAIL";
export default function login_email_view({ setGoToStep, data, setData }) {
  const [error, setError] = useState(false);
  const [errorInput, setErrorInput] = useState({
    error: false,
    newError: false,
  });
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState(data.email);
  const goNext = async () => {
    if (isValidEmail(email)) {
      setLoading(true);
      const credentials = await email_exist_credentials({
        email,
      });
      const credentials_confirmation = await email_exist_credentials_confirmation(
        {
          email,
        }
      );

      console.log(credentials);
      console.log(credentials_confirmation);
      setData({ ...data, email: email, credentials, credentials_confirmation });
      if (!credentials.exist && !credentials_confirmation.exist) {
        setGoToStep(SIGNUP_EMAIL_ID);
      } else {
        setGoToStep(LOGIN_PASSWORD_ID);
      }

      setLoading(false);
    } else {
      setError(true);
      setErrorInput({ error: true, newError: true });
    }
  };

  const onHandleEmailChange = (email) => {
    setEmail(email);
  };
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
          fontWeight: "100",
        }}
      >
        <p sx={{ textAlign: "center" }}>{texts.login_introduce_email}</p>
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
        <Input
          endAnimation={() => setErrorInput({ error: true, newError: false })}
          error={errorInput}
          defaultValue={email}
          onChange={onHandleEmailChange}
          styles={{ width: "100%" }}
          text="Introduce tu email"
        ></Input>
        <div sx={{ height: "20px" }}></div>
        <div sx={{ height: "60px" }}>
          {loading && <Loading />}
          {!loading && <Button onClick={goNext}>{getText(texts.NEXT)}</Button>}
        </div>
      </div>
    </div>
  );
}
