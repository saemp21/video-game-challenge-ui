import type {
  ThunkAction,
  Action
} from '@reduxjs/toolkit';
import {
  configureStore,
  combineReducers,
} from '@reduxjs/toolkit';
import type {
  Persistor
} from 'redux-persist';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import storageSession from 'redux-persist/lib/storage/session';
import { api } from './api';
// import { encryptTransform } from 'redux-persist-transform-encrypt';

const rootReducer = combineReducers({
  [ api.reducerPath ]: api.reducer,
});

export const persistedReducer = persistReducer(
  {
    // transforms: [
    // 	encryptTransform({
    // 		secretKey: 'my-super-secret-key',
    // 		onError: function (error) {
    // 			console.log('error', error);
    // 		},
    // 	}),
    // ],
    key: 'persistApp',
    version: 1,
    storage,
    // whitelist: ['auth'], //Elementos que pueden ser guardados en el localstorage
  },
  rootReducer,
);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [ FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER ],
      },
    }).concat(api.middleware),
});

export const persistor: Persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
