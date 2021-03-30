import React from "react";
import { useRef } from "react";
import { Text, StyleSheet, View } from "react-native";

const user = {
    fName: "Cory",
    lName: "Bass",
};

const ComponentsScreen = () => {
    const introduction = (
        <Text style={styles.subHeader}>My name is {user.fName}</Text>
    );

    return (
        <View>
            <Text style={styles.textStyle}>
                Getting started with react native!
            </Text>
            {introduction}
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45,
    },
    subHeader: {
        fontSize: 20,
    },
});

export default ComponentsScreen;
