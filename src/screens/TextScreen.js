import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
    const [password, setPassword] = useState("");
    return (
        <View>
            <Text style={styles.header}>Enter Password:</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                onChangeText={(newValue) => setPassword(newValue)}
            />
            {password.length <= 5 ? (
                <Text style={styles.error}>
                    Error: Password must be longer than 5 characters
                </Text>
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        paddingLeft: 15,
    },
    input: {
        margin: 15,
        borderColor: "black",
        borderWidth: 1,
    },
    error: {
        color: "red",
        textAlign: "center",
    },
});

export default TextScreen;
