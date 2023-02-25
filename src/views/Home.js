import {StyleSheet, Text, View} from "react-native";
import {Button, Footer} from "../components";

import {PRIMARY_COLOR, SECONDARY_COLOR} from "../constants";

export default function MainMenu({navigation}) {
  const onNewGame = () => {
    // TODO
    alert("Pressed new game btn");
  };

  const onAbout = () => {
    // TODO
    navigation.navigate('About');
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
      <View style={styles.container}>
        <Text style={styles.title}>Sudoku</Text>
        <View style={styles.buttonList}>
          {buttonElements}
        </View>
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
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
