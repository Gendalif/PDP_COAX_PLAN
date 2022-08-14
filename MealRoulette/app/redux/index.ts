import {applyMiddleware, combineReducers, StoreEnhancer} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  PersistConfig,
} from 'redux-persist';

import reactotron from '../services/reactotron';
import rootSaga from '../sagas';

// Reducers
import {mealSlice, appSlice} from './slices';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const rootReducer = combineReducers({
  app: appSlice.reducer,
  meal: mealSlice.reducer,
});

const persistConfig: PersistConfig<ReturnType<typeof rootReducer>> = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMonitor = reactotron?.createSagaMonitor!();

const sagaMiddleware = createSagaMiddleware({sagaMonitor});

const enhancers: StoreEnhancer[] = [applyMiddleware(sagaMiddleware)];

if (reactotron) {
  enhancers.push(reactotron?.createEnhancer!());
}

export const store = configureStore({
  reducer: persistedReducer,
  enhancers,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      thunk: false,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

// Unсomment this line to clear the cache
// persistor.purge();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
