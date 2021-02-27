/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";

export default function link({ children, onClick = () => {} }) {
  return (
    <h5 onClick={onClick} sx={{ color: "#339BCC" }}>
      {children}
    </h5>
  );
}
