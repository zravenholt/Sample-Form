import {combineReducers} from 'redux';
import formOneReducer from './formOneReducer.js';
import formTwoReducer from './formTwoReducer.js';

const allReducers = combineReducers({
  formOneData: formOneReducer,
  formTwoData: formTwoReducer
});

export default allReducers;