import { delay } from 'redux-saga';
import { takeLatest, put, select } from 'redux-saga/effects';

import { COMPOSE_NEXT_STEP } from 'containers/ComposeAllForms/constants';
import {
  SECOND_STEP_CHANGE_RADIO,
  SECOND_STEP_SHOW_PROGRESSBAR,
  SECOND_STEP_HIDE_PROGRESSBAR,
  SECOND_STEP_NEXT_STEP,
} from './constants';

function* fetchRadio() {
  yield put({ type: SECOND_STEP_HIDE_PROGRESSBAR });
  yield delay(1);
  yield put({ type: SECOND_STEP_SHOW_PROGRESSBAR });
  yield delay(3000);
  yield put({ type: SECOND_STEP_NEXT_STEP });

  const completed = yield select(({ secondStepForm }) => secondStepForm.completed);

  if (completed) {
    yield put({ type: COMPOSE_NEXT_STEP });
  }
}

const secondStepSaga = [
  takeLatest(SECOND_STEP_CHANGE_RADIO, fetchRadio),
];

export default secondStepSaga;
