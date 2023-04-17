import { configureStore } from "@reduxjs/toolkit";

import boardReducer from "./boardSlice";
import loggerMiddleware from "../middleware/logger";
import validationMiddleware from "../middleware/validate";

export default configureStore({
  reducer: {
    board: boardReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(loggerMiddleware, validationMiddleware),
});
