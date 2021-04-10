import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={[styles.textOneStyle, styles.boxStyle]}>Child #1</Text>
            <Text style={[styles.textTwoStyle, styles.boxStyle]}>Child #2</Text>
            <Text style={[styles.textThreeStyle, styles.boxStyle]}>
                Child #3
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: "black",
        height: 200,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    boxStyle: {
        height: 100,
        width: 100,
        borderWidth: 3,
    },
    textOneStyle: {
        borderColor: "red",
        backgroundColor: "red",
    },
    textTwoStyle: {
        borderColor: "green",
        backgroundColor: "green",
        alignSelf: "flex-end",
    },
    textThreeStyle: {
        borderColor: "purple",
        backgroundColor: "purple",
    },
});

export default BoxScreen;
