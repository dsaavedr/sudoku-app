import { Pressable, StyleSheet, Text } from "react-native";
import {
  BOARD_WIDTH,
  SECONDARY_COLOR,
  SECONDARY_COLOR_LIGHT,
} from "../constants";

export default function Cell({ point, onPress, selected, neighbor }) {
  const { x, y } = point;
  const cellStyles = { ...styles.cell };
  const valueStyles = { ...styles.cellValue };
  // Block styles
  if (y % 3 === 0) {
    cellStyles.borderTopColor = "#bbb";
    cellStyles.borderTopWidth = 2;
  }
  if (x % 3 === 0) {
    cellStyles.borderLeftColor = "#bbb";
    cellStyles.borderLeftWidth = 2;
  }
  if (x === 8) {
    cellStyles.borderRightColor = "#bbb";
    cellStyles.borderRightWidth = 2;
  }
  if (y === 8) {
    cellStyles.borderBottomColor = "#bbb";
    cellStyles.borderBottomWidth = 2;
  }
  // Cell styles
  if (x % 3 === 0 || x % 3 === 1) {
    cellStyles.borderRightColor = "#888";
    cellStyles.borderRightWidth = 1;
  }
  if (y % 3 === 0 || y % 3 === 1) {
    cellStyles.borderBottomColor = "#888";
    cellStyles.borderBottomWidth = 1;
  }
  if (selected) {
    cellStyles.backgroundColor = SECONDARY_COLOR;
    valueStyles.color = "#000";
  }
  if (neighbor) {
    cellStyles.backgroundColor = SECONDARY_COLOR_LIGHT;
    valueStyles.color = "#000";
  }
  return (
    <Pressable onPress={onPress} style={cellStyles}>
      <Text style={valueStyles}>{point.value}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cell: {
    alignItems: "center",
    justifyContent: "center",
    width: Math.floor(BOARD_WIDTH / 9),
    height: Math.floor(BOARD_WIDTH / 9),
  },
  cellValue: {
    color: "#fff",
    fontSize: 24,
  },
});
