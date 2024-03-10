import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet } from "react-native";
import { Image } from "expo-image";

const IconlyBoldNotification = ({ style }) => {
  return (
    <Image
      style={[styles.iconlyboldnotification, style]}
      contentFit="cover"
      source={require("../assets/iconlyboldnotification.png")}
    />
  );
};

const styles = StyleSheet.create({
  iconlyboldnotification: {
    width: 20,
    height: 20,
  },
});

export default IconlyBoldNotification;
