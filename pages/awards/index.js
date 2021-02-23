/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect, useState } from "react";
import { get_awards } from "../../src/backend/awards";
import { useRouter } from "next/router";
import AwardsFlow from "../../src/components/awards/flow/awards-flow";
import title from "../../src/assets/svg/awards/title.svg";
import icon from "../../src/assets/svg/awards/icon.svg";

export default function Awards() {
  const router = useRouter();
  const [awards, setAwards] = useState([]);

  useEffect(() => {
    loadAwards();
  }, []);

  const loadAwards = async () => {
    const awards = await get_awards();
    console.log(awards);
    setAwards(awards);
  };

  return (
    <div sx={{ display: "flex", flexDirection: "column" }}>
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
        <AwardsFlow></AwardsFlow>
      </div>
    </div>
  );
}
