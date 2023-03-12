import { createSlice } from "@reduxjs/toolkit";

import IX from "../utils/index";

export const boardSlice = createSlice({
  name: "board",
  initialState: {
    cells: [],
  },
  reducers: {
    update: (state, action) => {
      const { x, y, cell } = action.payload;
      const idx = IX(x, y, 9);
      state.cells[idx] = cell;
    },
  },
});

export const { update } = boardSlice.actions;

export default boardSlice.reducer;
