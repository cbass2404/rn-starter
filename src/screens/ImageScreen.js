import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail
                imageTitle="Forest"
                imageSource={require("../../assets/forest.jpg")}
                imageScore="9"
            />
            <ImageDetail
                imageTitle="Beach"
                imageSource={require("../../assets/beach.jpg")}
                imageScore="10"
            />
            <ImageDetail
                imageTitle="Mountain"
                imageSource={require("../../assets/mountain.jpg")}
                imageScore="7"
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageScreen;
