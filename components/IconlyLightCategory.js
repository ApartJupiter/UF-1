import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";

const IconlyLightCategory = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.iconlylightcategory, style]}
      onPress={() => navigation.navigate("Category")}
    >
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/iconlylightcategory.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: "100%",
    height: "100%",
  },
  iconlylightcategory: {
    width: 20,
    height: 20,
  },
});

export default IconlyLightCategory;
