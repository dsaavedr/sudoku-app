import {
  endGame,
  setInvalidValues,
  setCompletedValues,
} from "../state/boardSlice";
import { validateBoard } from "../utils";

const validate = (store) => (next) => (action) => {
  const result = next(action);
  if (action.type !== "board/updateCell") return result;
  const cells = store.getState().board.cells;
  const validation = validateBoard(cells);
  if (validation.valid) {
    store.dispatch(endGame());
    return result;
  }
  const { values } = validation;
  const completedValues = new Set();

  // If the board is not invalid, look for completed values and set them in state
  if (values.length === 0) {
    const valuesCount = {};
    cells.forEach((cell) => {
      const { value } = cell;
      if (!value) return;
      if (!valuesCount[value]) {
        valuesCount[value] = 1;
        return;
      }
      valuesCount[value]++;
      if (valuesCount[value] !== 9) return;
      completedValues.add(value);
    });
  }

  store.dispatch(setCompletedValues([...completedValues]));
  store.dispatch(setInvalidValues(values));
  return result;
};

export default validate;
