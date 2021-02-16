/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useState, useEffect } from "react";
import LoginLogo from "../../../src/components/login/login-logo";

import CheckCodeView, {
  ID as CHECK_CODE_VIEW_ID,
} from "../../../src/components/reset-password/flow/check-code-view";

import PasswordUpdatedView, {
  ID as PASSWORD_UPDATED_VIEW_ID,
} from "../../../src/components/reset-password/flow/password-updated-view";

import Flow from "../../../src/components/common/flow/flow";
import { getLogo } from "../../../src/data/logo";
import Scroll, { scrollSpy } from "react-scroll";

export const ORDER = [CHECK_CODE_VIEW_ID, PASSWORD_UPDATED_VIEW_ID];

export default function ResetPassword() {
  var scrollSpy = Scroll.scrollSpy;

  const [logo, setLogo] = useState(false);
  const [data, setData] = useState({});
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
          <CheckCodeView data={data} setData={setData} setGoToStep={go} />
          <PasswordUpdatedView data={data} setData={setData} setGoToStep={go} />
        </Flow>
      </div>
    </>
  );
}
