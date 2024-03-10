import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Default = ({
  buttonText,
  property1DefaultPosition,
  property1DefaultBackgroundColor,
  property1DefaultAlignSelf,
  property1DefaultTop,
  property1DefaultLeft,
  property1DefaultWidth,
  property1DefaultBorderRadius,
  property1DefaultHeight,
  property1DefaultMarginTop,
  buttonTextFontWeight,
  buttonTextFontFamily,
  buttonTextTextTransform,
  buttonTextTextAlign,
  buttonTextFlex,
  buttonTextFontSize,
  onLoginBtnPress,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      ...getStyleValue("position", property1DefaultPosition),
      ...getStyleValue("backgroundColor", property1DefaultBackgroundColor),
      ...getStyleValue("alignSelf", property1DefaultAlignSelf),
      ...getStyleValue("top", property1DefaultTop),
      ...getStyleValue("left", property1DefaultLeft),
      ...getStyleValue("width", property1DefaultWidth),
      ...getStyleValue("borderRadius", property1DefaultBorderRadius),
      ...getStyleValue("height", property1DefaultHeight),
      ...getStyleValue("marginTop", property1DefaultMarginTop),
    };
  }, [
    property1DefaultPosition,
    property1DefaultBackgroundColor,
    property1DefaultAlignSelf,
    property1DefaultTop,
    property1DefaultLeft,
    property1DefaultWidth,
    property1DefaultBorderRadius,
    property1DefaultHeight,
    property1DefaultMarginTop,
  ]);

  const buttonTextStyle = useMemo(() => {
    return {
      ...getStyleValue("fontWeight", buttonTextFontWeight),
      ...getStyleValue("fontFamily", buttonTextFontFamily),
      ...getStyleValue("textTransform", buttonTextTextTransform),
      ...getStyleValue("textAlign", buttonTextTextAlign),
      ...getStyleValue("flex", buttonTextFlex),
      ...getStyleValue("fontSize", buttonTextFontSize),
    };
  }, [
    buttonTextFontWeight,
    buttonTextFontFamily,
    buttonTextTextTransform,
    buttonTextTextAlign,
    buttonTextFlex,
    buttonTextFontSize,
  ]);

  return (
    <View
      style={[styles.property1default, property1DefaultStyle]}
      onPress={onLoginBtnPress}
    >
      <Text style={[styles.buttonText, buttonTextStyle]}>{buttonText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.workSansMedium,
    color: Color.white,
    textAlign: "left",
  },
  property1default: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.main,
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_smi,
    alignSelf: "stretch",
  },
});

export default Property1Default;
