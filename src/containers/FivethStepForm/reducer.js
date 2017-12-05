import {
  FIVETH_STEP_SHOW_PROGRESSBAR,
  FIVETH_STEP_HIDE_PROGRESSBAR,
  FIVETH_STEP_NEXT_STEP,
} from './constants';

export const fivethStepFormInitialState = {
  showProgressBar: false,
  completed: false,
};

const fivethStepFormReducer = (state = fivethStepFormInitialState, action) => {
  switch (action.type) {
    case FIVETH_STEP_SHOW_PROGRESSBAR:
      return {
        ...state,
        showProgressBar: true,
      };
    case FIVETH_STEP_HIDE_PROGRESSBAR:
      return {
        ...state,
        showProgressBar: false,
      };
    case FIVETH_STEP_NEXT_STEP:
      return {
        ...state,
        completed: true,
        showProgressBar: false,
      };
    default:
      return state;
  }
};

export default fivethStepFormReducer;
