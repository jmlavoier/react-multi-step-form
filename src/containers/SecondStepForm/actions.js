import {
  SECOND_STEP_CHANGE_RADIO,
} from './constants';

export const changeRadio = name => ({
  type: SECOND_STEP_CHANGE_RADIO,
  payload: {
    name,
  },
});

