export function createFormStepsStore(formStep) {
  let formSteps = [];

  function storeFormSteps(FormStepToStore) {
    formSteps = [
      ...formSteps,
      FormStepToStore,
    ];

    return {
      addForm: storeFormSteps,
      getForm: step => formSteps[step],
    }
  }

  return storeFormSteps(formStep);
}
