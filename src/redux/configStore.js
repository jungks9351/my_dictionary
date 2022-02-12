import { createStore, combineReducers } from 'redux';
import words from './modules/words';

const rootReducer = combineReducers({ words });

const store = createStore(rootReducer);

export default store;
