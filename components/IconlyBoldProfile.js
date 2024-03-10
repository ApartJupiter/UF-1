import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet } from "react-native";
import { Image } from "expo-image";

const IconlyBoldProfile = ({ style }) => {
  return (
    <Image
      style={[styles.iconlyboldprofile, style]}
      contentFit="cover"
      source={require("../assets/iconlyboldprofile.png")}
    />
  );
};

const styles = StyleSheet.create({
  iconlyboldprofile: {
    width: 20,
    height: 20,
  },
});

export default IconlyBoldProfile;
