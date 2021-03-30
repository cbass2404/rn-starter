import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = (props) => {
    const { title } = props;
    return (
        <View>
            <Image source={require("../../assets/forest.jpg")} />
            <Text>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageDetail;
