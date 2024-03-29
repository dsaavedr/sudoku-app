import { FontAwesome5 } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { PRIMARY_COLOR, SUCCESS_LIGHT } from "../constants";

import ButtonList from "./ButtonList";

export default function Inputs({ onInput }) {
  const completedValues = useSelector((state) => state.board.completedValues);

  const getInputButtons = () => {
    const inputBtns = [];
    for (let i = 1; i < 10; i++) {
      const pressableStyles = { ...styles.inputBtnContainer };
      if (completedValues.includes(i)) {
        pressableStyles.backgroundColor = SUCCESS_LIGHT;
      }
      inputBtns.push(
        <Pressable
          key={`input-${i}`}
          onPress={() => {
            onInput(i);
          }}
          style={{ ...pressableStyles }}
        >
          <Text style={styles.inputBtnNumber}>{i}</Text>
        </Pressable>
      );
    }
    inputBtns.push(
      <Pressable
        key={`input-${10}`}
        onPress={() => {
          onInput();
        }}
        style={styles.inputBtnContainer}
      >
        <FontAwesome5 size={24} name="eraser" />
      </Pressable>
    );
    return inputBtns;
  };

  return (
    <View>
      <ButtonList
        gapHorizontal={40}
        gapVertical={20}
        style={styles.inputBtnList}
      >
        {getInputButtons()}
      </ButtonList>
    </View>
  );
}

const styles = StyleSheet.create({
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
