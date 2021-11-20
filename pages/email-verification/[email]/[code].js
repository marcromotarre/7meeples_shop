/** @jsxImportSource theme-ui */
import LoginLogo from "../../../src/components/login/login-logo";
import { getLogo } from "../../../src/data/logo";
import React, { useState, useEffect } from "react";
import loader from "./../../../src/assets/gif/loader.gif";
import ok from "./../../../src/assets/svg/ok.svg";
import close from "./../../../src/assets/svg/close.svg";
import ko from "./../../../src/assets/svg/ko.svg";
import { useRouter } from "next/router";
import Button from "../../../src/components/common/buttons/button";
import Image from "next/image";
import {
  email_exist,
  get_user,
  get_user_confirmation,
  delete_user_confirmation,
} from "src/backend/credentials";

const states = {
  ERROR_CODE: "ERROR",
  ERROR: "ERROR",
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
};

const messages = {
  ERROR: "ha habido un problema por favor intentalo mas tarde",
  ERROR_NOEMAIL: "esta cuenta de correo no existe",
  ERROR_NOVALIDCODE: "el codigo es incorrecto",
  LOADING: "estamos verificando tu email",
  SUCCESS: "tu email ha sido verificado con exito",
};
const colors = {
  ERROR: "#FD2C25",
  ERROR_CODE: "#FD2C25",
  LOADING: "#000",
  SUCCESS: "#33BAFB",
};

export default function EmailVerification({ url }) {
  const router = useRouter();
  const {
    query: { email, code },
  } = router;
  const [logo, setLogo] = useState(false);
  const [state, setState] = useState(states.LOADING);
  const [message, setMessage] = useState(messages.LOADING);

  useEffect(() => {
    setLogo(getLogo());
  }, []);

  useEffect(() => {
    verify();
  }, [email]);

  const clickOnScreen = () => {
    if (state === states.SUCCESS || state === states.ERROR) {
      router.push("/");
    }
  };
  const verify = async () => {
    if (email || code) {
      console.log(email, code);

      const {
        email: emailDDBB,
        userVerified,
        error,
      } = await email_exist({
        email,
      });
      console.log(emailDDBB, userVerified, error);

      if (error) {
        setState(states.ERROR);
        setMessage(messages.ERROR_NOEMAIL);
      } else {
        if (userVerified) {
          setState(states.SUCCESS);
          setMessage(messages.SUCCESS);
        } else {
          //check code is correct
          const user_confirmation = await get_user_confirmation({
            email,
            code,
          });
          if (user_confirmation.error) {
            setState(states.ERROR);
            setMessage(messages.ERROR_NOVALIDCODE);
          } else {
            const { error } = await delete_user_confirmation({ email });
            if (error) {
              setState(states.ERROR);
              setMessage(messages.ERROR);
            } else {
              setState(states.SUCCESS);
              setMessage(messages.SUCCESS);
            }
          }
        }
      }
    }
  };

  return (
    <>
      <div
        onClick={clickOnScreen}
        sx={{
          overflow: "hidden",
          display: "grid",
          gridTemplateRows: "33% 33% 33%",
          gridTemplateColumns: "100%",
          gridTemplateAreas: `"top" "verification" "info"`,
          height: "100vh",
          width: "100%",
        }}
      >
        <div
          sx={{
            overflow: "hidden",
            display: "grid",
            gridArea: "top",
            gridTemplateRows: "20% 60% 20%",
            gridTemplateColumns: "100%",
            gridTemplateAreas: `"close" "logo" "." `,
            height: "100%",
            width: "100%",
          }}
        >
          {logo && <LoginLogo gridArea={"logo"} logo={logo}></LoginLogo>}
          {(state === states.SUCCESS || state === states.ERROR) && (
            <div sx={{ gridArea: "close", padding: "10px 10px" }}>
              <div
                sx={{
                  position: "relative",
                  gridArea: "button",
                }}
              >
                <Image height={25} width={25} alt="" src={close} />
              </div>
            </div>
          )}
        </div>

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
              <span>{email}</span>
            </div>
            <span sx={{ color: colors[state], fontSize: "12px" }}>
              {message}
            </span>
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
              <Image
                alt=""
                src={loader}
                sx={{ height: "50px", gridArea: "button" }}
              />
            )}
            {state === states.SUCCESS && (
              <Image
                alt=""
                src={ok}
                sx={{ height: "50px", gridArea: "button" }}
              />
            )}
            {state === states.ERROR && (
              <Image
                alt=""
                src={ko}
                sx={{ height: "50px", gridArea: "button" }}
              />
            )}
          </div>
        </div>
        <div
          sx={{
            gridArea: "info",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          {state === states.SUCCESS && (
            <span sx={{ color: colors[state], fontSize: "15px" }}>
              pulsa en la pantalla para seguir
            </span>
          )}
          {state === states.ERROR && (
            <div
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
                height: "100%",
              }}
            >
              <span sx={{ color: "#000", fontSize: "15px" }}>
                pulsa en la pantalla para seguir
              </span>
              <div
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  paddingBottom: "20px",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <span sx={{ color: "#000", fontSize: "15px" }}>
                  para cualquier duda ponte en contacto con
                </span>
                <span sx={{ color: "#000", fontSize: "15px" }}>
                  info@7meeples.es
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
