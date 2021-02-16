/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useRef, useEffect, useState } from "react";
import { Button, InputPassword, Loading } from "../../common";
import { useRouter } from "next/router";
import { get } from "../../../backend/forgot-password";
import { ID as PASSWORD_UPDATED_VIEW_ID } from "./password-updated-view";
import Error from "../error";
import NewPassword from "../new-password";

export const ID = "CHECK_CODE_VIEW";

const states = {
  ERROR_CODE: "ERROR",
  ERROR: "ERROR",
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
};

export default function check_code_view({ setGoToStep }) {
  const router = useRouter();
  const {
    query: { email, code },
  } = router;

  const [state, setState] = useState(states.LOADING);
  const goNext = (e) => {};

  useEffect(() => {
    verify();
  }, [email]);

  const verify = async () => {
    if (email || code) {
      const forgot_code = await get({
        email,
        code,
      });
      console.log(forgot_code);

      if (forgot_code.error) {
        setState(states.ERROR);
      } else {
        setState(states.SUCCESS);
      }
    }
  };

  const handleUpdatePasswordClick = async () => {
    console.log("Boom");
    //set new password
    //go to step
    setGoToStep(PASSWORD_UPDATED_VIEW_ID);
  };
  return (
    <div
      sx={{
        display: "flex",
        width: "100%",
        height: "66%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {state === states.LOADING && <Loading style={{ height: "100px" }} />}
      {state === states.ERROR && <Error />}
      {state === states.SUCCESS && (
        <NewPassword onClickResetPassword={handleUpdatePasswordClick} />
      )}
    </div>
  );
}
