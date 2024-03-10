import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";

const CategoryIcon = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.category, style]}
      onPress={() => navigation.navigate("OnClickOfCategory")}
    >
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/category.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: "100%",
    height: "100%",
  },
  category: {
    width: 17,
    height: 17,
  },
});

export default CategoryIcon;
