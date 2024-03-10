import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ReviewContainer1 = ({
  uniqueId,
  dateLabel,
  propMarginTop,
  propMarginLeft,
  propTop,
  propLeft,
}) => {
  const comment1Style = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  const text1Style = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft),
    };
  }, [propMarginLeft]);

  const decStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  return (
    <View style={[styles.comment1, comment1Style]}>
      <Image style={styles.imageIcon} contentFit="cover" source={uniqueId} />
      <Text style={styles.user}>User</Text>
      <View style={[styles.rating, styles.ratingPosition]}>
        <View style={styles.starParent}>
          <Image
            style={styles.frameLayout}
            contentFit="cover"
            source={require("../assets/star-1.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            contentFit="cover"
            source={require("../assets/star-1.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            contentFit="cover"
            source={require("../assets/star-1.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            contentFit="cover"
            source={require("../assets/star-1.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            contentFit="cover"
            source={require("../assets/star-1.png")}
          />
        </View>
        <Text style={[styles.text, styles.decTypo, text1Style]}>4.5</Text>
      </View>
      <Text style={[styles.dec, styles.decTypo, decStyle]}>{dateLabel}</Text>
      <Text style={[styles.review, styles.decTypo]}>Review...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ratingPosition: {
    left: 66,
    position: "absolute",
  },
  frameLayout: {
    height: 16,
    width: 16,
    borderRadius: Border.br_12xs,
  },
  decTypo: {
    color: Color.body,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  imageIcon: {
    left: 0,
    width: 50,
    height: 50,
    top: 0,
    position: "absolute",
  },
  user: {
    textTransform: "capitalize",
    color: Color.heading,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    left: 66,
    top: 0,
    position: "absolute",
  },
  frameItem: {
    marginLeft: 1,
  },
  starParent: {
    flexDirection: "row",
  },
  text: {
    marginLeft: 4,
    fontSize: FontSize.size_sm,
    color: Color.body,
  },
  rating: {
    top: 24,
    alignItems: "center",
    flexDirection: "row",
  },
  dec: {
    top: 1,
    left: 294,
    fontSize: FontSize.size_xs,
    color: Color.body,
    position: "absolute",
  },
  review: {
    top: 56,
    lineHeight: 20,
    width: 268,
    fontSize: FontSize.size_sm,
    color: Color.body,
    left: 66,
    position: "absolute",
  },
  comment1: {
    alignSelf: "stretch",
    height: 76,
  },
});

export default ReviewContainer1;
