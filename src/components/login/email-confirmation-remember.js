/** @jsxImportSource theme-ui */
import { useState } from "react";
import React from "react";
import back_button_icon from "../../assets/svg/back-button.svg";

import loader from "./../../assets/gif/loader.gif";
import Button from "../common/buttons/button";

export default function EmailConfirmationRemember({
  email = "marcromotarre@gmail.com",
  onClickNext = () => {},
}) {
  const [className, setClassName] = useState("");

  const onClickActivate = () => {
    console.log("activate");
  };

  return (
    <div
      sx={{
        display: "grid",
        gridTemplateRows: "25% 50% 25%",
        gridTemplateColumns: "100%",
        gridTemplateAreas: `"up-info" "middle-info" "bottom-info"`,
        height: "100%",
      }}
    >
      <div
        sx={{
          gridArea: "up-info",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <span>Hola</span>
        <span>{email}</span>
      </div>
      <div
        sx={{
          gridArea: "middle-info",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <span
          sx={{
            paddingTop: "5px",
            fontSize: "12px",
            width: "60%",
            textAlign: "center",
            paddingBottom: "30px",
          }}
        >
          para poder acceder a la cuenta debes activarla desde tu cuenta de
          email
        </span>
        <Button text={"ACTIVAR"} onClick={onClickActivate}></Button>
      </div>
    </div>
  );
}
