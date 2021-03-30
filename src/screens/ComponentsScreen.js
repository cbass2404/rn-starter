import React from "react";
import { useRef } from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
    const user = {
        fName: "Cory",
        lName: "Bass",
    };

    return (
        <View>
            <Text style={styles.textStyle}>
                Getting started with react native!
            </Text>
            <Text style={styles.subHeaderStyle}>
                My name is {user.fName} {user.lName}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45,
    },
    subHeaderStyle: {
        fontSize: 20,
    },
});

export default ComponentsScreen;
