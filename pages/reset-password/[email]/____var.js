/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import LoginLogo from "../../../src/components/login/login-logo";
import { getLogo } from "../../../src/data/logo";
import React, { useState, useEffect } from "react";
import loader from "./../../../src/assets/gif/loader.gif";
import ok from "./../../../src/assets/svg/ok.svg";
import close from "./../../../src/assets/svg/close.svg";
import ko from "./../../../src/assets/svg/ko.svg";
import { useRouter } from "next/router";
import Button from "../../../src/components/common/buttons/button";
import { get } from "src/backend/forgot-password";
import InputPassword from "src/components/common/inputs/input-password";

const states = {
  ERROR_CODE: "ERROR",
  ERROR: "ERROR",
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
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

  useEffect(() => {
    setLogo(getLogo());
  }, []);

  useEffect(() => {
    verify();
  }, [email]);

  const clickOnScreen = () => {
    if (state === states.ERROR) {
      router.push("/");
    }
  };
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
              <img
                src={close}
                sx={{
                  height: "25px",
                  gridArea: "button",
                }}
              />
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
            {state === states.ERROR && (
              <div
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span sx={{ color: colors[state], fontSize: "12px" }}>
                  no es posible resetear tu contraseña
                </span>
                <span sx={{ color: colors[state], fontSize: "12px" }}>
                  envianos un email a
                </span>
                <span sx={{ color: colors[state], fontSize: "12px" }}>
                  info@7meeples.es
                </span>
                <span sx={{ color: colors[state], fontSize: "12px" }}>
                  para resolver la incidencia
                </span>
              </div>
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
              <img src={loader} sx={{ height: "50px", gridArea: "button" }} />
            )}
            {state === states.SUCCESS && (
              <div
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <InputPassword
                  styles={{ width: "80%" }}
                  text="Escribe tu nueva contraseña"
                ></InputPassword>
                <div sx={{ height: "30px" }} />
                <Button>
                  <span>RESETEAR CONTRASEÑA</span>
                </Button>
              </div>
            )}
            {state === states.ERROR && (
              <img src={ko} sx={{ height: "50px", gridArea: "button" }} />
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
                  ponte en contacto con nosotros a
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
