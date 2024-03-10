import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Padding, FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ServiceContainer = ({ employeeName, propWidth, propMarginLeft }) => {
  const detailStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  const handyManStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft),
    };
  }, [propMarginLeft]);

  return (
    <View style={styles.service1}>
      <Image
        style={[styles.imageIcon, styles.detailPosition]}
        contentFit="cover"
        source={require("../assets/image6.png")}
      />
      <View style={[styles.categoryName, styles.priceSpaceBlock]}>
        <Text style={[styles.painting, styles.textTypo1]}>painting</Text>
      </View>
      <View style={[styles.detail, styles.detailPosition, detailStyle]}>
        <View style={styles.titleAndRating}>
          <View style={styles.ratingFlexBox}>
            <View style={styles.star}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/fill-11.png")}
              />
              <Image
                style={[styles.fill2Icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/fill-11.png")}
              />
              <Image
                style={[styles.fill2Icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/fill-11.png")}
              />
              <Image
                style={[styles.fill2Icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/fill-11.png")}
              />
              <Image
                style={[styles.fill2Icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/fill-11.png")}
              />
            </View>
            <Text style={[styles.text, styles.textSpaceBlock]}>4.3</Text>
          </View>
          <Text
            style={[styles.paintingForBeautiful, styles.handymanTypo]}
          >{`Painting for beautiful 
Homes...`}</Text>
        </View>
        <View style={[styles.providerName, styles.ratingFlexBox]}>
          <Image
            style={styles.imageIcon1}
            contentFit="cover"
            source={require("../assets/image7.png")}
          />
          <Text style={[styles.handyman, styles.handymanTypo, handyManStyle]}>
            {employeeName}
          </Text>
        </View>
      </View>
      <View style={[styles.price, styles.priceSpaceBlock]}>
        <Text style={[styles.text1, styles.textTypo]}>$ 120</Text>
        <Text style={[styles.text2, styles.textTypo]}>₹150</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailPosition: {
    left: 0,
    position: "absolute",
    width: 280,
  },
  priceSpaceBlock: {
    paddingVertical: Padding.p_8xs,
    flexDirection: "row",
    position: "absolute",
  },
  textTypo1: {
    textAlign: "left",
    fontFamily: FontFamily.workSansSemiBold,
    fontWeight: "600",
  },
  iconLayout: {
    height: 11,
    width: 12,
  },
  textSpaceBlock: {
    marginLeft: 10,
    color: Color.body,
    fontSize: FontSize.size_sm,
  },
  handymanTypo: {
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  ratingFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo: {
    color: Color.white,
    textTransform: "capitalize",
    textAlign: "left",
    fontWeight: "600",
  },
  imageIcon: {
    top: 0,
    borderTopLeftRadius: Border.br_xs,
    borderTopRightRadius: Border.br_xs,
    height: 145,
  },
  painting: {
    fontSize: FontSize.size_3xs,
    letterSpacing: -0.2,
    textTransform: "uppercase",
    color: Color.main,
  },
  categoryName: {
    top: 16,
    left: 14,
    borderRadius: Border.br_151xl,
    paddingHorizontal: Padding.p_3xs,
    backgroundColor: Color.white,
  },
  fill2Icon: {
    marginLeft: 6,
  },
  star: {
    borderRadius: Border.br_5xl,
    flexDirection: "row",
  },
  text: {
    textAlign: "left",
    fontFamily: FontFamily.workSansSemiBold,
    fontWeight: "600",
  },
  paintingForBeautiful: {
    lineHeight: 20,
    color: Color.heading,
    marginTop: 14,
    textTransform: "capitalize",
    fontWeight: "500",
    fontSize: FontSize.size_base,
    alignSelf: "stretch",
  },
  titleAndRating: {
    alignSelf: "stretch",
  },
  imageIcon1: {
    width: 30,
    height: 30,
  },
  handyman: {
    marginLeft: 10,
    color: Color.body,
    fontSize: FontSize.size_sm,
  },
  providerName: {
    marginTop: 18,
    alignSelf: "stretch",
  },
  detail: {
    top: 145,
    borderBottomRightRadius: Border.br_xs,
    borderBottomLeftRadius: Border.br_xs,
    paddingLeft: Padding.p_base,
    paddingTop: Padding.p_5xl,
    paddingRight: Padding.p_4xs,
    paddingBottom: Padding.p_5xl,
    backgroundColor: Color.white,
  },
  text1: {
    textDecoration: "line-through",
    fontFamily: FontFamily.interSemiBold,
    display: "none",
    color: Color.white,
    fontSize: FontSize.size_sm,
  },
  text2: {
    fontSize: FontSize.size_base,
    color: Color.white,
    marginLeft: 10,
    fontFamily: FontFamily.workSansSemiBold,
  },
  price: {
    top: 128,
    left: 200,
    borderRadius: Border.br_6xl,
    backgroundColor: Color.main,
    borderStyle: "solid",
    borderColor: Color.white,
    borderWidth: 3,
    paddingHorizontal: Padding.p_xs,
  },
  service1: {
    height: 311,
    width: 280,
  },
});

export default ServiceContainer;
