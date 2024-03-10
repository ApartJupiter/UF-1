import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const PriceContainer = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.price}
      onPress={() => navigation.navigate("ServiceFilter1")}
    >
      <Text style={[styles.price1, styles.textTypo]}>Price</Text>
      <View style={styles.range}>
        <View style={styles.sliderRange}>
          <View style={[styles.range1, styles.range1FlexBox]}>
            <Image
              style={styles.leftThumbIcon}
              contentFit="cover"
              source={require("../assets/leftthumb.png")}
            />
            <Image
              style={styles.leftThumbIcon}
              contentFit="cover"
              source={require("../assets/leftthumb.png")}
            />
          </View>
        </View>
        <View style={[styles.price2, styles.range1FlexBox]}>
          <Text style={[styles.text, styles.textTypo]}>₹1200</Text>
          <Text style={[styles.text, styles.textTypo]}>₹2000</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
  },
  range1FlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  price1: {
    color: Color.heading,
  },
  leftThumbIcon: {
    width: 18,
    height: 18,
  },
  range1: {
    backgroundColor: Color.colorMediumpurple,
    height: 9,
    borderRadius: Border.br_9xs,
  },
  sliderRange: {
    backgroundColor: Color.colorLavender,
    alignItems: "flex-end",
    paddingHorizontal: Padding.p_19xl,
    paddingVertical: 0,
    borderRadius: Border.br_9xs,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  text: {
    color: Color.body,
  },
  price2: {
    marginTop: 20,
  },
  range: {
    marginTop: 30,
    alignItems: "center",
    alignSelf: "stretch",
  },
  price: {
    position: "absolute",
    top: 565,
    left: 21,
    borderRadius: Border.br_xs,
    backgroundColor: Color.background,
    borderStyle: "solid",
    borderColor: Color.border,
    borderWidth: 1,
    width: 335,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_base,
    justifyContent: "center",
  },
});

export default PriceContainer;
