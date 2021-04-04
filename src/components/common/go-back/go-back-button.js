/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import back_button_icon from "src/assets/svg/arrow-back.svg";
import { useRouter } from "next/router";

export default function GoBackButton({ text, route, styles }) {
  const router = useRouter();
  const clickOnGoBackButton = () => {
    router.push(route);
  };
  return (
    <div
      onClick={clickOnGoBackButton}
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "25px auto",
        columnGap: "10px",
        ...styles,
      }}
    >
      <img
        sx={{
          justifySelf: "center",
          alignSelf: "center",
          width: "20px",
          height: "auto",
        }}
        src={back_button_icon}
      ></img>

      <h4 sx={{ justifySelf: "start", alignSelf: "center" }}>{text}</h4>
    </div>
  );
}
