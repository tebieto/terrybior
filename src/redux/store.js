import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducers from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReducers, applyMiddleware(...middlewares));

export default store;