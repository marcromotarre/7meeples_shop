/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import Input from "../common/inputs/input";
import Button from "../common/buttons/button";

export default function SignUpPassword({ onClickNext }) {
  const clickButton = () => {
    onClickNext("marcromotarre@gmail.com");
  };
  return (
    <div
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        height: "100%",
      }}
    >
      <div>
        <span sx={{ fontSize: "16px", textAlign: "center" }}>Hola</span>
        <span sx={{ fontSize: "16px", textAlign: "center" }}>
          marcromotarre@gmail.com
        </span>
        <span sx={{ fontSize: "16px", textAlign: "center" }}>
          no tenemos ninguna cuenta asociada a este email.
        </span>
        <span sx={{ fontSize: "16px", textAlign: "center" }}>
          Estás a un paso de crear tu cuenta.
        </span>
      </div>
      <Input width={"75%"} text="Introduce una contraseña"></Input>
      <Button onClick={clickButton} text={"SIGUIENTE"}></Button>
    </div>
  );
}
