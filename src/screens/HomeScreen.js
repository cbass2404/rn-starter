import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = (props) => {
    return (
        <View>
            <Text style={styles.text}>Hello from Home</Text>
            <Button
                onPress={() => props.navigation.navigate("Components")}
                title="Go to Components Demo"
            />
            <Button
                onPress={() => props.navigation.navigate("List")}
                title="Go to List Demo"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
});

export default HomeScreen;
