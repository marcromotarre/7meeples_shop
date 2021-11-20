import React from "react";
/** @jsxImportSource theme-ui */
import Section from "./boardgame-section-max";
import icon from "../../../assets/svg/sections/designers.svg";
import { useSelector } from "react-redux";
import Designer from "src/components/designers/designer";
import { useRouter } from "next/router";

export default function SectionMaxDesigners({ styles, designers = [] }) {
  const router = useRouter();

  const gotToDesginer = (designer) => {
    router.push(`/autores/${designer.id}/${designer.name}`);
  };
  return (
    <Section
      styles={{ ...styles }}
      name={designers.length > 1 ? "Autores" : "Autor"}
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
        {designers.map((designer, index) => (
          <p key={index} onClick={() => gotToDesginer(designer)}>
            {designer.name}
            {index < designers.length - 1 ? ",\xa0" : ""}
          </p>
        ))}
      </div>
    </Section>
  );
}
