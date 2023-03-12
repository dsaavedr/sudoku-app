import {Children, cloneElement} from "react";
import {StyleSheet, View} from "react-native";

export default function ButtonList({
  children,
  style,
  gapHorizontal = 0,
  gapVertical = 0,
}) {
  const propStyles = {...style};

  if (gapHorizontal) propStyles.paddingHorizontal = gapHorizontal / -2;
  if (gapVertical) propStyles.paddingVertical = gapVertical / -2;

  const processChildren = () => {
    return Children.map(children, (child) => {
      const newStyle = {
        ...child.props.style,
      };

      if (gapHorizontal) newStyle.marginHorizontal = gapHorizontal / 2;
      if (gapVertical) newStyle.marginVertical = gapVertical / 2;

      const newChild = cloneElement(child, {
        style: newStyle,
      });

      return newChild;
    });
  };

  return (
    <View style={[styles.container, propStyles]}>{processChildren()}</View>
  );
}

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
});
