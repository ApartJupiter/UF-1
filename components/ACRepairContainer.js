import React, { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ACRepairContainer = ({
  serviceId,
  serviceType,
  propHeight,
  propBottom,
  propLeft,
}) => {
  const icon2Style = useMemo(() => {
    return {
      ...getStyleValue("height", propHeight),
      ...getStyleValue("bottom", propBottom),
    };
  }, [propHeight, propBottom]);

  const aCRepairStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  return (
    <View style={[styles.carpenter, styles.bgBorder]}>
      <View style={styles.bgPosition}>
        <View style={[styles.bg, styles.bgPosition]} />
        <Image
          style={[styles.icon1, icon2Style]}
          contentFit="cover"
          source={serviceId}
        />
      </View>
      <Text style={[styles.acRepair, aCRepairStyle]}>{serviceType}</Text>
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
    height: "52.26%",
    width: "38.22%",
    top: "23.48%",
    right: "30.57%",
    bottom: "24.26%",
    left: "31.21%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  acRepair: {
    top: 135,
    left: 40,
    fontSize: FontSize.size_base,
    textTransform: "capitalize",
    fontWeight: "500",
    fontFamily: FontFamily.workSansMedium,
    color: Color.heading,
    textAlign: "left",
    position: "absolute",
  },
  carpenter: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.white,
    width: 160,
    height: 177,
  },
});

export default ACRepairContainer;
