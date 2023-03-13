import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { BOARD_WIDTH } from "../constants";
import { Point } from "../utils";
import Cell from "./Cell";
import { setCells } from "../state/boardSlice";

export default function Board() {
  const [cellsElements, setCellsElements] = useState([]);
  const cells = useSelector((state) => state.board.cells);
  const dispatch = useDispatch();

  useEffect(() => {
    // Reset state
    setCellsElements([]);

    // Generate set of sample data
    const cellPoints = [];
    for (let x = 0; x < 9; x++) {
      for (let y = 0; y < 9; y++) {
        const point = new Point({
          x,
          y,
          value: Math.random() > 0.7 ? 1 + Math.floor(Math.random() * 9) : null,
        });
        cellPoints.push(point);
      }
    }
    dispatch(setCells(cellPoints));
  }, []);

  useEffect(() => {
    setCellsElements(() => {
      if (!cells) return null;
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
