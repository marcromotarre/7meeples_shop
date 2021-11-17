/** @jsxImportSource theme-ui */
import designers_icon from "../../assets/svg/sections/designers.svg";
import Image from "next/image";

import { useRouter } from "next/router";

export default function DesignerTilte({ styles }) {
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
        ...styles,
      }}
    >
      <Image sx={{ height: "35px" }} src={designers_icon} />
      <h1 sx={{ paddingTop: "5px" }}>Autor</h1>
    </div>
  );
}
