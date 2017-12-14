import { delay } from 'redux-saga';
import { takeLatest, put, select } from 'redux-saga/effects';

import { COMPOSE_NEXT_STEP } from 'containers/ComposeAllForms/constants';
import {
  FIRST_STEP_CHANGE_CHECKBOX,
  FIRST_STEP_SHOW_PROGRESSBAR,
  FIRST_STEP_HIDE_PROGRESSBAR,
  FIRST_STEP_NEXT_STEP,
} from './constants';


function* fetchCheckBox() {
  yield put({ type: FIRST_STEP_HIDE_PROGRESSBAR });
  yield delay(1);
  yield put({ type: FIRST_STEP_SHOW_PROGRESSBAR });
  yield delay(3000);
  yield put({ type: FIRST_STEP_NEXT_STEP });

  const completed = yield select(({ firstStepForm }) => firstStepForm.completed);

  if (completed) {
    yield put({ type: COMPOSE_NEXT_STEP });
  }
}

const firstStepSaga = [
  takeLatest(FIRST_STEP_CHANGE_CHECKBOX, fetchCheckBox),
];

export default firstStepSaga;
