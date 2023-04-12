import { useEffect } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Board, ButtonList } from "../components";
import { MAIN_BACKGROUND_COLOR } from "../constants";
import { updateCell } from "../state/boardSlice";

export default function Game({ navigation }) {
  const dispatch = useDispatch();
  const gameStarted = useSelector((state) => state.board.gameStarted);
  const selectedCell = useSelector((state) => state.board.selectedCell);
  const cells = useSelector((state) => state.board.cells);

  const inputBtns = [];

  const onInput = (number) => {
    if (!selectedCell) return;
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
    if (!gameStarted) {
      navigation.navigate("Home");
    }
  });

  for (let i = 1; i < 10; i++) {
    inputBtns.push(
      <Pressable
        key={`input-${i}`}
        onPress={() => {
          onInput(i);
        }}
        style={styles.inputBtnContainer}
      >
        <Text style={styles.inputBtnNumber}>{i}</Text>
      </Pressable>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>New game</Text>
      <Board />
      <ButtonList
        gapHorizontal={40}
        gapVertical={20}
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
    width: 330,
    justifyContent: "center",
    marginTop: 30,
  },
  inputBtnContainer: {
    width: 40,
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
