import 'regenerator-runtime/runtime';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import firstStepForm from 'containers/FirstStepForm/reducer';
import secondStepForm from 'containers/SecondStepForm/reducer';
import thirdStepForm from 'containers/ThirdStepForm/reducer';
import fourthStepForm from 'containers/FourthStepForm/reducer';
import fivethStepForm from 'containers/FivethStepForm/reducer';

import rootSaga from 'sagas';

const sagaMiddleware = createSagaMiddleware();

const rootReducers = combineReducers({
  firstStepForm,
  secondStepForm,
  thirdStepForm,
  fourthStepForm,
  fivethStepForm,
});

const store = createStore(
  rootReducers,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;
