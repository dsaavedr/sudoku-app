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
  const selectedValue = useSelector((state) => state.board.selectedValue);
  const invalidValues = useSelector((state) => state.board.invalidValues);
  const completedValues = useSelector((state) => state.board.completedValues);
  const [selectedNeighbors, setSelectedNeighbors] = useState([]);

  useEffect(() => {
    if (typeof selectedCell !== "number" || !cells[selectedCell]) return;
    setSelectedNeighbors(
      cells[selectedCell].neighbors.map((arr) => IX(...arr, 9))
    );
  }, [selectedCell]);

  const onSelectCell = (cell) => {
    dispatch(selectCell(cell));
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
          const isSelectedValue = !selected && item.value === selectedValue;
          return (
            <Cell
              onPress={() => {
                onSelectCell(item);
              }}
              selected={selected}
              selectedValue={isSelectedValue}
              completed={completedValues?.includes(item.value)}
              valid={!invalidValues?.includes(item.value)}
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
