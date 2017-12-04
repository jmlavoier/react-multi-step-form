import {
  CHECK_TEXT,
  CHANGE_INPUT,
} from './constants';

export const checkText = value => ({
  type: CHECK_TEXT,
  payload: {
    value,
  },
});

export const changeInput = value => ({
  type: CHANGE_INPUT,
  payload: {
    value,
  },
});
