import { delay } from 'redux-saga';
import { takeLatest, put, call, select } from 'redux-saga/effects';
import { submitIt } from 'api';

import { COMPOSE_FORM_UPDATE, COMPOSE_NEXT_STEP } from 'containers/ComposeAllForms/constants';
import {
  FIVETH_STEP_SUBMIT_FORM,
  FIVETH_STEP_SHOW_PROGRESSBAR,
  FIVETH_STEP_HIDE_PROGRESSBAR,
  FIVETH_STEP_NEXT_STEP,
  FIVETH_STEP_SHOW_MESSAGE,
} from './constants';


function* fetchSubmitForm(action) {
  yield put({ type: FIVETH_STEP_SHOW_PROGRESSBAR });
  delay(1);
  try {
    yield call(submitIt, action.payload);
    yield put({ type: COMPOSE_FORM_UPDATE, payload: action.payload });
    delay(200);
    yield put({ type: FIVETH_STEP_NEXT_STEP });
    yield put({ type: FIVETH_STEP_HIDE_PROGRESSBAR });

    const completed = yield select(({ fourthStepForm }) => fourthStepForm.completed);

    if (completed) {
      yield put({ type: COMPOSE_NEXT_STEP });
    }
  } catch (e) {
    yield put({ type: FIVETH_STEP_SHOW_MESSAGE, message: e.message });
    yield put({ type: FIVETH_STEP_HIDE_PROGRESSBAR });
  }
}

const fivethStepSaga = [
  takeLatest(FIVETH_STEP_SUBMIT_FORM, fetchSubmitForm),
];

export default fivethStepSaga;
