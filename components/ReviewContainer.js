import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Border, Color, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ReviewContainer = ({
  datePosted,
  userFeedbackText,
  feedbackMessage,
  propPaddingRight,
  propMarginTop,
  propWidth,
}) => {
  const comment2Style = useMemo(() => {
    return {
      ...getStyleValue("paddingRight", propPaddingRight),
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propPaddingRight, propMarginTop]);

  const frameStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  return (
    <View style={[styles.comment2, comment2Style]}>
      <View style={[styles.frame, frameStyle]}>
        <Image
          style={[styles.imageIcon, styles.frame1Position]}
          contentFit="cover"
          source={require("../assets/image1.png")}
        />
        <Text style={styles.jan}>{datePosted}</Text>
        <View style={[styles.frame1, styles.frame1Position]}>
          <Text style={[styles.user2, styles.textTypo]}>
            {userFeedbackText}
          </Text>
          <View style={styles.rating}>
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
            <Text style={[styles.text, styles.textTypo]}>4.5</Text>
          </View>
        </View>
      </View>
      <Text style={[styles.greatService, styles.textTypo]}>
        {feedbackMessage}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  frame1Position: {
    top: 0,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  frameLayout: {
    height: 16,
    width: 16,
    borderRadius: Border.br_12xs,
  },
  imageIcon: {
    left: 0,
    width: 50,
    height: 50,
  },
  jan: {
    left: 293,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    color: Color.body,
    top: 0,
    position: "absolute",
  },
  user2: {
    textTransform: "capitalize",
    color: Color.heading,
  },
  frameItem: {
    marginLeft: 1,
  },
  starParent: {
    flexDirection: "row",
  },
  text: {
    marginLeft: 8,
    color: Color.body,
    fontSize: FontSize.size_sm,
  },
  rating: {
    alignItems: "center",
    marginTop: 8,
    flexDirection: "row",
  },
  frame1: {
    left: 66,
    width: 113,
    height: 40,
    overflow: "hidden",
  },
  frame: {
    width: 332,
    overflow: "hidden",
    height: 50,
  },
  greatService: {
    lineHeight: 20,
    width: 268,
    marginTop: 6,
    color: Color.body,
    fontSize: FontSize.size_sm,
  },
  comment2: {
    width: 334,
    height: 76,
    alignItems: "flex-end",
    paddingRight: Padding.p_11xs,
  },
});

export default ReviewContainer;
