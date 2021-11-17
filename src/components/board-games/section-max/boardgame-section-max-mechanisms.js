import React from "react";
/** @jsxImportSource theme-ui */
import Section from "./boardgame-section-max";
import icon from "../../../assets/svg/sections/mechanisms.svg";
import { useSelector } from "react-redux";
import Designer from "src/components/designers/designer";
import { useRouter } from "next/router";

export default function SectionMaxMechanisms({ styles, mechanisms = [] }) {
  const router = useRouter();

  const gotToMechanism = (mechanism) => {
    router.push(`/mecanicas/${mechanism.id}/${mechanism.name}`);
  };
  return (
    <Section
      styles={{ ...styles }}
      name={"Mecánicas"}
      icon={icon}
      iconStyles={{ marginLeft: "6px" }}
    >
      <div
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "start",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {mechanisms.map((mechanism, index) => (
          <p onClick={() => gotToMechanism(mechanism)}>
            {mechanism.name}
            {index < mechanisms.length - 1 ? ",\xa0" : ""}
          </p>
        ))}
      </div>
    </Section>
  );
}
