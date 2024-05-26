import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import themeSlice from "./slices/themeSlice";

const persistConfig = {
  key: "root",
  storage,
  blacklist: [], // Do not blacklist the theme, include it in persistence
};

const rootReducer = combineReducers({
  theme: themeSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
