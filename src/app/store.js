import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'reduxjs-toolkit-persist';
import storageSession from 'reduxjs-toolkit-persist/lib/storage/session';
import autoMergeLevel1 from 'reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel1';
import loginReducer from '../features/loginSlice';
import profileReducer from '../features/profileSlice';

/**
 * A configuration object for the persistReducer function.
 */
const persistConfig = {
  key: 'root',
  storage: storageSession,
  stateReconciler: autoMergeLevel1,
};

/**
 * Combining the reducers into one reducer.
 *
 * @param {object}
 */
const reducers = combineReducers({
  login: loginReducer,
  profile: profileReducer,
});

/**
 * Creating a persisted reducer that will be used to create the store.
 */
const _persistedReducer = persistReducer(persistConfig, reducers);

/**
 * Application store.
 *
 * @redux
 */
export const store = configureStore({
  reducer: _persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
