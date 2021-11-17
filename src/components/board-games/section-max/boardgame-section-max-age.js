import React from "react";
/** @jsxImportSource theme-ui */
import Section from "./boardgame-section-max";
import { age_string } from "../utils";
import icon from "../../../assets/svg/sections/age.svg";

export default function SectionMaxAge({ styles, age }) {
  return (
    <Section styles={{ ...styles }} name={"Edad"} icon={icon}>
      <p>{age_string(age)}</p>
    </Section>
  );
}
