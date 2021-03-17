/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import icon from "../../../assets/svg/sections/more.svg";
import Section from "./boardgame-section";
export default function SectionMore({ onClickMore = () => {} }) {
  const onSectionClick = (event) => {
    event.stopPropagation();
    event.preventDefault();
    onClickMore();
    console.log("click on more");
  };
  return (
    <Section onClick={onSectionClick}>
      <div
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img sx={{ width: "32px", height: "auto" }} src={icon}></img>
      </div>
    </Section>
  );
}
