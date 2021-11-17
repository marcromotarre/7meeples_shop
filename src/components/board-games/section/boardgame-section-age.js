/** @jsxImportSource theme-ui */
import React from "react";
import Section from "./boardgame-section";
import { age_string } from "../utils";
import icon from "../../../assets/svg/sections/age.svg";

export default function SectionAge({ age }) {
  return (
    <Section icon={icon}>
      <span>{age_string(age)}</span>
    </Section>
  );
}
