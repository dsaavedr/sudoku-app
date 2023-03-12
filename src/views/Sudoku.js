import { StyleSheet, Text, View } from "react-native";
import { Board, ButtonList } from "../components";
import { MAIN_BACKGROUND_COLOR } from "../constants";

export default function Game() {
  const inputBtns = [];

  for (let i = 1; i < 10; i++) {
    inputBtns.push(
      <View key={`input-${i}`} style={styles.inputBtnContainer}>
        <Text style={styles.inputBtnNumber}>{i}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>New game</Text>
      <Board />
      <ButtonList
        gapHorizontal={30}
        gapVertical={10}
        style={styles.inputBtnList}
      >
        {inputBtns}
      </ButtonList>
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
  inputBtnList: {
    width: 280,
    justifyContent: "center",
    marginTop: 30,
  },
  inputBtnContainer: {
    width: 30,
    height: 45,
    borderRadius: 15,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 15,
    marginVertical: 5,
  },
  inputBtnNumber: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: "bold",
  },
});
