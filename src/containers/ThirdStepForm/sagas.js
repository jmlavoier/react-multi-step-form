import { takeLatest, call, put } from 'redux-saga/effects';
import { checkIt } from 'api';

import {
  THIRD_STEP_CHECK_TEXT,
  THIRD_STEP_SHOW_ERROR,
  THIRD_STEP_NEXT_STEP,
} from './constants';

function* fetchCheckBox(action) {
  try {
    yield call(checkIt, action.payload.value);
    yield put({ type: THIRD_STEP_NEXT_STEP });
  } catch (e) {
    yield put({ type: THIRD_STEP_SHOW_ERROR, message: e.message });
  }
}

const thirdStepSaga = [
  takeLatest(THIRD_STEP_CHECK_TEXT, fetchCheckBox),
];

export default thirdStepSaga;
