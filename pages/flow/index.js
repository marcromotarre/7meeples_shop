/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useState, useEffect } from "react";
import LoginLogo from "../../src/components/login/login-logo";

import LoginEmailView from "../../src/components/login/flow/login-email-view";
import LoginPasswordView from "../../src/components/login/flow/login-password-view";

import Flow from "../../src/components/common/flow/flow";
import { getLogo } from "../../src/data/logo";
import Scroll, { scrollSpy } from "react-scroll";

export const STEPS_IDS = {
  LOGIN_EMAIL: "login_email",
  LOGIN_PASSWORD: "login_password",
  SIGNUP_PASSWORD: "singup_password",
};

export const ORDER = [
  STEPS_IDS.LOGIN_EMAIL,
  STEPS_IDS.LOGIN_PASSWORD,
  STEPS_IDS.SIGNUP_PASSWORD,
];

export default function Agura() {
  var scrollSpy = Scroll.scrollSpy;

  const [logo, setLogo] = useState(false);
  const [data, setData] = useState({});
  const [goToStep, setGoToStep] = useState(ORDER[0]);

  const a = (goToStep) => {
    Scroll.animateScroll.scrollToTop();
    Scroll.Events.scrollEvent.register("end", function () {
      setGoToStep(goToStep);
    });
  };
  useEffect(() => {
    setLogo(getLogo());
  }, []);
  return (
    <>
      <meta
        name="viewport"
        content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0,target-densitydpi=device-dpi, user-scalable=no"
      />
      <style jsx global>
        {`
          body {
            overflow: hidden;
          }
        `}
      </style>
      <div
        sx={{
          display: "grid",
          width: "100%",
          height: "100vH",
          gridTemplateRows: "25% 75%",
          gridTemplateColumns: "100%",
        }}
      >
        <div
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {logo && (
            <LoginLogo sx={{ gridArea: "logo" }} logo={logo}></LoginLogo>
          )}
        </div>
        <Flow goToStep={goToStep} steps={ORDER} ids={STEPS_IDS}>
          <LoginEmailView
            data={data}
            setData={setData}
            STEPS_IDS={STEPS_IDS}
            setGoToStep={a}
          />
          <LoginPasswordView
            data={data}
            setData={setData}
            STEPS_IDS={STEPS_IDS}
            setGoToStep={setGoToStep}
          />
        </Flow>
      </div>
    </>
  );
}
