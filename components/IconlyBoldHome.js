import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet } from "react-native";
import { Image } from "expo-image";

const IconlyBoldHome = ({ style }) => {
  return (
    <Image
      style={[styles.iconlyboldhome, style]}
      contentFit="cover"
      source={require("../assets/iconlyboldhome.png")}
    />
  );
};

const styles = StyleSheet.create({
  iconlyboldhome: {
    width: 20,
    height: 20,
  },
});

export default IconlyBoldHome;
