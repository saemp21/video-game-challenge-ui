import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
  Persistor,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { baseApi } from "./api";
import { arenaSlice } from "./sliceArena";

const rootReducer = combineReducers({
  [ arenaSlice.name ]: arenaSlice.reducer,
  [ baseApi.reducerPath ]: baseApi.reducer,
});

export const persistedReducer = persistReducer(
  {
    key: "root",
    version: 1,
    storage,
    whitelist: [],
  },
  rootReducer
);
export const store = configureStore({
  reducer: persistedReducer,
  devTools: import.meta.env.VITE_API_DEV_URL !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [ FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER ],
      },
    }).concat(baseApi.middleware),
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
