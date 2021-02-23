/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import title from "../../assets/svg/awards/title.svg";
import icon from "../../assets/svg/awards/icon.svg";
import { useRouter } from "next/router";

export default function AwardHeader() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/awards");
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
      <img onClick={handleClick} sx={{ width: "50%" }} src={title}></img>
      <img onClick={handleClick} src={icon}></img>
    </div>
  );
}
