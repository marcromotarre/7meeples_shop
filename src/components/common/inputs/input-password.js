/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import { useState } from "react";
import Input from "./input";

export default function InputPassword({
  justifySelf = "",
  alignSelf = "",
  className = "",
  error = false,
  defaultValue = "",
  width = "100%",
  text,
  color = "#33BAFB",
  errorColor = "#FD2C25",
  gridArea = "",
  onChange = () => {},
}) {
  const [value, setValue] = useState(defaultValue);
  const handleChange = (event) => {
    onChange(event.target.value);
    setValue(event.target.value);
  };

  return (
    <div sx={{ gridArea, justifySelf, alignSelf }}>
      <Input></Input>
    </div>
  );
}
