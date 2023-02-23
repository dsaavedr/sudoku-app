import {Pressable, StyleSheet, Text, View} from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

import {PRIMARY_COLOR} from "../constants";

export default function Button({title, background, onPress, icon}) {
  background = background || PRIMARY_COLOR;
  
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={[styles.button, {backgroundColor: background}]} onPress={onPress}>
        {
          icon
          ? <View style={styles.iconWrapper}>
              <FontAwesome
                name={icon}
                size={18}
                color="#fff"
                style={styles.buttonIcon}
              />
            </View>
          : null
        }
        <Text style={styles.buttonTitle}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    overflow: "hidden"
  },
  buttonTitle: {
    color: "#fff",
    fontSize: 20,
    textTransform: "uppercase",
    textAlign: "center"
  },
  buttonIcon: {
    textAlign: "center",
  },
  iconWrapper: {
    width: 60,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    marginRight: 20
  }
});
