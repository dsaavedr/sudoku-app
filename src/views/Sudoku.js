import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Board, Inputs } from "../components";
import { MAIN_BACKGROUND_COLOR } from "../constants";
import { endGame, updateCell } from "../state/boardSlice";

export default function Game({ navigation }) {
  const dispatch = useDispatch();
  const gameStarted = useSelector((state) => state.board.gameStarted);
  const selectedCell = useSelector((state) => state.board.selectedCell);
  const cells = useSelector((state) => state.board.cells);
  const gameEnded = useSelector((state) => state.board.gameEnded);

  const onInput = (number = null) => {
    if (typeof selectedCell !== "number") return;
    const cell = cells[selectedCell];
    if (cell.fixed) return;
    dispatch(
      updateCell({
        idx: selectedCell,
        data: {
          value: number,
        },
      })
    );
  };

  useEffect(() => {
    if (gameStarted) return;
    navigation.navigate("Home");
  });

  useEffect(() => {
    if (!gameEnded) return;
    navigation.navigate("Game Ended");
  }, [gameEnded]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>New game</Text>
      <Board />
      <Inputs onInput={onInput} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: MAIN_BACKGROUND_COLOR,
    paddingTop: 40,
  },
  title: {
    fontSize: 30,
    color: "#fff",
    marginBottom: 50,
  },
});
