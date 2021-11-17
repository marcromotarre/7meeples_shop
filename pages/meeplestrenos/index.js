/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import { get_awards } from "../../src/backend/awards";
import { useRouter } from "next/router";
import MeeplestrenosView from "../../src/components/estrenos/estrenos-views";

export default function Meeplestrenos() {
  const router = useRouter();
  const [estrenos, setEstrenos] = useState([]);

  useEffect(() => {}, []);

  return (
    <div sx={{ display: "flex", flexDirection: "column" }}>
      <MeeplestrenosView estrenos={estrenos} />
    </div>
  );
}
