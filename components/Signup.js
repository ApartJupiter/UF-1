import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { Input } from "@ui-kitten/components";
import Property1Default from "./Property1Default";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const Signup = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.signup, styles.signupLayout]}>
      <View style={[styles.navigation, styles.navigationFlexBox]}>
        <View style={styles.time}>
          <Text style={[styles.text, styles.textTypo]}>9:41</Text>
        </View>
        <View style={styles.symbols}>
          <Image
            style={styles.wiFiIcon}
            contentFit="cover"
            source={require("../assets/wifi2.png")}
          />
          <Image
            style={styles.batteryIcon}
            contentFit="cover"
            source={require("../assets/battery.png")}
          />
        </View>
      </View>
      <View style={styles.btnAndText}>
        <Property1Default
          buttonText="signup"
          property1DefaultPosition="unset"
          property1DefaultBackgroundColor="#5f60b9"
          property1DefaultAlignSelf="stretch"
          property1DefaultTop="unset"
          property1DefaultLeft="unset"
          property1DefaultWidth="unset"
          property1DefaultBorderRadius={12}
          property1DefaultHeight="unset"
          property1DefaultMarginTop="unset"
          buttonTextFontWeight="600"
          buttonTextFontFamily="WorkSans-SemiBold"
          buttonTextTextTransform="uppercase"
          buttonTextTextAlign="left"
          buttonTextFontSize={16}
        />
        <View style={styles.dontHaveAnAccount}>
          <Text style={styles.alreadyHaveAn}>Already have an account?</Text>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={[styles.signIn1, styles.textTypo]}>Sign In</Text>
          </Pressable>
        </View>
      </View>
      <View style={[styles.details, styles.detailsPosition]}>
        <View style={styles.fullName}>
          <Input
            style={[styles.fullNameAndIcon, styles.navigationFlexBox]}
            placeholder="Full Name"
            placeholderTextColor="#6c757d"
            textStyle={styles.fullNameAndIconText}
          />
        </View>
        <Input
          style={styles.emailSpaceBlock}
          placeholder="User Name"
          placeholderTextColor="#6c757d"
          textStyle={styles.userNameTextInputText}
        />
        <Input
          style={styles.emailSpaceBlock}
          placeholder="Contact Number"
          placeholderTextColor="#6c757d"
          textStyle={styles.contactNumberTextInputText}
        />
        <Input
          style={styles.emailSpaceBlock}
          placeholder="Password"
          placeholderTextColor="#6c757d"
          textStyle={styles.passwordTextInputText}
        />
        <Input
          style={styles.emailSpaceBlock}
          placeholder="deep@deppcorpo.com"
          placeholderTextColor="#6c757d"
          textStyle={styles.emailTextInputText}
          label="Email"
        />
      </View>
      <Image
        style={styles.userImageIcon}
        contentFit="cover"
        source={require("../assets/user-image.png")}
      />
      <View style={styles.text1}>
        <Image
          style={[styles.logoIcon, styles.signupLayout]}
          contentFit="cover"
          source={require("../assets/logo1.png")}
        />
        <Text style={[styles.helloUser, styles.helloUserTypo]}>
          Hello User!
        </Text>
        <Text
          style={[styles.createYourAccount, styles.helloUserTypo]}
        >{`Create your account for
better Experience`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fullNameAndIconText: {
    fontWeight: "500",
    fontFamily: "WorkSans-Medium",
    color: "#6c757d",
  },
  userNameTextInputText: {
    fontWeight: "500",
    fontFamily: "WorkSans-Medium",
    color: "#6c757d",
  },
  contactNumberTextInputText: {
    fontWeight: "500",
    fontFamily: "WorkSans-Medium",
    color: "#6c757d",
  },
  passwordTextInputText: {
    fontWeight: "500",
    fontFamily: "WorkSans-Medium",
    color: "#6c757d",
  },
  emailTextInputText: {
    fontWeight: "500",
    fontFamily: "WorkSans-Medium",
    color: "#5f60b9",
  },
  signupLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  navigationFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo: {
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  detailsPosition: {
    width: 335,
    left: 20,
    position: "absolute",
  },
  helloUserTypo: {
    textAlign: "center",
    textTransform: "capitalize",
    fontFamily: FontFamily.workSansMedium,
    marginTop: 16,
    alignSelf: "stretch",
    fontWeight: "500",
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
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  navigation: {
    top: 10,
    paddingLeft: Padding.p_12xs_5,
    width: 335,
    left: 20,
    position: "absolute",
  },
  alreadyHaveAn: {
    color: Color.body,
    fontFamily: FontFamily.workSansMedium,
    textAlign: "left",
    fontWeight: "500",
    fontSize: FontSize.size_sm,
  },
  signIn1: {
    textDecoration: "underline",
    fontStyle: "italic",
    fontWeight: "600",
    fontFamily: FontFamily.workSansSemiBoldItalic,
    color: Color.main,
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  dontHaveAnAccount: {
    marginTop: 16,
    alignSelf: "stretch",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  btnAndText: {
    top: 692,
    left: 40,
    width: 293,
    alignItems: "center",
    position: "absolute",
  },
  fullNameAndIcon: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.background,
    padding: Padding.p_base,
    alignSelf: "stretch",
  },
  fullName: {
    alignSelf: "stretch",
  },
  emailSpaceBlock: {
    marginTop: 24,
    alignSelf: "stretch",
  },
  details: {
    top: 283,
  },
  userImageIcon: {
    top: 77,
    left: 147,
    width: 80,
    height: 80,
    position: "absolute",
  },
  logoIcon: {
    borderRadius: Border.br_161xl,
    width: "100%",
    display: "none",
    height: 80,
    alignSelf: "stretch",
  },
  helloUser: {
    fontSize: FontSize.size_3xl,
    color: Color.heading,
  },
  createYourAccount: {
    fontSize: FontSize.size_base,
    lineHeight: 20,
    color: Color.body,
  },
  text1: {
    top: 184,
    left: 93,
    width: 190,
    alignItems: "center",
    position: "absolute",
  },
  signup: {
    backgroundColor: Color.white,
    width: 375,
    height: 812,
    maxHeight: "100%",
  },
});

export default Signup;
