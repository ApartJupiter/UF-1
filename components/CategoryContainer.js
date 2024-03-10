import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const CategoryContainer = () => {
  return (
    <View style={styles.view}>
      <View style={styles.plumber}>
        <View style={[styles.icon, styles.bg1Layout]}>
          <View style={[styles.bg, styles.bgBorder]} />
          <Image
            style={[styles.icon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon11.png")}
          />
        </View>
        <Text style={[styles.plumber1, styles.plumber1Typo]}>Plumber</Text>
      </View>
      <View style={styles.plumber}>
        <View style={[styles.bg1, styles.bgBorder]} />
        <Text style={[styles.smartHome1, styles.plumber1Typo]}>Smart Home</Text>
        <Image
          style={[styles.icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon12.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bg1Layout: {
    height: 115,
    width: 157,
    left: 0,
    top: 0,
  },
  bgBorder: {
    backgroundColor: Color.colorGhostwhite,
    borderTopRightRadius: Border.br_xs,
    borderTopLeftRadius: Border.br_xs,
    position: "absolute",
    borderWidth: 1.5,
    borderColor: Color.border,
    borderStyle: "solid",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  plumber1Typo: {
    color: Color.heading,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
    top: 135,
    position: "absolute",
  },
  bg: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  icon1: {
    height: "52.17%",
    width: "36.56%",
    top: "23.48%",
    right: "31.59%",
    bottom: "24.35%",
    left: "31.85%",
  },
  icon: {
    position: "absolute",
    width: 157,
    left: 0,
    top: 0,
  },
  plumber1: {
    marginLeft: -34,
    left: "50%",
    textAlign: "center",
  },
  plumber: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.white,
    width: 160,
    height: 177,
    borderWidth: 1.5,
    borderColor: Color.border,
    borderStyle: "solid",
  },
  bg1: {
    height: 115,
    width: 157,
    left: 0,
    top: 0,
  },
  smartHome1: {
    left: 29,
    textAlign: "left",
  },
  icon2: {
    height: "33.9%",
    width: "37.5%",
    top: "15.25%",
    right: "31.88%",
    bottom: "50.85%",
    left: "30.63%",
  },
  view: {
    width: 334,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default CategoryContainer;
