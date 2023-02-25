import {StyleSheet, Text, View} from "react-native";
import {Board} from "../components";
import {MAIN_BACKGROUND_COLOR} from "../constants";

export default function Game() {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>New game</Text>
      <Board />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: MAIN_BACKGROUND_COLOR,
    paddingTop: 40
  },
  title: {
    fontSize: 30,
    color: "#fff",
    marginBottom: 50
  }
});
