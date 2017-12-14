import { delay } from 'redux-saga';
import { takeLatest, put, select } from 'redux-saga/effects';

import { COMPOSE_NEXT_STEP } from 'containers/ComposeAllForms/constants';
import {
  FOURTH_STEP_CHANGE_SELECT,
  FOURTH_STEP_SHOW_PROGRESSBAR,
  FOURTH_STEP_HIDE_PROGRESSBAR,
  FOURTH_STEP_NEXT_STEP,
} from './constants';

function* fetchSelectBox() {
  yield put({ type: FOURTH_STEP_HIDE_PROGRESSBAR });
  yield delay(1);
  yield put({ type: FOURTH_STEP_SHOW_PROGRESSBAR });
  yield delay(3000);
  yield put({ type: FOURTH_STEP_NEXT_STEP });

  const completed = yield select(({ fourthStepForm }) => fourthStepForm.completed);

  if (completed) {
    yield put({ type: COMPOSE_NEXT_STEP });
  }
}

const firstStepSaga = [
  takeLatest(FOURTH_STEP_CHANGE_SELECT, fetchSelectBox),
];

export default firstStepSaga;
