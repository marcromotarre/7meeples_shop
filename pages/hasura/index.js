/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { useEffect } from "react";

export default function Welcome() {
  const router = useRouter();
  useEffect(() => {
    console.log("read");
  }, []);

  return <div>hasura</div>;
}
