import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { Padding, FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ServiceContainer1 = ({
  deviceDescription,
  serviceDescription,
  issueDescription,
  propMarginTop,
}) => {
  const serviceStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  return (
    <View style={[styles.service, serviceStyle]}>
      <Image
        style={styles.imageIcon}
        contentFit="cover"
        source={deviceDescription}
      />
      <View style={[styles.categoryName, styles.priceSpaceBlock]}>
        <Text style={[styles.install, styles.textTypo]}>
          {serviceDescription}
        </Text>
      </View>
      <View style={styles.detail}>
        <View>
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
            <Text style={[styles.text, styles.textClr]}>4.3</Text>
          </View>
          <Text
            style={[styles.uninstallationAndFlickering, styles.wadeWarrenTypo]}
          >
            {issueDescription}
          </Text>
        </View>
        <View style={[styles.providerName, styles.ratingFlexBox]}>
          <Image
            style={styles.imageIcon1}
            contentFit="cover"
            source={require("../assets/image7.png")}
          />
          <Text style={[styles.wadeWarren, styles.wadeWarrenTypo]}>
            HandyMan
          </Text>
        </View>
      </View>
      <View style={[styles.price, styles.priceSpaceBlock]}>
        <Text style={[styles.text1, styles.text1Typo]}>₹150</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  priceSpaceBlock: {
    paddingVertical: Padding.p_8xs,
    flexDirection: "row",
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.workSansSemiBold,
    fontWeight: "600",
  },
  iconLayout: {
    height: 11,
    width: 12,
  },
  textClr: {
    color: Color.body,
    fontSize: FontSize.size_sm,
  },
  wadeWarrenTypo: {
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  ratingFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  text1Typo: {
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
  },
  imageIcon: {
    height: "49.08%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "50.92%",
    left: "0%",
    borderTopLeftRadius: Border.br_xs,
    borderTopRightRadius: Border.br_xs,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  install: {
    fontSize: FontSize.size_xs,
    letterSpacing: -0.2,
    textTransform: "uppercase",
    color: Color.main,
  },
  categoryName: {
    marginTop: -147,
    top: "50%",
    left: 14,
    borderRadius: Border.br_151xl,
    backgroundColor: Color.white,
    paddingHorizontal: Padding.p_3xs,
    display: "none",
  },
  fill2Icon: {
    marginLeft: 6,
  },
  star: {
    borderRadius: Border.br_5xl,
    flexDirection: "row",
  },
  text: {
    marginLeft: 10,
    textAlign: "left",
    fontFamily: FontFamily.workSansSemiBold,
    fontWeight: "600",
  },
  uninstallationAndFlickering: {
    lineHeight: 20,
    color: Color.heading,
    width: 310,
    marginTop: 14,
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
  },
  imageIcon1: {
    width: 30,
    height: 30,
  },
  wadeWarren: {
    marginLeft: 15,
    color: Color.body,
    fontSize: FontSize.size_sm,
  },
  providerName: {
    marginTop: 18,
  },
  detail: {
    height: "50.92%",
    width: "89.33%",
    top: "49.08%",
    right: "5.33%",
    bottom: "0%",
    left: "5.33%",
    borderBottomRightRadius: Border.br_xs,
    borderBottomLeftRadius: Border.br_xs,
    backgroundColor: Color.background,
    paddingLeft: Padding.p_base,
    paddingTop: Padding.p_5xl,
    paddingRight: Padding.p_4xs,
    paddingBottom: Padding.p_5xl,
    position: "absolute",
  },
  text1: {
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.workSansSemiBold,
    fontWeight: "600",
  },
  price: {
    height: "10.74%",
    width: "17.6%",
    top: "43.56%",
    right: "6.27%",
    bottom: "45.71%",
    left: "76.13%",
    borderRadius: Border.br_6xl,
    backgroundColor: Color.main,
    borderStyle: "solid",
    borderColor: Color.background,
    borderWidth: 3,
    paddingHorizontal: Padding.p_xs,
  },
  service: {
    alignSelf: "stretch",
    height: 326,
  },
});

export default ServiceContainer1;
