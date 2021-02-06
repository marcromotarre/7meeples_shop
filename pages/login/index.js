/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import LoginLogo from "../../src/components/login/login-logo";
import LoginEmail from "../../src/components/login/login-email";
import { getLogo } from "../../src/data/logo";
import Input from "../../src/components/inputs/basic-input";
export default function Login() {
  const logo = getLogo();
  console.log(logo);
  return (
    <div
      sx={{
        display: "grid",
        gridTemplateRows: "33% 33% 33%",
        gridTemplateColumns: "100%",
        height: "100vh",
        width: "100%",
      }}
    >
      <LoginLogo sx={{}} logo={logo}></LoginLogo>
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span sx={{ fontSize: "12px", textAlign: "center" }}>
          Inicia sesión o crea una cuenta nueva
        </span>
        <Input width={"75%"} text="Escribe tu correo electrónico"></Input>
      </div>
    </div>
  );
}
