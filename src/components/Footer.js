import { Linking, StyleSheet } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import ButtonList from "./ButtonList";
import { REPO_URL } from "../constants";

export default function Footer() {
  const iconSize = 30;
  const iconColor = "#fff";

  return (
    <ButtonList gapHorizontal={20} position="absolute">
      <Feather
        name="github"
        size={iconSize}
        color={iconColor}
        style={styles.icon}
        onPress={() => Linking.openURL(REPO_URL)}
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
        onPress={() => Linking.openURL(REPO_URL + "/issues")}
      />
    </ButtonList>
  );
}

const styles = StyleSheet.create({
  icon: {
    textAlign: "center",
  },
});
