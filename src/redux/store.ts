import { compose, applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
import reducer from './reducers';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const persistConfig = {
  key: 'root',
  blacklist: ['common', 'viewer', 'events'],
  storage: AsyncStorage,
};

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, thunk];

let composeEnhancers = compose;
if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middlewares)),
);

export const persistor = persistStore(store);

//////////////////////////////////////////////////////////////

// uncomment this to manually reset persist
// persistor.purge();

