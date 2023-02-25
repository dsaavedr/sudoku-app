import {StyleSheet, View} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";

export default function Footer() {
  const iconSize = 30;
  const iconColor = "#fff";

  return (
    <View style={styles.container}>
      <Feather
        name="github"
        size={iconSize}
        color={iconColor}
        style={styles.icon}
      />
      <Feather
        name="coffee"
        size={iconSize}
        color={iconColor}
        style={styles.icon}
      />
      <Ionicons
        name="bug-outline"
        size={iconSize}
        color={iconColor}
        style={styles.icon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: 320,
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    textAlign: "center"
  }
});
