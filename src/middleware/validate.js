import { setInvalidValues } from "../state/boardSlice";
import { validateBoard } from "../utils";

const validate = (store) => (next) => (action) => {
  const result = next(action);
  if (action.type !== "board/updateCell") return result;
  const cells = store.getState().board.cells;
  const validation = validateBoard(cells);
  console.group("validation");
  console.log(validation);
  console.groupEnd();
  if (validation.valid) {
    // TODO: game finished
    return result;
  }
  const { values } = validation;
  store.dispatch(setInvalidValues(values));
  return result;
};

export default validate;
