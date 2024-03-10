import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";

const IconlyLightProfile = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.iconlylightprofile, style]}
      onPress={() => navigation.navigate("Profile")}
    >
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/iconlylightprofile2.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: "100%",
    height: "100%",
  },
  iconlylightprofile: {
    width: 20,
    height: 20,
  },
});

export default IconlyLightProfile;
