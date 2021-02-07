/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import LoginLogo from "../../src/components/login/login-logo";
import LoginEmail from "../../src/components/login/login-email";
import SignInPassword from "../../src/components/login/signin-password";
import SignUpPassword from "../../src/components/login/signup-password";
import EmailConfirmation from "../../src/components/login/email-confirmation";
import EmailConfirmationRemember from "../../src/components/login/email-confirmation-remember";

import { getLogo } from "../../src/data/logo";
import React, { useState, useEffect } from "react";
const email_step = ({
  className,
  step,
  goToNextStep,
  onAnimationEnd = () => {},
}) => (
  <div
    onAnimationEnd={onAnimationEnd}
    className={className}
    sx={{ position: "relative", gridArea: step, height: "100%" }}
  >
    <LoginEmail onClickNext={goToNextStep}></LoginEmail>
  </div>
);

const password_signin_step = ({
  email,
  className,
  step,
  goToNextStep,
  onAnimationEnd = () => {},
}) => (
  <div
    onAnimationEnd={onAnimationEnd}
    className={className}
    sx={{ position: "relative", gridArea: step, height: "100%" }}
  >
    <SignInPassword email={email} onClickNext={goToNextStep}></SignInPassword>
  </div>
);

const password_signup_step = ({
  email,
  className,
  step,
  goToNextStep,
  onAnimationEnd = () => {},
}) => (
  <div
    onAnimationEnd={onAnimationEnd}
    className={className}
    sx={{ position: "relative", gridArea: step, height: "100%" }}
  >
    <SignUpPassword email={email} onClickNext={goToNextStep}></SignUpPassword>
  </div>
);

const email_confirmation = ({
  email,
  className,
  step,
  goToNextStep,
  onAnimationEnd = () => {},
}) => (
  <div
    onAnimationEnd={onAnimationEnd}
    className={className}
    sx={{ position: "relative", gridArea: step, height: "100%" }}
  >
    <EmailConfirmation
      email={email}
      onClickNext={goToNextStep}
    ></EmailConfirmation>
  </div>
);

const email_confirmation_remember = ({
  email,
  className,
  step,
  goToNextStep,
  onAnimationEnd = () => {},
}) => (
  <div
    onAnimationEnd={onAnimationEnd}
    className={className}
    sx={{ position: "relative", gridArea: step, height: "100%" }}
  >
    <EmailConfirmationRemember
      email={email}
      onClickNext={goToNextStep}
    ></EmailConfirmationRemember>
  </div>
);

const steps = {
  LOGINEMAIL: "LOGINEMAIL",
  LOGINEMAIL_SIGNINPASSWORD: "LOGINEMAIL_SIGNINPASSWORD",
  LOGINEMAIL_SIGNUPPASSWORD: "LOGINEMAIL_SIGNUPPASSWORD",
  EMAILCONFIRMATIONREMEMBER: "EMAILCONFIRMATIONREMEMBER",
  SIGNINPASSWORD_EMAILCONFIRMATIONREMEMBER:
    "SIGNINPASSWORD_EMAILCONFIRMATIONREMEMBER",
  SIGNUPPASSWORD_EMAILCONFIRMATION: "SIGNUPPASSWORD_EMAILCONFIRMATION",
  SIGNUPPASSWORD_ERROR: "SIGNUPPASSWORD_ERROR",
  SIGNINPASSWORD: "SIGNINPASSWORD",
  SIGNUPPASSWORD: "SIGNUPPASSWORD",
  EMAILCONFIRMATION: "EMAILCONFIRMATION",
  ERROR: "ERROR",
};

export default function Login() {
  useEffect(() => {
    setLogo(getLogo());
  }, []);

  const [email, setEmail] = useState("");
  const [logo, setLogo] = useState(false);
  const [stepLeftClassName, setStepLeftClassName] = useState("step-left-start");
  const [stepRightClassName, setStepRightClassName] = useState(
    "step-right-start"
  );

  const [step, setStep] = useState(steps.LOGINEMAIL);

  const email_verification = ({ userExist, email }) => {
    setEmail(email);
    userExist
      ? setStep(steps.LOGINEMAIL_SIGNINPASSWORD)
      : setStep(steps.LOGINEMAIL_SIGNUPPASSWORD);
    setStepLeftClassName("step-left-next-animation");
    setStepRightClassName("step-right-next-animation");
  };

  const signin_verification = ({ userVerified }) => {
    if (!userVerified) {
      setStep(steps.SIGNINPASSWORD_EMAILCONFIRMATIONREMEMBER);
    }
    setStepLeftClassName("step-left-next-animation");
    setStepRightClassName("step-right-next-animation");
  };

  const signup_verification = ({ created }) => {
    created
      ? setStep(steps.SIGNUPPASSWORD_EMAILCONFIRMATION)
      : setStep(steps.SIGNUPPASSWORD_EMAILCONFIRMATION);
    setStepLeftClassName("step-left-next-animation");
    setStepRightClassName("step-right-next-animation");
  };

  const onAnimationEnd = () => {
    if (step === steps.LOGINEMAIL_SIGNINPASSWORD) {
      setStep(steps.SIGNINPASSWORD);
    }
    if (step === steps.LOGINEMAIL_SIGNUPPASSWORD) {
      setStep(steps.SIGNUPPASSWORD);
    }
    if (step === steps.SIGNUPPASSWORD_EMAILCONFIRMATION) {
      setStep(steps.EMAILCONFIRMATION);
    }
    if (step === steps.SIGNINPASSWORD_EMAILCONFIRMATIONREMEMBER) {
      setStep(steps.EMAILCONFIRMATIONREMEMBER);
    }
    setStepLeftClassName("step-left-start");
    setStepRightClassName("step-right-start");
  };

  return (
    <>
      <style jsx global>
        {`
          .step-left-start,
          .step-right-start {
            left: 0%;
          }
          .setp-left-end,
          .step-right-end {
            left: -100%;
          }

          .step-left-next-animation,
          .step-right-next-animation {
            animation: animation-next-step 0.4s normal;
            animation-timing-function: ease;
          }

          @keyframes animation-next-step {
            0% {
              left: 0%;
            }

            100% {
              left: -100%;
            }
          }

          @keyframes animation-previous-step {
            0% {
              left: -100%;
            }

            100% {
              left: 0%;
            }
          }
        `}
      </style>
      <div
        sx={{
          position: "fixed",
          overflow: "hidden",
          display: "grid",
          gridTemplateRows: "33% 66%",
          gridTemplateColumns: "100% 100%",
          gridTemplateAreas: `"logo ." "step-left step-right"`,
          height: "100vh",
          width: "100%",
        }}
      >
        {logo && <LoginLogo sx={{ gridArea: "logo" }} logo={logo}></LoginLogo>}
        {step === steps.LOGINEMAIL && (
          <>
            {email_step({
              className: stepLeftClassName,
              step: "step-left",
              goToNextStep: email_verification,
              onAnimationEnd,
            })}
          </>
        )}
        {step === steps.SIGNINPASSWORD && (
          <>
            {password_signin_step({
              email: email,
              className: stepLeftClassName,
              step: "step-left",
              goToNextStep: signin_verification,
              onAnimationEnd,
            })}
          </>
        )}
        {step === steps.SIGNUPPASSWORD && (
          <>
            {password_signup_step({
              email: email,
              className: stepLeftClassName,
              step: "step-left",
              goToNextStep: signup_verification,
              onAnimationEnd,
            })}
          </>
        )}
        {step === steps.EMAILCONFIRMATION && (
          <>
            {email_confirmation({
              email: email,
              className: stepLeftClassName,
              step: "step-left",
              goToNextStep: email_verification,
              onAnimationEnd,
            })}
          </>
        )}
        {step === steps.EMAILCONFIRMATIONREMEMBER && (
          <>
            {email_confirmation_remember({
              email: email,
              className: stepLeftClassName,
              step: "step-left",
              onAnimationEnd,
            })}
          </>
        )}
        {step === steps.LOGINEMAIL_SIGNINPASSWORD && (
          <>
            {email_step({
              className: stepLeftClassName,
              step: "step-left",
              goToNextStep: email_verification,
              onAnimationEnd,
            })}
            {password_signin_step({
              email: email,
              className: stepRightClassName,
              step: "step-right",
              goToNextStep: signin_verification,
            })}
          </>
        )}
        {step === steps.LOGINEMAIL_SIGNUPPASSWORD && (
          <>
            {email_step({
              className: stepLeftClassName,
              step: "step-left",
              goToNextStep: email_verification,
              onAnimationEnd,
            })}
            {password_signup_step({
              email: email,
              className: stepRightClassName,
              step: "step-right",
            })}
          </>
        )}
        {step === steps.SIGNUPPASSWORD_EMAILCONFIRMATION && (
          <>
            {password_signup_step({
              className: stepLeftClassName,
              step: "step-left",
              goToNextStep: email_verification,
              onAnimationEnd,
            })}
            {email_confirmation({
              email: email,
              className: stepRightClassName,
              step: "step-right",
            })}
          </>
        )}
        {step === steps.SIGNINPASSWORD_EMAILCONFIRMATIONREMEMBER && (
          <>
            {password_signin_step({
              className: stepLeftClassName,
              step: "step-left",
              goToNextStep: email_verification,
              onAnimationEnd,
            })}
            {email_confirmation_remember({
              email: email,
              className: stepRightClassName,
              step: "step-right",
            })}
          </>
        )}
      </div>
    </>
  );
}
