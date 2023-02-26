import {StyleSheet, Text, View} from "react-native";
import {SECONDARY_COLOR} from "../constants";

export default function Box({data}) {
  // Will expect an array of Points to be passed, with x and y values (absolute or constrained?) and a number value which can be undefined or null.
  const cells = data.map((item, idx) => (
    <View style={styles.cell} key={`cell-${idx}`}>
      <Text style={styles.cellValue}>{item.value}</Text>
    </View>
  ));

  return(
    <View style={styles.container}>
      {cells}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "33%",
    height: "33%",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  cell: {
    borderColor: SECONDARY_COLOR,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    width: "33%",
    height: "33%",
  },
  cellValue: {
    color: "#fff",
    fontSize: 24
  }
});
