import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const COUNT_INCREMENT = 10;

const reducer = (state, action) => {
    switch (action.type) {
        case "add_number":
            return { ...state, count: state.count + action.payload };
        case "subtract_number":
            return { ...state, count: state.count + action.payload };
        default:
            return state;
    }
};

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <View>
            <Button
                title="Increase"
                onPress={() =>
                    dispatch({ type: "add_number", payload: COUNT_INCREMENT })
                }
            />
            <Button
                title="Decrease"
                onPress={() =>
                    dispatch({
                        type: "subtract_number",
                        payload: COUNT_INCREMENT * -1,
                    })
                }
            />
            <Text>Current Count: {state.count}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreen;
