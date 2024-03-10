import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ServiceSummaryContainer = ({
  serviceNumber,
  serviceDescription,
  propBackgroundColor,
  propMarginLeft,
  propWidth,
  propMarginLeft1,
}) => {
  const totalServiceStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor),
      ...getStyleValue("marginLeft", propMarginLeft),
    };
  }, [propBackgroundColor, propMarginLeft]);

  const totalService1Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  const iconStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft1),
    };
  }, [propMarginLeft1]);

  return (
    <View style={[styles.totalService, totalServiceStyle]}>
      <View>
        <Text style={[styles.text, styles.textText]}>{serviceNumber}</Text>
        <Text
          style={[styles.totalService2, styles.textText, totalService1Style]}
        >
          {serviceDescription}
        </Text>
      </View>
      <Image
        style={[styles.icon, iconStyle]}
        contentFit="cover"
        source={require("../assets/icon4.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textText: {
    textAlign: "left",
    textTransform: "capitalize",
  },
  text: {
    fontSize: FontSize.size_3xl,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.workSansSemiBold,
    color: Color.main,
  },
  totalService2: {
    fontSize: FontSize.size_xs,
    fontWeight: "500",
    fontFamily: FontFamily.workSansMedium,
    color: Color.body,
    marginTop: 10,
  },
  icon: {
    width: 35,
    height: 35,
    marginLeft: 17,
  },
  totalService: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: Color.border,
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_xl,
    marginLeft: 20,
  },
});

export default ServiceSummaryContainer;
