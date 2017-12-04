import {
  FIRST_STEP_CHANGE_CHECKBOX,
} from './constants';

export const changeCheckBox = name => ({
  type: FIRST_STEP_CHANGE_CHECKBOX,
  payload: {
    name,
  },
});
