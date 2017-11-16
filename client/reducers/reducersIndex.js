import {combineReducers} from 'redux';
import formOneReducer from './formOneReducer.js';
import formTwoReducer from './formTwoReducer.js';
import formThreeReducer from './formThreeReducer.js';
import grabID from './grabIDReducer.js';

const allReducers = combineReducers({
  formOneData: formOneReducer,
  formTwoData: formTwoReducer,
  formThreeData: formThreeReducer,
  id: grabID
});

export default allReducers;