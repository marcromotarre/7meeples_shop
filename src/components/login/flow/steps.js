const step1 = {
  id: "STEP_1",
  view: ({ playAnimation }) => {
    const goToStep2 = () => {
      playAnimation("step1-step2");
    };
    const goToStep3 = () => {
      playAnimation("step1-step3");
    };
    return (
      <>
        <h1>STEP1</h1>
        <button onClick={goToStep2}>go To step 2</button>
        <button onClick={goToStep3}>go To step 3</button>
      </>
    );
  },
};

const step2 = {
  id: "STEP_2",
  view: ({ playAnimation }) => {
    const goToStep2 = () => {
      playAnimation("step2-step1");
    };
    return (
      <>
        <h1>STEP2</h1>
        <button onClick={goToStep2}>back To step 1</button>
      </>
    );
  },
};
const step3 = {
  id: "STEP_3",
  view: ({ playAnimation }) => {
    return (
      <>
        <h1>STEP3</h1>
      </>
    );
  },
};

export default {
  default_step: "STEP_1",
  steps: [step1, step2, step3],
  animations: [
    {
      id: "step1-step2",
      animation_type: "left-to-right",
      start_step: "STEP_1",
      end_step: "STEP_2",
    },
    {
      id: "step1-step3",
      animation_type: "left-to-right",
      start_step: "STEP_1",
      end_step: "STEP_3",
    },
    {
      id: "step2-step1",
      animation_type: "right-to-left",
      start_step: "STEP_2",
      end_step: "STEP_1",
    },
  ],
};
