/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import popcorn from "../../assets/svg/meeplestrenos/popcorn.svg";
import icon from "../../assets/svg/meeplestrenos/meeplestrenos.svg";
import { useRouter } from "next/router";

export default function AwardHeader() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/meeplestrenos");
  };
  return (
    <div
      sx={{
        width: "100%",
        display: "grid",
        justifyItems: "center",
        alignItems: "center",
        flexDirection: "column",
        rowGap: "10px",
      }}
    >
      <div
        onClick={handleClick}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <img sx={{ width: "10px", height: "10px" }} src={popcorn}></img>
        <div sx={{ width: "10px" }} />
        <span sx={{ color: "#EA4335", fontWeight: "100" }}>meepl</span>
        <span sx={{ fontWeight: "300" }}>estrenos</span>
        <div sx={{ width: "10px" }} />
        <img sx={{ width: "10px", height: "10px" }} src={popcorn}></img>
      </div>
      <img onClick={handleClick} src={icon}></img>
    </div>
  );
}
