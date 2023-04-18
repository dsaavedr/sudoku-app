import { createSlice } from "@reduxjs/toolkit";
import { DIFFICULTY } from "../constants";
import { IX } from "../utils";

const initialState = {
  cells: [],
  gameStarted: false,
  gameEnded: false,
  difficulty: null,
  selectedCell: null,
  selectedValue: null,
  invalidValues: [],
  completedValues: [],
  startedAt: null,
  endedAt: null,
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    updateCell: (state, action) => {
      const { idx, data } = action.payload;
      const newCells = [...state.cells];
      if (data.value) {
        state.selectedValue = data.value;
      }
      Object.keys(data).forEach((key) => {
        newCells[idx][key] = data[key];
      });
      state.cells = newCells;
    },
    selectCell: (state, action) => {
      const { x, y, value } = action.payload;
      const idx = IX(x, y, 9);
      state.selectedCell = idx;
      state.selectedValue = value;
    },
    setCells: (state, action) => {
      state.cells = action.payload;
    },
    setGameStarted: (state, action) => {
      state.gameStarted = action.payload;
    },
    endGame: (state, action) => {
      state.endedAt = Date.now();
      state.gameEnded = true;
      state.gameStarted = false;
    },
    setDifficulty: (state, action) => {
      state.difficulty = action.payload;
    },
    startNewGame: (state, action) => {
      state.difficulty = action.payload.difficulty;
      state.cells = action.payload.cells || initialState.cells;
      state.gameStarted = true;
      state.gameEnded = false;
      state.invalidValues = [];
      state.completedValues = [];
      state.startedAt = Date.now();

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
      state.cells.map((cell) => {
        if (cell.value) cell.fixed = true;
      });
    },
    setInvalidValues: (state, action) => {
      state.invalidValues = action.payload;
    },
    setCompletedValues: (state, action) => {
      state.completedValues = action.payload;
    },
  },
});

export const {
  updateCell,
  setCells,
  selectCell,
  setGameStarted,
  endGame,
  setDifficulty,
  startNewGame,
  setInvalidValues,
  setCompletedValues,
} = boardSlice.actions;

export default boardSlice.reducer;
