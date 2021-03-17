/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect, useState } from "react";
import Section from "./boardgame-section";
import icon from "../../../assets/svg/sections/designers.svg";
import DesignerImage from "src/components/common/images/designer-image";
import { useSelector } from "react-redux";

export default function SectionDesigners({ designers = [] }) {
  const all_designers = useSelector(
    (state) => state.designersReducer.designers
  );

  const designers_complete_info = all_designers.filter(({ id }) =>
    designers.includes(id)
  );

  return (
    <Section icon={icon}>
      <div
        sx={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
        }}
      >
        {all_designers &&
          designers_complete_info.map(({ name }) => (
            <DesignerImage
              styles={{ height: "35px", width: "auto", marginRight: "15px" }}
              name={name}
            ></DesignerImage>
          ))}
      </div>
    </Section>
  );
}

/*export default function Section({ designers = [] }) {
  return (
    <div
      sx={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {designers.map(({ id, webname, name }, index) => (
        <span sx={{ fontWeight: "100", paddingRight: "10px" }} key={id}>
          {webname ? webname : name}
          {index === designers.length - 1 ? "" : ","}
        </span>
      ))}
    </div>
  );
}*/
