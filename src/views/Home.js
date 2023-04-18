import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Button, Footer } from "../components";

import {
  LIGHT_BACKGROUND_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  TERTIARY_COLOR,
} from "../constants";

export default function MainMenu({ navigation }) {
  // const dispatch = useDispatch();
  const gameStarted = useSelector((state) => state.board.gameStarted);

  const onNewGame = () => {
    navigation.navigate("Difficulty");
  };

  const onAbout = () => {
    // TODO
    navigation.navigate("About");
  };

  const onOptions = () => {
    // TODO
    alert("Pressed options btn");
  };

  const onContinueGame = () => {
    // TODO
    navigation.navigate("Sudoku");
  };

  const createButtonElements = () => {
    const buttons = [
      {
        text: "New Game",
        background: gameStarted ? TERTIARY_COLOR : SECONDARY_COLOR,
        onPress: onNewGame,
        icon: gameStarted ? "repeat" : "play",
      },
      {
        text: "About",
        background: PRIMARY_COLOR,
        onPress: onAbout,
        icon: "question",
      },
      {
        text: "Options",
        background: LIGHT_BACKGROUND_COLOR,
        onPress: onOptions,
        icon: "cog",
      },
    ];

    if (gameStarted) {
      buttons.unshift({
        text: "Continue Game",
        background: SECONDARY_COLOR,
        onPress: onContinueGame,
        icon: "play",
      });
    }

    return buttons.map((item, idx) => (
      <Button
        title={item.text}
        background={item.background}
        onPress={item.onPress}
        style={styles.button}
        key={idx}
        icon={item.icon}
      />
    ));
  };
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Sudoku</Text>
        <View style={styles.buttonList}>{createButtonElements()}</View>
      </View>
      <Footer />
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
  buttonList: {
    marginTop: 40,
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    textTransform: "uppercase",
  },
});
