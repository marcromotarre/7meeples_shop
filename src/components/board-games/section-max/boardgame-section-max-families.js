import React from "react";
/** @jsxImportSource theme-ui */
import Section from "./boardgame-section-max";
import icon from "../../../assets/svg/sections/families.svg";
import { useRouter } from "next/router";
import { s3_name } from "src/utils/name";

export default function SectionMaxFamilies({ styles, families = [] }) {
  const router = useRouter();

  const gotToFamily = (family) => {
    router.push(`/familias/${family.id}/${s3_name(family.webname)}`);
  };
  return (
    <Section
      styles={{ ...styles }}
      name={families.length > 1 ? "Familias" : "Familia"}
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
        {families.map((family, index) => (
          <p onClick={() => gotToFamily(family)}>
            {family.webname}
            {index < families.length - 1 ? ",\xa0" : ""}
          </p>
        ))}
      </div>
    </Section>
  );
}
