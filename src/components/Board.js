import { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { BOARD_WIDTH } from "../constants";
import { selectCell } from "../state/boardSlice";
import { IX } from "../utils";
import Cell from "./Cell";

export default function Board() {
  const dispatch = useDispatch();
  const cells = useSelector((state) => state.board.cells);
  const selectedCell = useSelector((state) => state.board.selectedCell);
  const [selectedNeighbors, setSelectedNeighbors] = useState([]);

  useEffect(() => {
    if (!selectedCell || !cells[selectedCell]) return;
    setSelectedNeighbors(
      cells[selectedCell].neighbors.map((arr) => IX(arr[0], arr[1], 9))
    );
    console.log(selectedNeighbors);
  }, [selectedCell]);

  const onSelectCell = (cell) => {
    dispatch(
      selectCell({
        x: cell.x,
        y: cell.y,
      })
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cells}
        renderItem={({ item, index }) => {
          let selected = false;
          if (index === selectedCell) {
            selected = true;
          }
          return (
            <Cell
              onPress={() => {
                onSelectCell(item);
              }}
              selected={selected}
              neighbor={selectedNeighbors.includes(index)}
              point={item}
              key={`cell-${index}`}
            />
          );
        }}
        numColumns={9}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: BOARD_WIDTH,
    height: BOARD_WIDTH,
  },
});
