/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { useEffect } from "react";

import login_steps from "../../src/components/login/flow/steps";
import Flow from "../../src/components/common/flow/flow";
export default function Agura() {
  const { steps, default_step, animations } = login_steps;
  console.log(steps, default_step);
  return (
    <div>
      <h1>LOGIN FLOW</h1>
      <Flow
        steps={steps}
        default_step={default_step}
        animations={animations}
      ></Flow>
    </div>
  );
}
