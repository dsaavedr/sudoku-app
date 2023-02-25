import {StyleSheet, Text, View} from "react-native";
import {MAIN_BACKGROUND_COLOR} from "../constants";

export default function Game() {
  return(
    <View style={styles.container}>
      <Text>Hello from Game!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: MAIN_BACKGROUND_COLOR
  }
});
