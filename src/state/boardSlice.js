import { createSlice } from "@reduxjs/toolkit";
import { DIFFICULTY } from "../constants";
import { IX } from "../utils";

const initialState = {
  cells: [],
  gameStarted: false,
  difficulty: null,
  selectedCell: null,
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    updateCell: (state, action) => {
      const { idx, data } = action.payload;
      Object.keys(data).forEach((key) => {
        state.cells[idx] = data[key];
      });
    },
    selectCell: (state, action) => {
      const { x, y } = action.payload;
      const idx = IX(x, y, 9);
      state.selectedCell = idx;
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
  selectCell,
  setGameStarted,
  setDifficulty,
  startNewGame,
} = boardSlice.actions;

export default boardSlice.reducer;
