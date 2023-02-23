import {StyleSheet, Text, View} from "react-native";
import {Button} from "../components";

import {PRIMARY_COLOR, SECONDARY_COLOR} from "../constants";

export default function MainMenu() {
  const onNewGame = () => {
    // TODO
    alert("Pressed new game btn");
  };

  const onAbout = () => {
    // TODO
    alert("Pressed about btn");
  }

  const onOptions = () => {
    // TODO
    alert("Pressed options btn");
  }

  const buttons = [
    {
      text: 'New Game',
      background: '#444',
      onPress: onNewGame,
      icon: 'play'
    },
    {
      text: 'About',
      background: PRIMARY_COLOR,
      onPress: onAbout,
      icon: 'question'
    },
    {
      text: 'Options',
      background: SECONDARY_COLOR,
      onPress: onOptions,
      icon: 'cog'
    }
  ];

  const buttonElements = buttons.map((item, idx) => <Button
          title={item.text}
          background={item.background}
          onPress={item.onPress}
          style={styles.button}
          key={idx}
          icon={item.icon}
        />);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sudoku</Text>
      <View style={styles.buttonList}>
        {buttonElements}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  buttonList: {
    marginTop: 40
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    textTransform: 'uppercase',
  }
});
