import { all } from 'redux-saga/effects';

import firstStepSaga from 'containers/FirstStepForm/sagas';
import secondStepSaga from 'containers/SecondStepForm/sagas';
import thirdStepSaga from 'containers/ThirdStepForm/sagas';
import fourthStepSaga from 'containers/FourthStepForm/sagas';

export default function* rootSaga() {
  yield all([
    ...firstStepSaga,
    ...secondStepSaga,
    ...thirdStepSaga,
    ...fourthStepSaga,
  ]);
}
