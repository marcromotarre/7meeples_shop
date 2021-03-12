/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import { useRouter } from "next/router";
import search_icon from "../../assets/svg/search.svg";

export default function Searcher() {
  const router = useRouter();

  return (
    <div
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <div
        sx={{
          position: "relative",
          width: "90%",
          borderRadius: "87px",
          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
          display: "grid",
          justifyItems: "center",
          alignItems: "center",
          rowGap: "10px",
        }}
      >
        <input
          sx={{
            margin: "10px",
            width: "100%",
            height: "24px",
            border: "0",
            outline: "none",
            backgroundColor: "#F7F7F7",
            paddingLeft: "30px",
            fontFamily: "Quicksand",
            fontSize: "16px",
            backgroundColor: "#ffffff00",
          }}
          type="text"
          id="lname"
          name="lname"
          placeholder="Buscar en 7meeples.es"
        />
        <img
          sx={{
            position: "absolute",
            right: "calc(10px)",
            top: "calc(50% - 12.5px)",
            height: "25px",
          }}
          src={search_icon}
          alt="buscar"
        />
      </div>
    </div>
  );
}
