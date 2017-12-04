import {
  SECOND_STEP_CHANGE_RADIO,
  SECOND_STEP_SHOW_PROGRESSBAR,
  SECOND_STEP_HIDE_PROGRESSBAR,
  SECOND_STEP_NEXT_STEP,
} from './constants';

export const secondStepFormInitialState = {
  b1: false,
  b2: false,
  showProgressBar: false,
  completed: false,
};

const verifyStateToGo = (state) => {
  if (state.b1 || state.b2) {
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

const secondStepFormReducer = (state = secondStepFormInitialState, action) => {
  switch (action.type) {
    case SECOND_STEP_CHANGE_RADIO:
      return {
        ...state,
        b1: action.payload.name === 'b1',
        b2: action.payload.name === 'b2',
      };
    case SECOND_STEP_SHOW_PROGRESSBAR:
      return {
        ...state,
        showProgressBar: true,
      };
    case SECOND_STEP_HIDE_PROGRESSBAR:
      return {
        ...state,
        showProgressBar: false,
      };
    case SECOND_STEP_NEXT_STEP:
      return verifyStateToGo(state);
    default:
      return state;
  }
};

export default secondStepFormReducer;
