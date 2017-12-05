import {
  COMPOSE_FORM_UPDATE,
} from './constants';

export const updateForm = (field, value) => ({
  type: COMPOSE_FORM_UPDATE,
  payload: {
    field,
    value,
  },
});
