import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";

const IconlyBoldTicket = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.iconlyboldticket, style]}
      onPress={() => navigation.navigate("OnClickOfBookingServiceS")}
    >
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/iconlyboldticket1.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: "100%",
    height: "100%",
  },
  iconlyboldticket: {
    width: 20,
    height: 20,
  },
});

export default IconlyBoldTicket;
