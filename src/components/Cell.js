import { StyleSheet, Text, View } from "react-native";
import { SECONDARY_COLOR } from "../constants";

export default function Cell({ point }) {
  return (
    <View style={styles.cell}>
      <Text style={styles.cellValue}>{point.value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cell: {
    borderColor: SECONDARY_COLOR,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    width: `${(1 / 9) * 100}%`,
    height: `${(1 / 9) * 100}%`,
  },
  cellValue: {
    color: "#fff",
    fontSize: 24,
  },
});
