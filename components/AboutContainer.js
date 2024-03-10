import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const AboutContainer = () => {
  return (
    <View style={styles.aboutApp}>
      <View style={styles.aboutApp1}>
        <Text style={styles.aboutApp2}>About App</Text>
      </View>
      <View style={styles.list}>
        <View style={styles.privacyPolicy}>
          <Image
            style={styles.iconlylightshieldDone}
            contentFit="cover"
            source={require("../assets/iconlylightshield-done.png")}
          />
          <Text style={styles.privacyPolicy1Typo}>Privacy Policy</Text>
        </View>
        <View style={styles.helpSupportFlexBox}>
          <Image
            style={styles.iconlylightshieldDone}
            contentFit="cover"
            source={require("../assets/iconlylightdocument.png")}
          />
          <Text
            style={[styles.termsConditions1, styles.privacyPolicy1Typo]}
          >{`Terms & Conditions`}</Text>
        </View>
        <View style={[styles.helpSupport, styles.helpSupportFlexBox]}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon21.png")}
          />
          <Text style={styles.helpSupport1}>Help Support</Text>
        </View>
        <View style={[styles.helpSupport, styles.helpSupportFlexBox]}>
          <Image
            style={styles.iconlylightshieldDone}
            contentFit="cover"
            source={require("../assets/iconlylightdanger-circle.png")}
          />
          <Text style={styles.privacyPolicy1Typo}>About</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  privacyPolicy1Typo: {
    marginLeft: 10,
    color: Color.heading,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  helpSupportFlexBox: {
    marginTop: 24,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  aboutApp2: {
    fontSize: FontSize.size_xs,
    textTransform: "uppercase",
    fontWeight: "600",
    fontFamily: FontFamily.workSansSemiBold,
    color: Color.main,
    textAlign: "left",
  },
  aboutApp1: {
    backgroundColor: Color.background,
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_xs,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  iconlylightshieldDone: {
    width: 16,
    height: 16,
  },
  privacyPolicy: {
    alignItems: "center",
    height: 16,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  termsConditions1: {
    flex: 1,
  },
  icon: {
    width: 15,
    height: 15,
  },
  helpSupport1: {
    marginLeft: 11,
    color: Color.heading,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  helpSupport: {
    height: 16,
  },
  list: {
    paddingLeft: Padding.p_xl,
    marginTop: 16,
    alignSelf: "stretch",
  },
  aboutApp: {
    position: "absolute",
    top: 587,
    left: 0,
    width: 375,
  },
});

export default AboutContainer;
