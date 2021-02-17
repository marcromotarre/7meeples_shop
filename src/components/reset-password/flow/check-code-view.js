/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useRef, useEffect, useState } from "react";
import { Button, InputPassword, Loading } from "../../common";
import { useRouter } from "next/router";
import { get } from "../../../backend/forgot-password";
import {
  get_by_email as get_user_by_email,
  update as update_password,
} from "../../../backend/credentials";
import { ID as PASSWORD_UPDATED_VIEW_ID } from "./password-updated-view";
import Error from "../error";
import NewPassword from "../new-password";
import TimeOut from "../../shared/time-out";
import { lessThan24Hours } from "../../../utils/date";

export const ID = "CHECK_CODE_VIEW";

const states = {
  ERROR_CODE: "ERROR",
  ERROR: "ERROR",
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  TIME_OUT: "TIME_OUT",
};

export default function check_code_view({ setGoToStep }) {
  const router = useRouter();
  const {
    query: { email, code },
  } = router;

  const [state, setState] = useState(states.LOADING);
  const goNext = (e) => {};
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
    const user = await update_password({ id: userId, password });
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
      {state === states.TIME_OUT && <TimeOut />}
      {state === states.LOADING && <Loading style={{ height: "100px" }} />}
      {state === states.ERROR && <Error />}
      {state === states.SUCCESS && (
        <NewPassword onClickResetPassword={handleUpdatePasswordClick} />
      )}
    </div>
  );
}
