const step1 = {
  id: "STEP_1",
  view: ({ goToStep }) => {
    const goToStep2 = () => {
      goToStep("STEP_2");
    };
    const goToStep3 = () => {
      goToStep("STEP_3");
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
  view: ({ goToStep }) => {
    const goToStep1 = () => {
      goToStep("STEP_1");
    };
    const goToStep3 = () => {
      goToStep("STEP_3");
    };
    return (
      <>
        <h1>STEP2</h1>
        <button onClick={goToStep1}>back To step 1</button>
        <button onClick={goToStep3}>back To step 3</button>
      </>
    );
  },
};
const step3 = {
  id: "STEP_3",
  view: ({ goToStep }) => {
    const goToStep1 = () => {
      goToStep("STEP_1");
    };
    const goToStep2 = () => {
      goToStep("STEP_2");
    };
    return (
      <>
        <h1>STEP3</h1>
        <button onClick={goToStep1}>back To step 1</button>
        <button onClick={goToStep2}>back To step 2</button>
      </>
    );
  },
};

export const steps = [step1, step2, step3];
