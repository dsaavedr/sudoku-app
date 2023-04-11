import { StyleSheet, Text, View } from "react-native";
import { BOARD_WIDTH, SECONDARY_COLOR, TERTIARY_COLOR } from "../constants";

export default function Cell({ point }) {
  const { x, y } = point;
  const cellStyles = { ...styles.cell };
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
  return (
    <View style={cellStyles}>
      <Text style={styles.cellValue}>{point.value}</Text>
    </View>
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
