import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";

import { BOARD_WIDTH } from "../constants";
import Cell from "./Cell";

export default function Board() {
  const [cellsElements, setCellsElements] = useState([]);
  const cells = useSelector((state) => state.board.cells);

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
