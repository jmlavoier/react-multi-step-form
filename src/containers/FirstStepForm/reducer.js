import {
  CHANGE_CHECKBOX,
} from './constants';

export const firstStepFormInitialState = {
  a1: false,
  a2: false,
};

const firstStepFormReducer = (state = firstStepFormInitialState, action) => {
  switch (action.type) {
    case CHANGE_CHECKBOX:
      return {
        ...state,
        [action.payload.name]: !state[action.payload.name],
      };
    default:
      return state;
  }
};

export default firstStepFormReducer;
