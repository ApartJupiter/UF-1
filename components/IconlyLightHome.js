import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";

const IconlyLightHome = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.iconlylighthome, style]}
      onPress={() => navigation.navigate("ServiceManDashboard")}
    >
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/iconlylighthome.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: "100%",
    height: "100%",
  },
  iconlylighthome: {
    width: 20,
    height: 20,
  },
});

export default IconlyLightHome;
