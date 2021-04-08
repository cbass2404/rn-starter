import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease, value }) => {
    return (
        <View>
            <Text>
                {color}: {value}
            </Text>
            <Button
                title={`Increase ${color}`}
                onPress={() => onIncrease()}
                disabled={value >= 255}
            />
            <Button
                title={`Decrease ${color}`}
                onPress={() => onDecrease()}
                disabled={value <= 0}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default ColorCounter;
