import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { BOARD_WIDTH } from "../constants";
import { Point } from "../utils";
import Box from "./Box";

export default function Board() {
  const [boxes, setBoxes] = useState([]);
  const [boxesElements, setBoxesElements] = useState([]);

  useEffect(() => {
    // Reset state
    setBoxes([]);
    setBoxesElements([]);

    // Generate set of sample data
    for (let bx = 0; bx < 3; bx++) {
      for (let by = 0; by < 3; by++) {
        // This outer double-loop creates the box
        const boxPoints = [];
        for (let x = 0; x < 3; x++) {
          for (let y = 0; y < 3; y++) {
            // This inner double-loop creates the cell points for each box
            boxPoints.push(
              new Point({
                x,
                y,
                value: 1 + Math.floor(Math.random() * 9),
              })
            );
          }
        }
        // Push box array to state
        setBoxes((current) => [...current, boxPoints]);
      }
    }
  }, []);

  useEffect(() => {
    setBoxesElements(() => {
      return boxes.map((item, idx) => <Box data={item} key={`box-${idx}`} />);
    });
  }, [boxes]);

  return <View style={styles.container}>{boxesElements}</View>;
}

const styles = StyleSheet.create({
  container: {
    width: BOARD_WIDTH,
    height: BOARD_WIDTH,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
