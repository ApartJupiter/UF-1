import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { Padding, Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FeaturedServiceContainer = ({
  dimensionCode,
  taskDescription,
  propLeft,
}) => {
  const priceStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  return (
    <View style={styles.service2}>
      <Image
        style={[styles.imageIcon, styles.detailPosition]}
        contentFit="cover"
        source={dimensionCode}
      />
      <View style={[styles.categoryName, styles.priceSpaceBlock]}>
        <Text style={styles.fixing}>Fixing</Text>
      </View>
      <View style={[styles.detail, styles.detailPosition]}>
        <View style={styles.titleAndRating}>
          <View style={styles.ratingFlexBox}>
            <View style={styles.star}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/fill-1.png")}
              />
              <Image
                style={[styles.fill2Icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/fill-1.png")}
              />
              <Image
                style={[styles.fill2Icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/fill-1.png")}
              />
              <Image
                style={[styles.fill2Icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/fill-1.png")}
              />
              <Image
                style={[styles.fill2Icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/fill-1.png")}
              />
            </View>
            <Text style={[styles.text, styles.textSpaceBlock]}>4.3</Text>
          </View>
          <Text style={[styles.paintingForHome, styles.handymanTypo]}>
            {taskDescription}
          </Text>
        </View>
        <View style={[styles.providerName, styles.ratingFlexBox]}>
          <Image
            style={styles.imageIcon1}
            contentFit="cover"
            source={require("../assets/image4.png")}
          />
          <Text style={[styles.handyman, styles.handymanTypo]}>HandyMan</Text>
        </View>
      </View>
      <View style={[styles.price, styles.priceSpaceBlock, priceStyle]}>
        <Text style={[styles.text1, styles.textTypo]}>₹150</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailPosition: {
    left: 0,
    position: "absolute",
    width: 157,
  },
  priceSpaceBlock: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_5xs,
    flexDirection: "row",
    position: "absolute",
  },
  iconLayout: {
    height: 9,
    width: 10,
  },
  textSpaceBlock: {
    marginLeft: 10,
    color: Color.body,
    fontSize: FontSize.size_xs,
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
    fontFamily: FontFamily.workSansRegular,
    textAlign: "left",
  },
  imageIcon: {
    top: 0,
    borderTopLeftRadius: Border.br_xs,
    borderTopRightRadius: Border.br_xs,
    height: 100,
  },
  fixing: {
    fontSize: FontSize.size_3xs,
    letterSpacing: -0.2,
    textTransform: "uppercase",
    fontWeight: "600",
    fontFamily: FontFamily.workSansSemiBold,
    color: Color.main,
    textAlign: "left",
  },
  categoryName: {
    top: 10,
    left: 10,
    borderRadius: Border.br_151xl,
    backgroundColor: Color.white,
  },
  fill2Icon: {
    marginLeft: 4,
  },
  star: {
    borderRadius: Border.br_5xl,
    flexDirection: "row",
  },
  text: {
    fontFamily: FontFamily.workSansRegular,
    textAlign: "left",
  },
  paintingForHome: {
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    color: Color.heading,
    marginTop: 8,
    textTransform: "capitalize",
    alignSelf: "stretch",
  },
  titleAndRating: {
    alignSelf: "stretch",
  },
  imageIcon1: {
    width: 25,
    height: 25,
  },
  handyman: {
    marginLeft: 10,
    color: Color.body,
    fontSize: FontSize.size_xs,
  },
  providerName: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  detail: {
    top: 100,
    borderBottomRightRadius: Border.br_xs,
    borderBottomLeftRadius: Border.br_xs,
    backgroundColor: Color.background,
    paddingLeft: Padding.p_mini,
    paddingTop: Padding.p_xl,
    paddingRight: Padding.p_3xs,
    paddingBottom: Padding.p_xl,
  },
  text1: {
    color: Color.white,
    textTransform: "capitalize",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.workSansRegular,
  },
  price: {
    top: 84,
    left: 99,
    borderRadius: Border.br_6xl,
    backgroundColor: Color.main,
    borderStyle: "solid",
    borderColor: Color.background,
    borderWidth: 2,
  },
  service2: {
    height: 223,
    width: 157,
  },
});

export default FeaturedServiceContainer;
