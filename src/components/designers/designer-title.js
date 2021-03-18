/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import designers_icon from "../../assets/svg/sections/designers.svg";

import { useRouter } from "next/router";

export default function DesignerTilte() {
  const router = useRouter();
  const clickOnGoBackButton = () => {
    router.push("/autores/");
  };
  return (
    <div
      sx={{
        display: "grid",
        justifyItems: "center",
        alignItems: "center",
        gridTemplateColumns: "auto auto",
        columnGap: "5px",
      }}
    >
      <img sx={{ height: "35px" }} src={designers_icon} />
      <h1 sx={{ paddingTop: "5px" }}>Autor</h1>
    </div>
  );
}
