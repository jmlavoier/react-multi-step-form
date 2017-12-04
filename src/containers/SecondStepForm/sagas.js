import { delay } from 'redux-saga';
import { takeLatest, put } from 'redux-saga/effects';

import {
  CHANGE_RADIO,
  SHOW_PROGRESSBAR,
  HIDE_PROGRESSBAR,
  NEXT_STEP,
} from './constants';

function* fetchRadio() {
  yield put({ type: HIDE_PROGRESSBAR });
  yield delay(1);
  yield put({ type: SHOW_PROGRESSBAR });
  yield delay(3000);
  yield put({ type: NEXT_STEP });
}

function* secondStepSaga() {
  yield takeLatest(CHANGE_RADIO, fetchRadio);
}

export default secondStepSaga;
