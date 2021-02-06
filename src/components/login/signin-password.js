/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import Input from "../common/inputs/input";
import Button from "../common/buttons/button";
import { useState } from "react";
import { email_exist } from "../../backend/credentials";
import React from "react";
import check_checked from "../../assets/svg/check-checked.svg";
import check_unchecked from "../../assets/svg/check-unchecked.svg";

import loader from "./../../assets/gif/loader.gif";

export default function LoginEmail({ onClickNext = () => {} }) {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const clickButton = async () => {
    const valid_email = new RegExp(
      /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g
    ).test(email);
    if (valid_email) {
      setLoading(true);
      const { userExist } = await email_exist({
        email,
      });
      setLoading(false);
      console.log(onClickNext);
      onClickNext({ userExist, email });
    } else {
      setError(true);
      setClassName("error-animation");
    }
  };

  const [className, setClassName] = useState("");
  const [email, setEmail] = useState("marcromotarre@gmail.");
  const onChange = (email) => {
    setEmail(email);
  };

  const handleShowPasswordCheckbox = () => {
    setShowPassword(!showPassword);
  };

  const onAnimationEnd = () => {
    setClassName("");
  };
  return (
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
          <span sx={{ fontSize: "16px", textAlign: "center" }}>
            marcromotarre@gmail.com
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
            gridTemplateRows: "15% 65% 20%",
            gridTemplateColumns: "100%",
            gridTemplateAreas: `"error-message" "email-input" "checkbox"`,
          }}
        >
          <>
            {error && (
              <span
                sx={{
                  gridArea: "error-message",
                  fontSize: "12px",
                  color: "#FD2C25",
                  textAlign: "center",
                }}
              >
                La contraseña que has introducido es incorrecta
              </span>
            )}
            <Input
              gridArea={"email-input"}
              className={className}
              error={error}
              defaultValue={email}
              width={"75%"}
              text={"Escribe tu contraseña"}
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
  );
}
