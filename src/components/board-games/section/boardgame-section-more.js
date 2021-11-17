import React from "react";
/** @jsxImportSource theme-ui */
import icon from "../../../assets/svg/sections/more.svg";
import Image from "next/image";
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
        <Image alt="" sx={{ width: "32px", height: "auto" }} src={icon}></Image>
      </div>
    </Section>
  );
}
