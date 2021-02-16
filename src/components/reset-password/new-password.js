/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import { Button, InputPassword } from "../common";

export default function NewPassword({ onClickResetPassword }) {
  return (
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
      <Button onClick={onClickResetPassword}>
        <span>RESETEAR CONTRASEÑA</span>
      </Button>
    </div>
  );
}
