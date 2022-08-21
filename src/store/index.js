import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { currencyReducer as currency } from "./currencySlice";

import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const combinedReducer = combineReducers({ currency });
const persistedReducer = persistReducer(persistConfig, combinedReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
