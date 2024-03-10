import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const CounterContainer = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.counters}
      onPress={() =>
        navigation.navigate("BottomTabsRoot", { screen: "ServiceManDashboard" })
      }
    >
      <View style={styles.serviceDelivered}>
        <Text style={styles.text}>259+</Text>
        <Text style={styles.serviceDelivered1}>{`Service 
Delivered`}</Text>
      </View>
      <View style={styles.line} />
      <View style={styles.serviceDelivered}>
        <Text style={styles.text}>05 +</Text>
        <Text style={styles.serviceDelivered1}>{`Years of
Experience`}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.size_3xl,
    fontWeight: "600",
    fontFamily: FontFamily.workSansSemiBold,
    color: Color.main,
    textAlign: "left",
  },
  serviceDelivered1: {
    fontSize: FontSize.size_xs,
    fontWeight: "500",
    fontFamily: FontFamily.workSansMedium,
    color: Color.body,
    textAlign: "center",
    marginTop: 8,
  },
  serviceDelivered: {
    alignItems: "center",
  },
  line: {
    backgroundColor: Color.border,
    width: 1,
    height: 30,
  },
  counters: {
    position: "absolute",
    top: 302,
    left: 38,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.background,
    width: 311,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_21xl,
    paddingVertical: Padding.p_5xl,
    alignItems: "center",
  },
});

export default CounterContainer;
