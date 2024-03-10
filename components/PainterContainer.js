import React, { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const PainterContainer = ({ dimensionCode, serviceTypeCode, propLeft }) => {
  const painterStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  return (
    <View style={[styles.painter, styles.bgBorder]}>
      <View style={styles.bgPosition}>
        <View style={[styles.bg, styles.bgPosition]} />
        <Image style={styles.icon1} contentFit="cover" source={dimensionCode} />
      </View>
      <Text style={[styles.painter1, painterStyle]}>{serviceTypeCode}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bgBorder: {
    borderWidth: 1.5,
    borderColor: Color.border,
    borderStyle: "solid",
  },
  bgPosition: {
    height: 115,
    width: 157,
    left: 0,
    top: 0,
    position: "absolute",
  },
  bg: {
    borderTopLeftRadius: Border.br_xs,
    borderTopRightRadius: Border.br_xs,
    backgroundColor: Color.colorGhostwhite,
    borderWidth: 1.5,
    borderColor: Color.border,
    borderStyle: "solid",
  },
  icon1: {
    height: "52.17%",
    width: "33.31%",
    top: "23.48%",
    right: "33.57%",
    bottom: "24.35%",
    left: "33.12%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  painter1: {
    top: 135,
    left: 50,
    fontSize: FontSize.size_base,
    textTransform: "capitalize",
    fontWeight: "500",
    fontFamily: FontFamily.workSansMedium,
    color: Color.heading,
    textAlign: "left",
    position: "absolute",
  },
  painter: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.white,
    width: 160,
    height: 177,
  },
});

export default PainterContainer;
