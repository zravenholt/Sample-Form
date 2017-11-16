import {combineReducers} from 'redux';
import formOneReducer from './formOneReducer.js';
import formTwoReducer from './formTwoReducer.js';
import formThreeReducer from './formThreeReducer.js';

const allReducers = combineReducers({
  formOneData: formOneReducer,
  formTwoData: formTwoReducer,
  formThreeData: formThreeReducer
});

export default allReducers;