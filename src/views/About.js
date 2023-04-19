import { View, Text, StyleSheet, Linking } from "react-native";
import { PORTFOLIO_URL } from "../constants";

export default function About() {
  const onLinkPress = () => {
    Linking.openURL(PORTFOLIO_URL);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hi There!</Text>
      <View style={styles.bodyContainer}>
        <Text style={styles.body}>
          Thank you for downloading the game. This app aims to offer Sudoku,
          free to play and free of adds, and that will remain my goal for as
          long as it exists.
        </Text>
        <Text style={styles.body}>
          I hope that this will become a community-driven effort, which is why
          all the code is open source, and contributions will always be welcome.
          You'll find a link to the repo in the app's homepage, as well as a
          direct link for reporting any bugs or suggesting new features. The
          third icon is for donations, which are completely optional and highly
          appreciated, and will go towards supporting the continuous development
          and maintenance of the game.
        </Text>
        <Text style={[styles.body, { textAlign: "right" }]}>Enjoy!</Text>
        <Text style={[styles.body, { textAlign: "right" }]}>
          Made with ♥ by{" "}
          <Text onPress={onLinkPress} style={styles.link}>
            Daniel Saavedra
          </Text>
        </Text>
      </View>
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
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: 20,
  },
  body: {
    color: "#fff",
    textAlign: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  bodyContainer: {},
  link: {
    color: "#aaf",
  },
});
