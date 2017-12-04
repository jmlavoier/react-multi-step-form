import {
  CHANGE_CHECKBOX,
} from './constants';

export const changeCheckBox = name => ({
  type: CHANGE_CHECKBOX,
  payload: {
    name,
  },
});

