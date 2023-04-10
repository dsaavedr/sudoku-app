import { createSlice } from "@reduxjs/toolkit";
import { DIFFICULTY } from "../constants";

import { IX, generateInitialState } from "../utils/";

const initialState = {
  cells: [],
  gameStarted: false,
  difficulty: null,
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    updateCell: (state, action) => {
      const { cell } = action.payload;
      const idx = IX(cell.x, cell.y, 9);
      state.cells[idx] = cell;
    },
    setCells: (state, action) => {
      state.cells = action.payload;
    },
    setGameStarted: (state, action) => {
      state.gameStarted = action.payload;
    },
    setDifficulty: (state, action) => {
      state.difficulty = action.payload;
    },
    startNewGame: (state, action) => {
      state.difficulty = action.payload.difficulty;
      state.cells = action.payload.cells || initialState.cells;

      let numberOfClues;
      switch (state.difficulty) {
        case DIFFICULTY.EASY:
          numberOfClues = 36;
          break;
        case DIFFICULTY.MEDIUM:
          numberOfClues = 32;
          break;
        case DIFFICULTY.HARD:
          numberOfClues = 28;
          break;
        case DIFFICULTY.EXTREME:
          numberOfClues = 24;
          break;
        default:
          break;
      }

      let removed = 0;
      while (removed < 81 - numberOfClues) {
        const idx = Math.floor(Math.random() * state.cells.length);
        const cell = state.cells[idx];
        if (cell.value) {
          cell.value = undefined;
          removed++;
        }
      }
      state.gameStarted = true;
    },
  },
});

export const {
  updateCell,
  setCells,
  setGameStarted,
  setDifficulty,
  startNewGame,
} = boardSlice.actions;

export default boardSlice.reducer;
