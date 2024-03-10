import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";

const IconlyLightTicket = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.iconlylightticket, style]}
      onPress={() => navigation.navigate("AllBookingListWithStatus")}
    >
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/iconlylightticket.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: "100%",
    height: "100%",
  },
  iconlylightticket: {
    width: 20,
    height: 20,
  },
});

export default IconlyLightTicket;
