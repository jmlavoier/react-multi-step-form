import {
  FOURTH_STEP_CHANGE_SELECT,
  FOURTH_STEP_SHOW_PROGRESSBAR,
  FOURTH_STEP_HIDE_PROGRESSBAR,
  FOURTH_STEP_NEXT_STEP,
} from './constants';

export const firstStepFormInitialState = {
  c: '',
  showProgressBar: false,
  completed: false,
};

const verifyStateToGo = (state) => {
  if (state.c) {
    return {
      ...state,
      completed: true,
      showProgressBar: false,
    };
  }

  return {
    ...state,
    showProgressBar: false,
  };
};

const firstStepFormReducer = (state = firstStepFormInitialState, action) => {
  switch (action.type) {
    case FOURTH_STEP_CHANGE_SELECT:
      return {
        ...state,
        c: action.payload.value,
      };
    case FOURTH_STEP_SHOW_PROGRESSBAR:
      return {
        ...state,
        showProgressBar: true,
      };
    case FOURTH_STEP_HIDE_PROGRESSBAR:
      return {
        ...state,
        showProgressBar: false,
      };
    case FOURTH_STEP_NEXT_STEP:
      return verifyStateToGo(state);
    default:
      return state;
  }
};

export default firstStepFormReducer;
