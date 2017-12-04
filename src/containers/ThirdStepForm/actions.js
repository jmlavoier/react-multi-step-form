import {
  THIRD_STEP_CHECK_TEXT,
  THIRD_STEP_CHANGE_INPUT,
} from './constants';

export const checkText = value => ({
  type: THIRD_STEP_CHECK_TEXT,
  payload: {
    value,
  },
});

export const changeInput = value => ({
  type: THIRD_STEP_CHANGE_INPUT,
  payload: {
    value,
  },
});
