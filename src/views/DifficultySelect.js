import { StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";

import { DIFFICULTY } from "../constants";
import { Button } from "../components";
import { startNewGame } from "../state/boardSlice";
import { generateInitialState } from "../utils";
import { CommonActions } from "@react-navigation/native";

export default function DifficultySelect({ navigation }) {
  const dispatch = useDispatch();

  const onDifficultySelect = (difficulty) => {
    dispatch(
      startNewGame({
        cells: generateInitialState(),
        difficulty: DIFFICULTY[difficulty],
      })
    );

    // Replace navigation stack so user can't come back to difficulty selection
    const resetAction = CommonActions.reset({
      index: 0,
      routes: [{ name: "Home" }, { name: "Sudoku" }],
    });
    navigation.dispatch(resetAction);
  };

  const buttons = Object.keys(DIFFICULTY).map((key, idx) => {
    return (
      <Button
        onPress={() => {
          onDifficultySelect(key);
        }}
        title={DIFFICULTY[key]}
        key={idx}
      />
    );
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Difficulty</Text>
      <View style={styles.buttonsContainer}>{buttons}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: 40,
  },
});
