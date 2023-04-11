import { FlatList, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";

import { BOARD_WIDTH } from "../constants";
import Cell from "./Cell";

export default function Board() {
    const cells = useSelector(state => state.board.cells);

    return (
        <View style={styles.container}>
            <FlatList
                data={cells}
                renderItem={({ item, index }) => {
                    return <Cell point={item} key={`cell-${index}`} />;
                }}
                numColumns={9}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: BOARD_WIDTH,
        height: BOARD_WIDTH
    }
});
