import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';
import reducers from './reducers/index';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
