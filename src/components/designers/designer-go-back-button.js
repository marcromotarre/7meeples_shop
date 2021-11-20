/** @jsxImportSource theme-ui */
import back_button_icon from "../../assets/svg/arrow-back.svg";
import { useRouter } from "next/router";
import Image from "next/image";

export default function DesignerGoBackButton({ styles }) {
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
        ...styles,
      }}
    >
      <Image
        alt=""
        sx={{
          justifySelf: "center",
          alignSelf: "center",
          width: "20px",
          height: "auto",
        }}
        src={back_button_icon}
      />

      <h4 sx={{ justifySelf: "start", alignSelf: "center" }}>
        Ver todos los autores
      </h4>
    </div>
  );
}
