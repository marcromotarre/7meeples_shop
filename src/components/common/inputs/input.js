/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import { useState, useRef } from "react";

export default function Input({
  reference,
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
  type = "text",
  onChange = () => {},
}) {
  const [value, setValue] = useState(defaultValue);
  const handleChange = (event) => {
    onChange(event.target.value);
    setValue(event.target.value);
  };
  const inputEl = useRef(null);

  return (
    <div
      className={className}
      sx={{ gridArea, justifySelf, alignSelf, position: "relative", width }}
    >
      <div
        sx={{
          width: "calc(100% - 20px)",
          position: "relative",
          top: "10px",
          left: "10px",
        }}
      >
        <div
          sx={{
            backgroundColor: "white",
            padding: "3px 10px",
            width: "fit-content",
          }}
        >
          <span
            sx={{
              fontSize: "10px",
              color: error ? errorColor : color,
            }}
          >
            {text}
          </span>
        </div>
      </div>

      <input
        sx={{
          width: "100%",
          border: `1px solid ${error ? errorColor : color}`,
          borderRadius: "3px",
          height: "43px",
          paddingLeft: "15px",
          fontSize: "15px",
          "&:focus": {
            outline: "none",
            fontSize: "16px";
          },
        }}
        type={type}
        value={value}
        onChange={handleChange}
      ></input>
    </div>
  );
}
