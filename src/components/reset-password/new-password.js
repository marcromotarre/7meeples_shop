/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import { Button, InputPassword } from "../common";

export default function NewPassword({ onClickResetPassword }) {
  let password = "";
  const handleClick = () => {
    console.log(password);
    onClickResetPassword(password);
  };

  const onHanglePasswordChange = (value) => {
    password = value;
  };
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
        onHangleInputChange={onHanglePasswordChange}
        styles={{ width: "80%" }}
        text="Escribe tu nueva contraseña"
      ></InputPassword>
      <div sx={{ height: "30px" }} />
      <Button onClick={handleClick}>
        <span>RESETEAR CONTRASEÑA</span>
      </Button>
    </div>
  );
}
