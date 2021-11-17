import React from "react";
/** @jsxImportSource theme-ui */
import Section from "./boardgame-section-max";
import { age_string } from "../utils";
import icon from "../../../assets/svg/sections/content.svg";
import { CONTENT } from "src/data/content";
import Image from "next/image";
export default function SectionContent({ styles, content = [] }) {
  console.log("CONTENT", CONTENT["board"]);
  console.log("content", content);
  //  ;

  return (
    <Section styles={{ ...styles }} name={"Contenido"} icon={icon}>
      <div
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          sx={{
            display: "grid",
            columnGap: "10px",
            rowGap: "3px",
            alignItems: "center",
            justifyItems: "center",
            width: "calc(100% - 30px)",
            gridTemplateColumns: "min-content auto",
          }}
        >
          {content.map((element) => (
            <>
              <Image
                alt=""
                sx={{ height: CONTENT[element.type]?.height, width: "auto" }}
                src={CONTENT[element.type]?.icon}
              />
              <div
                sx={{
                  display: "grid",
                  width: "100%",
                  columnGap: "10px",
                  gridTemplateColumns: "min-content auto min-content",
                }}
              >
                <p sx={{ whiteSpace: "nowrap", justifySelf: "start" }}>
                  {element?.text}
                </p>

                <div
                  sx={{
                    height: "calc(100% - 5px)",
                    width: "100%",
                    borderBottom: "1px dashed #333",
                  }}
                />
                <p
                  sx={{
                    fontSize: "14px",
                    justifySelf: "end",
                    alignSelf: "start",
                  }}
                >
                  (
                  {element?.sub
                    ? element.sub
                        .map(({ units }) => units)
                        .reduce((a, b) => a + b, 0)
                    : element?.units}
                  )
                </p>
              </div>

              {element.sub &&
                element.sub.map((sub) => (
                  <>
                    <div></div>
                    <div
                      sx={{
                        width: "100%",
                        display: "grid",
                        columnGap: "5px",
                        rowGap: "3px",
                        alignItems: "center",
                        justifyItems: "center",
                        gridTemplateColumns: "0px min-content auto min-content",
                        gridTemplateAreas: `". sub dots units"`,
                      }}
                    >
                      <p
                        sx={{
                          whiteSpace: "nowrap",
                          fontSize: "13px",
                          gridArea: "sub",
                          alignSelf: "start",
                          justifySelf: "start",
                        }}
                      >
                        · {sub.text}
                      </p>

                      <div
                        sx={{
                          gridArea: "dots",
                          height: "calc(100% - 5px)",
                          width: "100%",
                          borderBottom: "1px dashed #333",
                        }}
                      />
                      <p
                        sx={{
                          gridArea: "units",
                          fontSize: "12px",
                          justifySelf: "end",
                          alignSelf: "start",
                        }}
                      >
                        ({sub?.units})
                      </p>
                    </div>
                  </>
                ))}
            </>
          ))}
        </div>
      </div>
    </Section>
  );
}
