import {
  COMPOSE_FORM_UPDATE,
  COMPOSE_NEXT_STEP,
} from './constants';

export const dataFormState = {
  form: {
    a: '',
    b: [],
    text: '',
    c: '',
  },
  currentStep: 1,
};

const dataForm = (state = dataFormState, action) => {
  switch (action.type) {

    case COMPOSE_FORM_UPDATE: {
      const form = state.form;
      const payloadForm = action.payload;

      return {
        ...state,
        form: {
          ...form,
          ...payloadForm,
        },
      };
    }

    case COMPOSE_NEXT_STEP:
      return {
        ...state,
        currentStep: state.currentStep + 1,
      };

    default:
      return state;

  }
};

export default dataForm;
