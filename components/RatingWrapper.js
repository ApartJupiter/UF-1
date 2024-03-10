import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const RatingWrapper = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.rating, styles.bgBorder]}
      onPress={() => navigation.navigate("ServiceFilter1")}
    >
      <Text style={[styles.rating1, styles.textTypo]}>Rating</Text>
      <View style={styles.stars}>
        <View style={[styles.view, styles.starsFlexBox]}>
          <View style={[styles.bg, styles.bgBorder]} />
          <View style={[styles.starsAndNumber, styles.starsFlexBox]}>
            <View style={styles.starParent}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/star-11.png")}
              />
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/star-11.png")}
              />
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/star-11.png")}
              />
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/star-11.png")}
              />
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/star-11.png")}
              />
            </View>
            <Text style={[styles.text, styles.textTypo]}>5.0</Text>
          </View>
        </View>
        <View style={[styles.view1, styles.viewFlexBox]}>
          <View style={[styles.bg, styles.bgBorder]} />
          <View style={[styles.starsAndNumber1, styles.starsFlexBox]}>
            <View style={styles.starParent}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/star-11.png")}
              />
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/star-11.png")}
              />
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/star-11.png")}
              />
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/star-11.png")}
              />
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/star-5.png")}
              />
            </View>
            <Text style={[styles.text, styles.textTypo]}>4.0</Text>
          </View>
        </View>
        <View style={[styles.view2, styles.viewFlexBox]}>
          <View style={[styles.bg, styles.bgBorder]} />
          <View style={[styles.starsAndNumber, styles.starsFlexBox]}>
            <View style={styles.starParent}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/star-11.png")}
              />
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/star-11.png")}
              />
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/star-11.png")}
              />
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/star-5.png")}
              />
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/star-5.png")}
              />
            </View>
            <Text style={[styles.text, styles.textTypo]}>3.0</Text>
          </View>
        </View>
        <View style={[styles.view2, styles.viewFlexBox]}>
          <View style={[styles.bg, styles.bgBorder]} />
          <View style={[styles.starsAndNumber3, styles.starsFlexBox]}>
            <View style={styles.starParent}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/star-11.png")}
              />
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/star-11.png")}
              />
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/star-5.png")}
              />
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/star-5.png")}
              />
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/star-5.png")}
              />
            </View>
            <Text style={[styles.text, styles.textTypo]}>2.0</Text>
          </View>
        </View>
        <View style={[styles.view2, styles.viewFlexBox]}>
          <View style={[styles.bg, styles.bgBorder]} />
          <View style={[styles.starsAndNumber, styles.starsFlexBox]}>
            <View style={styles.starParent}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/star-11.png")}
              />
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/star-5.png")}
              />
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/star-5.png")}
              />
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/star-5.png")}
              />
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/star-5.png")}
              />
            </View>
            <Text style={[styles.text, styles.textTypo]}>1.0</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  bgBorder: {
    borderWidth: 1,
    borderColor: Color.border,
    borderStyle: "solid",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  starsFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  viewFlexBox: {
    marginTop: 16,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  rating1: {
    fontSize: FontSize.size_base,
    textTransform: "capitalize",
    color: Color.heading,
  },
  bg: {
    borderRadius: Border.br_10xs,
    width: 14,
    height: 14,
  },
  frameChild: {
    borderRadius: Border.br_12xs,
    width: 17,
    height: 17,
  },
  starParent: {
    flexDirection: "row",
  },
  text: {
    fontSize: FontSize.size_sm,
    color: Color.body,
  },
  starsAndNumber: {
    width: 263,
  },
  view: {
    alignSelf: "stretch",
  },
  starsAndNumber1: {
    width: 260,
  },
  view1: {
    width: 277,
  },
  view2: {
    alignSelf: "stretch",
  },
  starsAndNumber3: {
    width: 264,
  },
  stars: {
    paddingTop: Padding.p_5xs,
    marginTop: 10,
    alignSelf: "stretch",
  },
  rating: {
    position: "absolute",
    top: 316,
    left: 21,
    borderRadius: Border.br_xs,
    backgroundColor: Color.background,
    width: 335,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_base,
  },
});

export default RatingWrapper;
