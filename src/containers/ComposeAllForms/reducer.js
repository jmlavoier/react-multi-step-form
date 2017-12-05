import {
  COMPOSE_FORM_UPDATE,
} from './constants';

export const dataFormState = {
  a: '',
  b: [],
  text: '',
  c: '',
};

const updateForm = (state, { field, value }) => {
  const formState = state.form;
  return {
    ...state,
    form: {
      ...formState,
      [field]: value,
    },
  };
};

const dataForm = (state = dataFormState, action) => {
  switch (action.type) {

    case COMPOSE_FORM_UPDATE:
      return updateForm(state, action.payload);

    default:
      return state;

  }
};

export default dataForm;
