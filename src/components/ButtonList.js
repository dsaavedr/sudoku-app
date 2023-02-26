import {StyleSheet, View} from "react-native";

export default function ButtonList({children, style, gapHorizontal = 0, gapVertical = 0}) {
  const propStyles = {...style}

  if (gapHorizontal) propStyles.paddingHorizontal = gapHorizontal / -2;
  if (gapVertical) propStyles.paddingVertical = gapVertical / -2;

  return (
    <View style={[styles.container, propStyles]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap"
  },
});
