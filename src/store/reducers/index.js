import { combineReducers } from 'redux';
import example from './example';
import cocktails from './cocktails';

const rootReducer = combineReducers({
  example,
  cocktails,
});

export default rootReducer;
