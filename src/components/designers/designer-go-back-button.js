/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import back_button_icon from "../../assets/svg/arrow-back.svg";
import { useRouter } from "next/router";

export default function DesignerGoBackButton() {
  const router = useRouter();
  const clickOnGoBackButton = () => {
    router.push("/autores/");
  };
  return (
    <div
      onClick={clickOnGoBackButton}
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "25px auto",
        columnGap: "10px",
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

      <h4 sx={{ justifySelf: "start", alignSelf: "center" }}>
        Ver todos los autores
      </h4>
    </div>
  );
}
