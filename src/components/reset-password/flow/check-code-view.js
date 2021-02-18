/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useRef, useEffect, useState } from "react";
import { Button, InputPassword, Loading } from "../../common";
import { useRouter } from "next/router";
import { get } from "../../../backend/forgot-password";
import {
  get_by_email as get_user_by_email,
  set_password,
} from "../../../backend/credentials";
import { remove as delete_forgot_password } from "../../../backend/forgot-password";
import { ID as PASSWORD_UPDATED_VIEW_ID } from "./password-updated-view";
import { ID as EMAIL_RESET_PASSWORD_SENT_VIEW_ID } from "./../../login/flow/email-reset-password-sent-view";
import Error from "../error";
import NewPassword from "../new-password";
import TimeOut from "../../shared/time-out";
import { lessThan24Hours } from "../../../utils/date";
import { forgot_password_code_and_email } from "../../../utils/password";
var passwordHash = require("password-hash");

import update from "pages/api/credentials/update";

export const ID = "CHECK_CODE_VIEW";

const states = {
  ERROR_CODE: "ERROR",
  ERROR: "ERROR",
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  TIME_OUT: "TIME_OUT",
  REGENRATE_PASSWORD_LOADDING: "REGENRATE_PASSWORD_LOADDING",
};

export default function check_code_view({ setGoToStep }) {
  const router = useRouter();
  const {
    query: { email, code },
  } = router;

  const [state, setState] = useState(states.LOADING);

  let userId = undefined;

  useEffect(() => {
    verify();
  }, [email]);

  const verify = async () => {
    if (email || code) {
      const user = await get_user_by_email({ email });
      console.log(user);
      userId = user.id;
      const forgot_code = await get({
        email,
        code,
      });
      if (forgot_code.error) {
        setState(states.ERROR);
      } else {
        if (lessThan24Hours(forgot_code.date)) {
          setState(states.SUCCESS);
        } else {
          setState(states.TIME_OUT);
        }
      }
    }
  };

  const handleUpdatePasswordClick = async (password) => {
    const { error } = await set_password({
      email,
      password: passwordHash.generate(password),
    });
    if (!error) {
      await delete_forgot_password({ email });
      await delete setGoToStep(PASSWORD_UPDATED_VIEW_ID);
    }
    //delete regenerated code
  };

  const regenerateCode = async () => {
    setState(states.REGENRATE_PASSWORD_LOADDING);
    await forgot_password_code_and_email({ email });
    setGoToStep(EMAIL_RESET_PASSWORD_SENT);
    setState(states.TIME_OUT);
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
      {(state === states.TIME_OUT ||
        state === states.REGENRATE_PASSWORD_LOADDING) && (
        <TimeOut
          action={{
            name: "REGENERAR CÓDIGO",
            onClick: regenerateCode,
            loading: state === states.REGENRATE_PASSWORD_LOADDING,
          }}
        />
      )}
      {state === states.LOADING && <Loading style={{ height: "100px" }} />}
      {state === states.ERROR && <Error />}
      {state === states.SUCCESS && (
        <NewPassword onClickResetPassword={handleUpdatePasswordClick} />
      )}
    </div>
  );
}
