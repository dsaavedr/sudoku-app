import { configureStore } from "@reduxjs/toolkit";

import boardReducer from "./boardSlice";

export default configureStore({
  reducer: {
    board: boardReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
