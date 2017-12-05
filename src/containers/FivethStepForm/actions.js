import {
  FIVETH_STEP_SUBMIT_FORM,
} from './constants';

export const submitForm = ({
  firstStepForm,
  secondStepForm,
  thirdStepForm,
  fourthStepForm,
}) => {
  const { a1, a2 } = firstStepForm;
  const { b1 } = secondStepForm;
  const { text } = thirdStepForm;
  const { c } = fourthStepForm;

  // create the key "a"
  let a = a1 ? ['A1'] : [];
  a = a2 ? [...a, 'A2'] : a;

  const b = b1 ? 'B1' : 'B2';

  return {
    type: FIVETH_STEP_SUBMIT_FORM,
    payload: {
      a,
      b,
      text,
      c,
    },
  };
};

