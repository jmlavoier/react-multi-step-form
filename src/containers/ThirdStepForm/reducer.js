import {
  SHOW_ERROR,
  NEXT_STEP,
  CHANGE_INPUT,
} from './constants';

export const thirdStepFormInitialState = {
  text: '',
  errorMessage: '',
  completed: false,
};

const thirdStepFormReducer = (state = thirdStepFormInitialState, action) => {
  switch (action.type) {
    case SHOW_ERROR:
      return {
        ...state,
        [action.payload.name]: !state[action.payload.name],
      };
    case NEXT_STEP:
      return {
        ...state,
        completed: true,
      };
    case CHANGE_INPUT:
      return {
        ...state,
        text: action.payload.value,
      };
    default:
      return state;
  }
};

export default thirdStepFormReducer;
