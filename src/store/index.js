import 'regenerator-runtime/runtime';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import firstStepForm from 'containers/FirstStepForm/reducer';
import secondStepForm from 'containers/SecondStepForm/reducer';
import firstStepSaga from 'containers/FirstStepForm/sagas';

const sagaMiddleware = createSagaMiddleware();

const rootReducers = combineReducers({
  firstStepForm,
  secondStepForm,
});

const store = createStore(
  rootReducers,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(firstStepSaga);

export default store;
