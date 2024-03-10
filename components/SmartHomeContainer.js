import React, { useMemo } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SmartHomeContainer = ({
  dimensionId,
  roomTypeLabel,
  propHeight,
  propBottom,
  propLeft,
  onSalonPress,
}) => {
  const icon1Style = useMemo(() => {
    return {
      ...getStyleValue("height", propHeight),
      ...getStyleValue("bottom", propBottom),
    };
  }, [propHeight, propBottom]);

  const salonStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  return (
    <Pressable style={styles.salon} onPress={onSalonPress}>
      <View style={styles.bg} />
      <Image
        style={[styles.icon, icon1Style]}
        contentFit="cover"
        source={dimensionId}
      />
      <Text style={[styles.salon1, salonStyle]}>{roomTypeLabel}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  bg: {
    top: 0,
    left: 0,
    borderTopLeftRadius: Border.br_xs,
    borderTopRightRadius: Border.br_xs,
    backgroundColor: Color.colorGhostwhite,
    width: 98,
    height: 75,
    position: "absolute",
  },
  icon: {
    height: "36.04%",
    width: "40%",
    top: "15.32%",
    right: "31%",
    bottom: "48.65%",
    left: "29%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  salon1: {
    top: 85,
    left: 33,
    fontSize: FontSize.size_xs,
    textTransform: "capitalize",
    fontWeight: "500",
    fontFamily: FontFamily.workSansMedium,
    color: Color.heading,
    textAlign: "center",
    position: "absolute",
  },
  salon: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: Color.border,
    borderWidth: 1,
    width: 100,
    height: 111,
  },
});

export default SmartHomeContainer;
