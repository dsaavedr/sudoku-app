import { createSlice } from "@reduxjs/toolkit";

import { IX, generateInitialState } from "../utils/";

export const boardSlice = createSlice({
  name: "board",
  initialState: {
    cells: generateInitialState(),
  },
  reducers: {
    updateCell: (state, action) => {
      const { cell } = action.payload;
      const idx = IX(cell.x, cell.y, 9);
      state.cells[idx] = cell;
    },
    setCells: (state, action) => {
      state.cells = action.payload;
    },
  },
});

export const { updateCell, setCells } = boardSlice.actions;

export default boardSlice.reducer;
