/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect, useState } from "react";
import { get_awards } from "../../src/backend/awards";
import { useRouter } from "next/router";
import AwardsView from "../../src/components/awards/awards-view";

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
      <div sx={{ height: "20px" }}></div>

      <AwardsView awards={awards} />
    </div>
  );
}
