/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect, useState } from "react";

import MenuItem from "../menu/menu-item";
import { get_awards } from "src/backend/awards";
export default function Dashboard() {
  const [awards, setAwards] = useState([]);

  useEffect(() => {
    loadAwards();
  }, []);

  const loadAwards = async () => {
    const awards = await get_awards();
    setAwards(awards);
  };

  const clickOnAward = (id) => {
    router.push(`awards/${id}`);
  };

  return (
    <div
      sx={{
        width: "100%",
        display: "grid",
        justifyItems: "center",
        alignItems: "center",
        flexDirection: "column",
        rowGap: "25px",
      }}
    >
      <img sx={{ width: "50%" }} src={title}></img>
      <img src={icon}></img>
      <span
        sx={{
          textAlign: "center",
          width: "75%",
          fontStyle: "italic",
          fontWeight: "100",
        }}
      >
        Estas son nuestras recomendaciones por cada categoria
      </span>
    </div>
  );
}
