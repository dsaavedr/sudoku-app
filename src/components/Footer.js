import {StyleSheet, View} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import ButtonList from "./ButtonList";

export default function Footer() {
  const iconSize = 30;
  const iconColor = "#fff";

  return (
    <ButtonList position="absolute"> 
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
    </ButtonList>
  );
}

const styles = StyleSheet.create({
  icon: {
    textAlign: "center"
  }
});
