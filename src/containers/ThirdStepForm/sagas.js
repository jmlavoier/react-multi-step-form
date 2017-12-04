import { takeLatest, call, put } from 'redux-saga/effects';
import { checkIt } from 'api';

import {
  CHECK_TEXT,
  SHOW_ERROR,
  NEXT_STEP,
} from './constants';

function* fetchCheckBox(action) {
  try {
    yield call(checkIt, action.payload.value);
    yield put({ type: NEXT_STEP });
  } catch (e) {
    yield put({ type: SHOW_ERROR, message: e.message });
  }
}

function* thirdStepSaga() {
  yield takeLatest(CHECK_TEXT, fetchCheckBox);
}

export default thirdStepSaga;
