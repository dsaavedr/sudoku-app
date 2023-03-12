import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { BOARD_WIDTH } from "../constants";
import { Point } from "../utils";
import Cell from "./Cell";

export default function Board() {
  const [cells, setCells] = useState([]);
  const [cellsElements, setCellsElements] = useState([]);

  useEffect(() => {
    // Reset state
    setCells([]);
    setCellsElements([]);

    // Generate set of sample data
    const cellPoints = [];
    for (let x = 0; x < 9; x++) {
      for (let y = 0; y < 9; y++) {
        cellPoints.push(
          new Point({
            x,
            y,
            value: 1 + Math.floor(Math.random() * 9),
          })
        );
        // Push box array to state
      }
    }
    setCells((current) => [...current, ...cellPoints]);
  }, []);

  useEffect(() => {
    setCellsElements(() => {
      return cells.map((item, idx) => (
        <Cell point={item} key={`cell-${idx}`} />
      ));
    });
  }, [cells]);

  return <View style={styles.container}>{cellsElements}</View>;
}

const styles = StyleSheet.create({
  container: {
    width: BOARD_WIDTH,
    height: BOARD_WIDTH,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
