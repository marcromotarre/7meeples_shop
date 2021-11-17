/** @jsxImportSource theme-ui */
import React, { useState, useEffect } from "react";
import LoginLogo from "../../src/components/login/login-logo";
import { useSession } from "next-auth/client";
import { useRouter } from "next/router";

import LoginEmailView, {
  ID as LOGIN_EMAIL_ID,
} from "../../src/components/login/flow/login-email-view";
import LoginPasswordView, {
  ID as LOGIN_PASSWORD_ID,
} from "../../src/components/login/flow/login-password-view";
import SignUpPasswordView, {
  ID as SIGNUP_PASSWORD_ID,
} from "../../src/components/login/flow/signup-password-view";
import EmailVerificationSent, {
  ID as EMAIL_VERIFICATION_SENT,
} from "../../src/components/login/flow/email-verification-sent-view";

import EmailResetPasswordSent, {
  ID as EMAIL_RESET_PASSWORD_SENT,
} from "../../src/components/login/flow/email-reset-password-sent-view";

import Flow from "../../src/components/common/flow/flow";
import { getLogo } from "../../src/data/logo";
import Scroll, { scrollSpy } from "react-scroll";

export const ORDER = [
  LOGIN_EMAIL_ID,
  LOGIN_PASSWORD_ID,
  SIGNUP_PASSWORD_ID,
  EMAIL_VERIFICATION_SENT,
  EMAIL_RESET_PASSWORD_SENT,
];

export default function Login() {
  var scrollSpy = Scroll.scrollSpy;
  const router = useRouter();
  const [session, loading] = useSession();
  if (session && router) {
    router.push("profile");
  }
  const [logo, setLogo] = useState(false);
  const [data, setData] = useState({ email: "marcromotarre@gmail.com" });
  const [goToStep, setGoToStep] = useState(ORDER[0]);

  const go = (stepTogo) => {
    if (window.scrollY === 0) {
      setGoToStep(stepTogo);
    } else {
      Scroll.animateScroll.scrollToTop();
      Scroll.Events.scrollEvent.register("end", function () {
        setGoToStep(stepTogo);
      });
    }
  };
  useEffect(() => {
    setLogo(getLogo());
  }, []);
  return (
    <>
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
          height: "100vh",
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
        <Flow goToStep={goToStep} steps={ORDER}>
          <LoginEmailView data={data} setData={setData} setGoToStep={go} />
          <LoginPasswordView data={data} setData={setData} setGoToStep={go} />
          <SignUpPasswordView data={data} setData={setData} setGoToStep={go} />
          <EmailVerificationSent
            data={data}
            setData={setData}
            setGoToStep={go}
          />
          <EmailResetPasswordSent
            data={data}
            setData={setData}
            setGoToStep={go}
          />
        </Flow>
      </div>
    </>
  );
}
