/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { useEffect } from "react";
import { create_account } from "src/backend/credentials";

export default function Welcome() {
  const router = useRouter();
  useEffect(() => {
    console.log("read");
    ddbb();
  }, []);

  const ddbb = async () => {
    create_account({ email: "marc romo", password: "blabla", code: "jijijij" });
  };

  return <div>hasura</div>;
}
