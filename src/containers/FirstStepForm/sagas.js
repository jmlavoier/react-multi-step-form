import { delay } from 'redux-saga';
import { takeLatest, put } from 'redux-saga/effects';

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
}

function* firstStepSaga() {
  yield takeLatest(FIRST_STEP_CHANGE_CHECKBOX, fetchCheckBox);
}

export default firstStepSaga;
