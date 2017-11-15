import {combineReducers} from 'redux';
import formOneReducer from './formOneReducer.js';

const allReducers = combineReducers({
  formOneData: formOneReducer
});

export default allReducers;