import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { FontFamily, Border, FontSize, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const HandymanContainer = ({
  dimensionCode,
  handymanDescription,
  joinDate,
  productCode,
  propWidth,
}) => {
  const handymanInfo2Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  return (
    <View style={[styles.view, styles.viewFlexBox]}>
      <View
        style={[styles.handymanInfo, styles.viewFlexBox, handymanInfo2Style]}
      >
        <Image
          style={styles.imageIcon}
          contentFit="cover"
          source={dimensionCode}
        />
        <View>
          <Text style={[styles.handyman, styles.handymanTypo]}>
            {handymanDescription}
          </Text>
          <Text style={[styles.yearOfJoining, styles.handymanTypo]}>
            {joinDate}
          </Text>
        </View>
      </View>
      <Image
        style={styles.checkboxIcon}
        contentFit="cover"
        source={productCode}
      />
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
    width: 141,
  },
  checkboxIcon: {
    width: 14,
    height: 14,
  },
  view: {
    alignSelf: "stretch",
    marginTop: 21,
  },
});

export default HandymanContainer;
