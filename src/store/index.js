import { combineReducers, createStore } from 'redux';

import firstStepForm from 'containers/FirstStepForm/reducer';

const rootReducers = combineReducers({
  firstStepForm,
});

const store = createStore(rootReducers);

export default store;
