import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { Button } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import ServiceFormContainer from "../components/ServiceFormContainer";
import Property1Default from "../components/Property1Default";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const SignupServiceMan = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signupServiceman}>
      <View style={[styles.navigation, styles.symbolsFlexBox]}>
        <Text style={[styles.text, styles.textTypo]}>9:41</Text>
        <View style={styles.time} />
        <View style={[styles.symbols, styles.symbolsFlexBox]}>
          <Image
            style={styles.wiFiIcon}
            contentFit="cover"
            source={require("../assets/wifi1.png")}
          />
          <Image
            style={styles.batteryIcon}
            contentFit="cover"
            source={require("../assets/battery1.png")}
          />
        </View>
      </View>
      <View style={styles.frame}>
        <Image
          style={styles.frameIcon}
          contentFit="cover"
          source={require("../assets/frame.png")}
        />
        <ServiceFormContainer />
      </View>
      <View style={styles.btnAndText}>
        <Property1Default
          buttonText="signup"
          property1DefaultPosition="unset"
          property1DefaultBackgroundColor="unset"
          property1DefaultAlignSelf="unset"
          property1DefaultTop="unset"
          property1DefaultLeft="unset"
          property1DefaultWidth={335}
          property1DefaultBorderRadius={12}
          property1DefaultHeight="unset"
          property1DefaultMarginTop="unset"
          buttonTextFontWeight="600"
          buttonTextFontFamily="WorkSans-SemiBold"
          buttonTextTextTransform="uppercase"
          buttonTextTextAlign="left"
          buttonTextFontSize={16}
          onLoginBtnPress={() => navigation.navigate("LoginServiceMan")}
        />
        <Pressable
          style={[styles.dontHaveAnAccount, styles.symbolsFlexBox]}
          onPress={() => navigation.navigate("LoginServiceMan")}
        >
          <Text style={[styles.alreadyHaveAn, styles.textTypo]}>
            Already have an account?
          </Text>
          <Text style={[styles.signIn, styles.textTypo]}>Sign In</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginBtnText: {
    fontWeight: "600",
    fontFamily: "WorkSans-SemiBold",
  },
  symbolsFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  textTypo: {
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  text: {
    fontFamily: FontFamily.sFProDisplay,
    color: Color.heading,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  time: {
    width: 27,
    height: 17,
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
    overflow: "hidden",
  },
  navigation: {
    width: 338,
    height: 23,
    justifyContent: "space-between",
    paddingLeft: Padding.p_12xs_5,
    paddingTop: Padding.p_5xs,
    paddingBottom: Padding.p_5xs,
  },
  frameIcon: {
    position: "absolute",
    top: 0,
    left: 127,
    width: 81,
    height: 80,
    overflow: "hidden",
  },
  frame: {
    width: 343,
    height: 575,
    marginTop: 55,
    overflow: "hidden",
  },
  alreadyHaveAn: {
    fontFamily: FontFamily.workSansMedium,
    color: Color.body,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  signIn: {
    textDecoration: "underline",
    fontStyle: "italic",
    fontWeight: "600",
    fontFamily: FontFamily.workSansSemiBoldItalic,
    color: Color.main,
    marginLeft: 5,
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  dontHaveAnAccount: {
    marginTop: 16,
    justifyContent: "center",
  },
  btnAndText: {
    marginTop: 55,
    alignItems: "center",
  },
  signupServiceman: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 812,
    paddingRight: Padding.p_11xs,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
});

export default SignupServiceMan;
