import {
  FIRST_STEP_CHANGE_CHECKBOX,
  FIRST_STEP_SHOW_PROGRESSBAR,
  FIRST_STEP_HIDE_PROGRESSBAR,
  FIRST_STEP_NEXT_STEP,
} from './constants';

export const firstStepFormInitialState = {
  a1: false,
  a2: false,
  showProgressBar: false,
  completed: false,
};

const verifyStateToGo = (state) => {
  if (state.a1 || state.a2) {
    console.log('Vai!');
    return {
      ...state,
      completed: true,
      showProgressBar: false,
    };
  }
  
  console.log('Fica!');
  return {
    ...state,
    showProgressBar: false,
  };
};

const firstStepFormReducer = (state = firstStepFormInitialState, action) => {
  switch (action.type) {
    case FIRST_STEP_CHANGE_CHECKBOX:
      return {
        ...state,
        [action.payload.name]: !state[action.payload.name],
      };
    case FIRST_STEP_SHOW_PROGRESSBAR:
      return {
        ...state,
        showProgressBar: true,
      };
    case FIRST_STEP_HIDE_PROGRESSBAR:
      return {
        ...state,
        showProgressBar: false,
      };
    case FIRST_STEP_NEXT_STEP:
      console.log(FIRST_STEP_NEXT_STEP, state);
      return verifyStateToGo(state);
    default:
      return state;
  }
};

export default firstStepFormReducer;
