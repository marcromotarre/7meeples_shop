/** @jsxImportSource theme-ui */
import search_icon from "../../assets/svg/search.svg";
import Image from "next/image";

export default function Search({ className }) {
  return (
    <div
      className={className}
      sx={{
        display: "flex",
        width: "100%",
        height: "50px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        sx={{
          display: "flex",
          width: "90%",
          height: "50px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <input
          sx={{
            width: "100%",
            height: "24px",
            borderRadius: "6px",
            border: "0",
            outline: "none",
            backgroundColor: "#F7F7F7",
            paddingLeft: "30px",
            fontFamily: "Quicksand",
            fontSize: "16px",
          }}
          type="text"
          id="lname"
          name="lname"
          placeholder="Buscar en 7meeples.es"
        />
        <Image
          sx={{
            position: "absolute",
            left: "calc(5% + 10px)",
            height: "10px",
          }}
          src={search_icon}
          alt="buscar"
        />
      </div>
    </div>
  );
}
