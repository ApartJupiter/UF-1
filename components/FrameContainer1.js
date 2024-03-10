import * as React from "react";
import { Text, StyleSheet, View, ImageBackground } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const FrameContainer1 = () => {
  return (
    <View style={[styles.frame, styles.frameFlexBox]}>
      <View style={styles.navigation}>
        <View style={styles.time}>
          <Text style={styles.text}>9:41</Text>
        </View>
        <View style={[styles.symbols, styles.frameFlexBox]}>
          <Image
            style={styles.wiFiIcon}
            contentFit="cover"
            source={require("../assets/wifi4.png")}
          />
          <Image
            style={styles.batteryIcon}
            contentFit="cover"
            source={require("../assets/battery2.png")}
          />
        </View>
      </View>
      <LinearGradient
        style={styles.imageAndNotification}
        locations={[0, 1]}
        colors={["#000", "rgba(0, 0, 0, 0)"]}
      >
        <ImageBackground
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/imageandnotification.png")}
        >
          <View style={styles.notification}>
            <Image
              style={styles.iconlylightnotification}
              contentFit="cover"
              source={require("../assets/iconlylightnotification.png")}
            />
          </View>
          <View style={styles.pagination}>
            <Image
              style={styles.icon1}
              contentFit="cover"
              source={require("../assets/11.png")}
            />
            <Image
              style={[styles.icon2, styles.lineSpaceBlock]}
              contentFit="cover"
              source={require("../assets/11.png")}
            />
            <View style={[styles.line, styles.lineSpaceBlock]} />
            <Image
              style={[styles.icon2, styles.lineSpaceBlock]}
              contentFit="cover"
              source={require("../assets/11.png")}
            />
          </View>
        </ImageBackground>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    overflow: "hidden",
    alignItems: "center",
  },
  lineSpaceBlock: {
    marginLeft: 6,
    height: 5,
  },
  text: {
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.sFProDisplay,
    color: Color.white,
    textAlign: "left",
  },
  time: {
    width: 27,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  wiFiIcon: {
    width: 15,
    height: 11,
  },
  batteryIcon: {
    width: 25,
    marginLeft: 9,
    height: 12,
  },
  symbols: {
    width: 51,
    paddingLeft: 1,
    paddingRight: Padding.p_12xs_5,
    height: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  navigation: {
    backgroundColor: Color.colorCornflowerblue,
    height: 31,
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  iconlylightnotification: {
    width: 16,
    height: 16,
  },
  notification: {
    top: 20,
    left: 319,
    borderRadius: Border.br_16xl,
    padding: Padding.p_3xs,
    backgroundColor: Color.white,
    flexDirection: "row",
    position: "absolute",
  },
  icon1: {
    height: 5,
    width: 5,
  },
  icon2: {
    width: 5,
    marginLeft: 6,
  },
  line: {
    borderRadius: Border.br_lg,
    width: 18,
    backgroundColor: Color.white,
  },
  pagination: {
    top: 204,
    left: 162,
    flexDirection: "row",
    position: "absolute",
  },
  icon: {
    height: "100%",
    backgroundColor: "transparent",
    alignSelf: "stretch",
  },
  imageAndNotification: {
    height: 250,
  },
  frame: {
    top: 0,
    left: 0,
    width: 375,
    height: 283,
    paddingBottom: Padding.p_6xl,
    alignItems: "center",
    position: "absolute",
  },
});

export default FrameContainer1;
