import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = (props) => {
    const { imageTitle, imageSource, imageScore } = props;
    return (
        <View>
            <Image source={imageSource} />
            <Text>{imageTitle}</Text>
            <Text>Rating {imageScore}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageDetail;
