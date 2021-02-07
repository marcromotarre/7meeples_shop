/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import Input from "../common/inputs/input";
import Button from "../common/buttons/button";
import { useState } from "react";
import { add_user_confirmation } from "../../backend/credentials";
import React from "react";
import check_checked from "../../assets/svg/check-checked.svg";
import check_unchecked from "../../assets/svg/check-unchecked.svg";
var passwordHash = require("password-hash");

import loader from "./../../assets/gif/loader.gif";

export default function SignUpPassword({ onClickNext = () => {} }) {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("marcromotarre@gmail.com");
  const [password, setPassword] = useState("");

  const clickButton = async () => {
    setLoading(true);
    var hashedPassword = passwordHash.generate(password);
    const code =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);

    const { email, created } = await add_user_confirmation({
      email,
      password: hashedPassword,
      code,
    });

    onClickNext({ email, created });

    setLoading(true);
  };

  const [className, setClassName] = useState("");

  const onChange = (email) => {
    setPassword(password);
  };

  const handleShowPasswordCheckbox = () => {
    setShowPassword(!showPassword);
  };

  const onAnimationEnd = () => {
    setClassName("");
  };
  return (
    <div
      sx={{
        display: "grid",
        gridTemplateRows: "50% 50%",
        gridTemplateColumns: "100%",
        height: "100%",
      }}
    >
      <>
        <div
          onAnimationEnd={onAnimationEnd}
          sx={{
            position: "relative",
            display: "grid",
            gridTemplateRows: "25% 50% 25%",
            gridTemplateColumns: "100%",
            gridTemplateAreas: `"title" "form" "button"`,
            height: "100%",
          }}
        >
          <div
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gridArea: "title",
              justifySelf: "center",
              alignSelf: "end",
            }}
          >
            <span sx={{ fontSize: "16px", textAlign: "center" }}>Hola</span>
            <span sx={{ fontSize: "16px", textAlign: "center" }}>{email}</span>
            <span
              sx={{
                paddingTop: "10px",
                width: "70%",
                fontSize: "16px",
                textAlign: "center",
              }}
            >
              {"No tenemos ninguna cuenta asociada a este email."}
            </span>
          </div>

          <div
            sx={{
              height: "100%",
              gridArea: "form",
              justifySelf: "center",
              alignSelf: "center",
              width: "100%",
              display: "grid",
              gridTemplateRows: "30% 50% 20%",
              gridTemplateColumns: "100%",
              gridTemplateAreas: `"error-message" "email-input" "checkbox"`,
            }}
          >
            <>
              <span
                sx={{
                  gridArea: "error-message",
                  textAlign: "center",
                  alignSelf: "end",
                  fontWeight: "bold",
                }}
              >
                Estás a un paso de crear tu cuenta.
              </span>
              <Input
                gridArea={"email-input"}
                className={className}
                error={error}
                defaultValue={password}
                width={"75%"}
                text={"Escribe una contraseña"}
                onChange={onChange}
                justifySelf={"center"}
                alignSelf={"center"}
                type={showPassword ? "text" : "password"}
              ></Input>

              <div
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  position: "relative",
                  left: "12.5%",
                  gridArea: "checkbox",
                }}
                onClick={handleShowPasswordCheckbox}
              >
                <img src={showPassword ? check_checked : check_unchecked} />
                <span
                  sx={{
                    paddingLeft: "5px",
                    fontSize: "12px",
                    color: "#33BAFB",
                    textAlign: "center",
                  }}
                >
                  Mostrar contraseña
                </span>
              </div>
            </>
          </div>
          <div
            sx={{
              gridArea: "button",
              justifySelf: "center",
              alignSelf: "center",
            }}
          >
            {!loading && (
              <Button
                gridArea={"button"}
                onClick={clickButton}
                text={"SIGUIENTE"}
              ></Button>
            )}
            {loading && (
              <img
                src={loader}
                sx={{ height: "50px", gridArea: "button" }}
                alt="loading..."
              />
            )}
          </div>
        </div>
      </>
    </div>
  );
}
