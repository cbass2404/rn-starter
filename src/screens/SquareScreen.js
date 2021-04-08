import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [blue, setBlue] = useState(0);
    const [green, setGreen] = useState(0);
    return (
        <View>
            <ColorCounter
                onIncrease={() => setRed(red + 10)}
                onDecrease={() => setRed(red - 10)}
                color="Red"
                value={red}
            />
            <ColorCounter
                onIncrease={() => setBlue(blue + 10)}
                onDecrease={() => setBlue(blue - 10)}
                color="Blue"
                value={blue}
            />
            <ColorCounter
                onIncrease={() => setGreen(green + 10)}
                onDecrease={() => setGreen(green - 10)}
                color="Green"
                value={green}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;
