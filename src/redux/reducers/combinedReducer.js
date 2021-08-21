import { combineReducers } from 'redux';
import { allCases } from './covidReducer';

const rootReducer = combineReducers({ allCases });
export default rootReducer;
