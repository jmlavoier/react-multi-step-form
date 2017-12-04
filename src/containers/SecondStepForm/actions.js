import {
  CHANGE_RADIO,
} from './constants';

export const changeCheckBox = name => ({
  type: CHANGE_RADIO,
  payload: {
    name,
  },
});

