import {
  CHANGE_RADIO,
  SHOW_PROGRESSBAR,
  HIDE_PROGRESSBAR,
  NEXT_STEP,
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
    case CHANGE_RADIO:
      return {
        ...state,
        [action.payload.name]: !state[action.payload.name],
      };
    case SHOW_PROGRESSBAR:
      return {
        ...state,
        showProgressBar: true,
      };
    case HIDE_PROGRESSBAR:
      return {
        ...state,
        showProgressBar: false,
      };
    case NEXT_STEP:
      return verifyStateToGo(state);
    default:
      return state;
  }
};

export default secondStepFormReducer;
