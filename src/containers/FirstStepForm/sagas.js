import { delay } from 'redux-saga';
import { takeLatest, put } from 'redux-saga/effects';

import {
  CHANGE_CHECKBOX,
  SHOW_PROGRESSBAR,
  HIDE_PROGRESSBAR,
  NEXT_STEP,
} from './constants';

function* fetchCheckBox() {
  yield put({ type: HIDE_PROGRESSBAR });
  yield delay(1);
  yield put({ type: SHOW_PROGRESSBAR });
  yield delay(3000);
  yield put({ type: NEXT_STEP });
}

function* firstStepSaga() {
  yield takeLatest(CHANGE_CHECKBOX, fetchCheckBox);
}

export default firstStepSaga;
