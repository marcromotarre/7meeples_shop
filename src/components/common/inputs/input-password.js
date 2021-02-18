/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import { useState } from "react";
import Input from "./input";
import check_checked from "../../../assets/svg/check-checked.svg";
import check_unchecked from "../../../assets/svg/check-unchecked.svg";

export default function InputPassword({
  endAnimation = () => {},
  styles: styles_password = {},
  className = "",
  error = { error: false, newError: false },
  defaultValue = "",
  text = "Escribe tu contraseña",
  onHangleInputChange = () => {},
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState(defaultValue);

  const handleShowPasswordCheckbox = () => {
    setShowPassword(!showPassword);
  };
  const onChange = (value) => {
    onHangleInputChange(value);
    setValue(value);
  };

  return (
    <div sx={{ ...styles_password }}>
      <Input
        endAnimation={endAnimation}
        styles={{
          justifySelf: "center",
          alignSelf: "center",
        }}
        className={className}
        error={error}
        defaultValue={defaultValue}
        text={text}
        onChange={onChange}
        alignSelf={"center"}
        type={showPassword ? "text" : "password"}
      ></Input>
      <div sx={{ height: "15px" }}></div>
      <div
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          position: "relative",
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
    </div>
  );
}
