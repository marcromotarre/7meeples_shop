/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";

export default function Section({ children }) {
  return (
    <div>
      <span sx={{ fontSize: "15px", fontWeight: "100" }}>{children}</span>
    </div>
  );
}
