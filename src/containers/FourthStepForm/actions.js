import {
  FOURTH_STEP_CHANGE_SELECT,
} from './constants';

export const onChangeSelect = value => ({
  type: FOURTH_STEP_CHANGE_SELECT,
  payload: {
    value,
  },
});
