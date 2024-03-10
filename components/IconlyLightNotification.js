import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";

const IconlyLightNotification = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.iconlylightnotification, style]}
      onPress={() => navigation.navigate("Notification1")}
    >
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/iconlylightnotification1.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: "100%",
    height: "100%",
  },
  iconlylightnotification: {
    width: 20,
    height: 20,
  },
});

export default IconlyLightNotification;
