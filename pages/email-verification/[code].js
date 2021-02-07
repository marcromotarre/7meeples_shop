/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import LoginLogo from "../../src/components/login/login-logo";
import LoginEmail from "../../src/components/login/login-email";
import SignInPassword from "../../src/components/login/signin-password";
import SignUpPassword from "../../src/components/login/signup-password";
import EmailConfirmation from "../../src/components/login/email-confirmation";
import { getLogo } from "../../src/data/logo";
import React, { useState, useEffect } from "react";
import loader from "./../../src/assets/gif/loader.gif";

const states = {
  ERROR: "ERROR",
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
};

export default function EmailVerification() {
  const [logo, setLogo] = useState(false);
  const [state, setState] = useState(states.LOADING);

  useEffect(() => {
    setLogo(getLogo());
  }, []);

  return (
    <>
      <div
        sx={{
          overflow: "hidden",
          display: "grid",
          gridTemplateRows: "33% 33% 33%",
          gridTemplateColumns: "100%",
          gridTemplateAreas: `"logo" "verification" "."`,
          height: "100vh",
          width: "100%",
        }}
      >
        {logo && <LoginLogo sx={{ gridArea: "logo" }} logo={logo}></LoginLogo>}
        <div
          sx={{
            gridArea: "verification",
            display: "grid",
            gridTemplateRows: "50% 50%",
            gridTemplateColumns: "100%",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            sx={{
              display: "flex",
              flexDirection: "column",
              alignSelf: "end",
              justifySelf: "center",
              height: "100%",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <div
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <span>Hola</span>
              <span>marcromotarre@gmail.com</span>
            </div>

            {state === states.LOADING && (
              <span sx={{ fontSize: "12px" }}>
                estamos verificando tu email...
              </span>
            )}
            {state === states.ERROR && (
              <span sx={{ color: "#FD2C25", fontSize: "12px" }}>
                no se ha podido verificar el email
              </span>
            )}
            {state === states.SUCCESS && (
              <span sx={{ color: "#33BAFB", fontSize: "12px" }}>
                email verificado con exito
              </span>
            )}
          </div>
          <div
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {state === states.LOADING && (
              <img
                src={loader}
                sx={{ height: "50px", gridArea: "button" }}
                alt="loading..."
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
