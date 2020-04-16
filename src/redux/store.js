import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { fetchCollectionsStart } from './shop/shop.saga';


import rootReducers from './root-reducer';

const sagaMiddleWare = createSagaMiddleware()
const middlewares = [sagaMiddleWare];

if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}

const store = createStore(rootReducers, applyMiddleware(...middlewares));

sagaMiddleWare.run(fetchCollectionsStart)

const persistor = persistStore(store);

export { store, persistor };