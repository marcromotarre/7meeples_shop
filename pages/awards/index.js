/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect, useState } from "react";
import { get_awards } from "../../src/backend/awards";
import { useRouter } from "next/router";

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

  const clickOnAward = (id) => {
    router.push(`awards/${id}`);
  };

  return (
    <div sx={{ display: "flex", flexDirection: "column" }}>
      {awards.map((award) => (
        <span key={awards.id} onClick={() => clickOnAward(award.id)}>
          {award.name}
        </span>
      ))}
    </div>
  );
}
