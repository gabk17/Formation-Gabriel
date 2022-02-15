import counterReducer from "./CounterReducer";
import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';

const allReducers = combineReducers({ 
  counter: counterReducer,
  form: formReducer,
});

export default allReducers
