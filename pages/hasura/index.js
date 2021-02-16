/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { useEffect } from "react";
import { add_user, create_account } from "src/backend/credentials";

export default function Welcome() {
  const router = useRouter();
  useEffect(() => {
    console.log("read");
    ddbb();
  }, []);

  const ddbb = async () => {
    console.log("ddbb");
    const a = await add_user({
      email: "marc romdfddfdf",
      password: "blabladfdfdf",
    });
    console.log("a", a);
  };

  return <div>hasura</div>;
}
