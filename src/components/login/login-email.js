/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import Input from "../common/inputs/input";
import Button from "../common/buttons/button";
import { useState } from "react";
import { email_exist } from "../../backend/credentials";
import React from "react";

import loader from "./../../assets/gif/loader.gif";

export default function LoginEmail({ onClickNext = () => {} }) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const clickButton = async () => {
    const valid_email = new RegExp(
      /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g
    ).test(email);
    if (valid_email) {
      setLoading(true);
      const { error } = await email_exist({
        email,
      });
      setLoading(false);
      onClickNext({ userExist: error ? false : true, email });
    } else {
      setError(true);
      setClassName("error-animation");
    }
  };

  const [className, setClassName] = useState("");
  const [email, setEmail] = useState("");
  const onChange = (email) => {
    setEmail(email);
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
            gridTemplateAreas: `"form" "button" "title"`,
            height: "100%",
          }}
        >
          <div
            sx={{ gridArea: "title", justifySelf: "center", alignSelf: "end" }}
          ></div>

          <div
            sx={{
              gridArea: "form",
              justifySelf: "center",
              alignSelf: "center",
              width: "100%",
              display: "grid",
              gridTemplateRows: "25% 75%",
              gridTemplateColumns: "100%",
              gridTemplateAreas: `"error-message" "email-input"`,
              height: "100%",
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
                  No has introducido un correo electrónico
                </span>
              )}
              <Input
                gridArea={"email-input"}
                className={className}
                error={error}
                defaultValue={email}
                width={"75%"}
                text={"Escribe tu correo electrónico"}
                onChange={onChange}
                justifySelf={"center"}
                alignSelf={"center"}
              ></Input>
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
