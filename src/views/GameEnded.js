import { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../components";
import { setGameStarted } from "../state/boardSlice";
import { parseTime } from "../utils";

export default function GameEnded({ navigation }) {
  const dispatch = useDispatch();
  const difficulty = useSelector((state) => state.board.difficulty);
  const elapsed = useSelector((state) => state.board.elapsed);

  useEffect(() => {
    dispatch(setGameStarted(false));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Congratulations! 🥳</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.info}>Difficulty: {difficulty}</Text>
        <Text style={styles.info}>Time: {parseTime(elapsed)}</Text>
      </View>
      <Button
        title={"Back to main menu"}
        icon={"home"}
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: 60,
  },
  infoContainer: {
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 50,
    paddingTop: 20,
    paddingBottom: 0,
    alignItems: "center",
    marginBottom: 80,
  },
  info: {
    fontSize: 20,
    marginBottom: 20,
    color: "#fff",
  },
});
