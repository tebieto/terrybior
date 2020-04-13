import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducers from './root-reducer';

const middlewares = [];

if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}

const store = createStore(rootReducers, applyMiddleware(...middlewares));

const persistor = persistStore(store);

export { store, persistor };