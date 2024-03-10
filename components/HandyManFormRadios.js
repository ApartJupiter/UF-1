import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, Border, FontSize, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const HandyManFormRadios = ({ propMarginTop, propWidth, propBorderRadius }) => {
  const viewStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  const handymanInfoStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  const checkBoxStyle = useMemo(() => {
    return {
      ...getStyleValue("borderRadius", propBorderRadius),
    };
  }, [propBorderRadius]);

  return (
    <View style={[styles.view, styles.viewFlexBox, viewStyle]}>
      <View
        style={[styles.handymanInfo, styles.viewFlexBox, handymanInfoStyle]}
      >
        <Image
          style={styles.imageIcon}
          contentFit="cover"
          source={require("../assets/image14.png")}
        />
        <View>
          <Text style={[styles.handyman, styles.handymanTypo]}>HandyMan</Text>
          <Text style={[styles.yearOfJoining, styles.handymanTypo]}>
            Year of Joining
          </Text>
        </View>
      </View>
      <View style={[styles.checkbox, checkBoxStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  handymanTypo: {
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  imageIcon: {
    borderRadius: Border.br_141xl,
    width: 45,
    height: 45,
  },
  handyman: {
    fontSize: FontSize.size_sm,
    color: Color.heading,
  },
  yearOfJoining: {
    fontSize: FontSize.size_xs,
    color: Color.body,
    marginTop: 8,
  },
  handymanInfo: {
    width: 139,
  },
  checkbox: {
    borderRadius: Border.br_smi,
    backgroundColor: Color.background,
    borderStyle: "solid",
    borderColor: Color.main,
    borderWidth: 1,
    width: 14,
    height: 14,
  },
  view: {
    alignSelf: "stretch",
  },
});

export default HandyManFormRadios;
