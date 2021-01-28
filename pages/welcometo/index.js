/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { useEffect } from "react";

export default function Welcome() {
  const router = useRouter();
  useEffect(() => {
    if (router) {
      router.push("https://7meeples.com/welcome");
    }
  }, [router]);

  return <div></div>;
}
