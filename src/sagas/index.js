import { all } from 'redux-saga/effects';

import firstStepSaga from 'containers/FirstStepForm/sagas';
import secondStepSaga from 'containers/SecondStepForm/sagas';

export default function* rootSaga() {
  yield all([
    ...firstStepSaga,
    ...secondStepSaga,
  ]);
}
