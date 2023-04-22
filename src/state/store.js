import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from "redux-persist";

import boardReducer from "./boardSlice";
import loggerMiddleware from "../middleware/logger";
import validationMiddleware from "../middleware/validate";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  board: boardReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(loggerMiddleware, validationMiddleware),
});

export const persistor = persistStore(store);
export default store;
