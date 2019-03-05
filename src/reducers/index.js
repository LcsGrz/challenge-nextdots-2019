import { combineReducers } from 'redux';
import example from './example';
import cocktailsReducer from './cocktailsReducer';

const rootReducer = combineReducers({
  example,
  cocktails: cocktailsReducer,
});

export default rootReducer;
