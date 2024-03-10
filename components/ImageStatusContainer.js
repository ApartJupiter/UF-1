import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ImageStatusContainer = ({
  dimensionId,
  statusLabel,
  propBackgroundColor,
  propFontWeight,
  propFontFamily,
}) => {
  const statusStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor),
    };
  }, [propBackgroundColor]);

  const pendingStyle = useMemo(() => {
    return {
      ...getStyleValue("fontWeight", propFontWeight),
      ...getStyleValue("fontFamily", propFontFamily),
    };
  }, [propFontWeight, propFontFamily]);

  return (
    <View style={styles.imageLayout}>
      <Image
        style={[styles.imageIcon, styles.imageLayout]}
        contentFit="cover"
        source={dimensionId}
      />
      <View style={[styles.status, statusStyle]}>
        <Text style={[styles.pending, pendingStyle]}>{statusLabel}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageLayout: {
    height: 130,
    width: 303,
  },
  imageIcon: {
    top: 0,
    left: 0,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  pending: {
    fontSize: FontSize.size_xs,
    textTransform: "capitalize",
    fontWeight: "500",
    fontFamily: FontFamily.workSansMedium,
    color: Color.white,
    textAlign: "left",
  },
  status: {
    top: 10,
    left: 10,
    borderRadius: Border.br_151xl,
    backgroundColor: Color.colorCrimson,
    flexDirection: "row",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_7xs,
    position: "absolute",
  },
});

export default ImageStatusContainer;
