import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import loginReducer from '../features/login/loginSlice';
import profileReducer from '../features/profile/profileSlice';

import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'reduxjs-toolkit-persist';
import storageSession from 'reduxjs-toolkit-persist/lib/storage/session';
import autoMergeLevel1 from 'reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel1';

const persistConfig = {
  key: 'root',
  storage: storageSession,
  stateReconciler: autoMergeLevel1,
};

const reducers = combineReducers({
  login: loginReducer,
  profile: profileReducer,
});

const _persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: _persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});
