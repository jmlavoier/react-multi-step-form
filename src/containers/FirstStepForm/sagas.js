import { delay } from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';

import {
  CHANGE_CHECKBOX,
  SHOW_PROGRESSBAR,
  HIDE_PROGRESSBAR,
} from './constants';

function* fetchCheckBox(action) {
  yield put({ type: HIDE_PROGRESSBAR });
  yield delay(10);
  yield put({ type: SHOW_PROGRESSBAR });
  yield delay(1000);
  yield put({ type: NEXT_STEP });
}

function* firstStepSaga() {
  yield takeEvery(CHANGE_CHECKBOX, fetchCheckBox);
}

export default firstStepSaga;
