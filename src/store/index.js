import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import firstStepForm from 'containers/FirstStepForm/reducer';

const sagaMiddleware = createSagaMiddleware();

const rootReducers = combineReducers({
  firstStepForm,
});

const store = createStore(
  rootReducers,
  applyMiddleware(sagaMiddleware),
);

export default store;
