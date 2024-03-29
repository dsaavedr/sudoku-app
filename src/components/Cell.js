import { Pressable, StyleSheet, Text } from "react-native";
import {
  BOARD_WIDTH,
  SECONDARY_COLOR,
  SECONDARY_COLOR_LIGHT,
  TERTIARY_COLOR_LIGHT,
} from "../constants";

const borderLight = "#ddd";
const borderDark = "#888";
const errorColor = "#f00";

export default function Cell({
  point,
  onPress,
  selected,
  selectedValue,
  neighbor,
  valid,
}) {
  const { x, y } = point;
  const cellStyles = { ...styles.cell };
  const valueStyles = { ...styles.cellValue };
  // Block styles
  if (y % 3 === 0) {
    cellStyles.borderTopColor = borderLight;
    cellStyles.borderTopWidth = 2;
  }
  if (x % 3 === 0) {
    cellStyles.borderLeftColor = borderLight;
    cellStyles.borderLeftWidth = 2;
  }
  if (x === 8) {
    cellStyles.borderRightColor = borderLight;
    cellStyles.borderRightWidth = 2;
  }
  if (y === 8) {
    cellStyles.borderBottomColor = borderLight;
    cellStyles.borderBottomWidth = 2;
  }
  // Cell styles
  if (x % 3 === 0 || x % 3 === 1) {
    cellStyles.borderRightColor = borderDark;
    cellStyles.borderRightWidth = 1;
  }
  if (y % 3 === 0 || y % 3 === 1) {
    cellStyles.borderBottomColor = borderDark;
    cellStyles.borderBottomWidth = 1;
  }
  if (selected) {
    cellStyles.backgroundColor = borderDark;
  }
  if (selectedValue && point.value) {
    cellStyles.backgroundColor = borderDark;
  }
  if (neighbor) {
    cellStyles.backgroundColor = "#333";
  }
  if (point.fixed) {
    valueStyles.color = TERTIARY_COLOR_LIGHT;
  }
  if (!valid) {
    valueStyles.color = errorColor;
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
