import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const RateUsFormContainer = () => {
  return (
    <View style={styles.generalSetting}>
      <View style={styles.general}>
        <Text style={styles.general1}>General</Text>
      </View>
      <View style={styles.list}>
        <View style={styles.darkMode}>
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon19.png")}
          />
          <View style={styles.switch}>
            <Image
              style={styles.circleIcon}
              contentFit="cover"
              source={require("../assets/circle.png")}
            />
          </View>
          <Text style={[styles.darkMode1, styles.darkMode1Typo]}>
            Dark Mode
          </Text>
        </View>
        <View style={styles.changePassword}>
          <Image
            style={[styles.iconlylightlock, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/iconlylightlock1.png")}
          />
          <Image
            style={[styles.stroke1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/stroke-1.png")}
          />
          <Text style={[styles.changePassword1, styles.darkMode1Typo]}>
            Change Password
          </Text>
        </View>
        <View style={styles.changePassword}>
          <Image
            style={[styles.iconlylightlock, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon20.png")}
          />
          <Image
            style={[styles.stroke1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/stroke-1.png")}
          />
          <Text style={[styles.changePassword1, styles.darkMode1Typo]}>
            App Language
          </Text>
        </View>
        <View style={styles.changePassword}>
          <Image
            style={[styles.iconlylightlock, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/iconlylightheart.png")}
          />
          <Image
            style={[styles.stroke1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/stroke-1.png")}
          />
          <Text style={[styles.changePassword1, styles.darkMode1Typo]}>
            Favourite Service
          </Text>
        </View>
        <View style={styles.changePassword}>
          <Image
            style={[styles.iconlylightlock, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/iconlylightstar.png")}
          />
          <Image
            style={[styles.stroke1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/stroke-1.png")}
          />
          <Text style={[styles.changePassword1, styles.darkMode1Typo]}>
            Rate Us
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  darkMode1Typo: {
    color: Color.heading,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    left: 26,
    textAlign: "left",
    position: "absolute",
  },
  general1: {
    fontSize: FontSize.size_xs,
    textTransform: "uppercase",
    fontWeight: "600",
    fontFamily: FontFamily.workSansSemiBold,
    color: Color.main,
    textAlign: "left",
  },
  general: {
    backgroundColor: Color.background,
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_xs,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  icon: {
    height: "84.21%",
    top: "10.53%",
    bottom: "5.26%",
    left: "0%",
    right: "95.21%",
    width: "4.79%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  circleIcon: {
    width: 16,
    height: 16,
  },
  switch: {
    left: 299,
    borderRadius: Border.br_129xl_5,
    backgroundColor: Color.main,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingLeft: Padding.p_lg,
    paddingTop: 2,
    paddingRight: 2,
    paddingBottom: 2,
    top: 0,
    flexDirection: "row",
    position: "absolute",
  },
  darkMode1: {
    top: 2,
  },
  darkMode: {
    height: 19,
    alignSelf: "stretch",
  },
  iconlylightlock: {
    height: "100%",
    top: "0%",
    bottom: "0%",
    left: "0%",
    right: "95.21%",
    width: "4.79%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  stroke1Icon: {
    height: "56.25%",
    width: "1.35%",
    top: "18.75%",
    right: "0%",
    bottom: "25%",
    left: "98.65%",
  },
  changePassword1: {
    top: 0,
  },
  changePassword: {
    marginTop: 24,
    height: 16,
    alignSelf: "stretch",
  },
  list: {
    paddingLeft: Padding.p_xl,
    marginTop: 16,
    alignSelf: "stretch",
  },
  generalSetting: {
    top: 330,
    left: 0,
    width: 354,
    position: "absolute",
  },
});

export default RateUsFormContainer;
