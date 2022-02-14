import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import words from './modules/words';
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewares = [thunk];
const rootReducer = combineReducers({ words });

const enhancer = applyMiddleware(...middlewares);

const store = createStore(
  rootReducer,
  compose(enhancer, composeWithDevTools()),
);

export default store;
