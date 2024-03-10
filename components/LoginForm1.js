import * as React from "react";
import { Input, Button } from "@ui-kitten/components";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Property1Default from "./Property1Default";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const LoginForm1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginForm}>
      <View style={styles.inputField}>
        <Input
          style={[styles.email, styles.emailFlexBox]}
          placeholder="Email Address"
          placeholderTextColor="#6c757d"
          textStyle={styles.emailTextInputText}
        />
        <View style={styles.forgotPassword}>
          <View style={[styles.email, styles.emailFlexBox]}>
            <Image
              style={[styles.iconlylightlock, styles.iconlylightlockLayout]}
              contentFit="cover"
              source={require("../assets/iconlylightlock.png")}
            />
            <Input
              style={styles.password}
              placeholder="Password"
              placeholderTextColor="#6c757d"
              textStyle={styles.passwordTextInputText}
            />
            <Image
              style={styles.iconlylightlockLayout}
              contentFit="cover"
              source={require("../assets/iconlylighthide1.png")}
            />
          </View>
          <View style={[styles.frameParent, styles.emailFlexBox]}>
            <View style={styles.frameGroup}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/frame-34821.png")}
              />
              <Text style={styles.rememberMe}>Remember Me</Text>
            </View>
            <Text style={[styles.forgotPassword1, styles.signUp1Typo1]}>
              Forgot Password ?
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.loginBtnParent}>
        <Property1Default
          buttonText="Login"
          property1DefaultPosition="unset"
          property1DefaultBackgroundColor="unset"
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
          onLoginBtnPress={() => navigation.navigate("MainScreen")}
        />
        <View style={[styles.dontHaveAnAccount, styles.emailFlexBox]}>
          <Text style={[styles.dontHaveAn, styles.signUp1Typo]}>
            Don’t have an account?
          </Text>
          <Pressable onPress={() => navigation.navigate("Signup")}>
            <Text style={[styles.signUp1, styles.signUp1Typo]}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  emailTextInputText: {
    fontWeight: "500",
    fontFamily: "WorkSans-Medium",
    color: "#6c757d",
  },
  passwordTextInputText: {
    fontWeight: "500",
    fontFamily: "WorkSans-Medium",
    color: "#6c757d",
  },
  loginBtnText: {
    fontWeight: "600",
    fontFamily: "WorkSans-SemiBold",
  },
  emailFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  iconlylightlockLayout: {
    height: 18,
    width: 18,
  },
  signUp1Typo1: {
    color: Color.main,
    fontFamily: FontFamily.workSansSemiBoldItalic,
    fontWeight: "600",
    fontStyle: "italic",
  },
  signUp1Typo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  email: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.background,
    padding: Padding.p_xl,
    alignItems: "center",
  },
  iconlylightlock: {
    display: "none",
  },
  password: {
    width: 242,
  },
  frameChild: {
    borderRadius: Border.br_11xs,
    width: 15,
    height: 15,
  },
  rememberMe: {
    marginLeft: 8,
    textAlign: "left",
    color: Color.body,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
  },
  frameGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  forgotPassword1: {
    textAlign: "center",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.workSansSemiBoldItalic,
    fontWeight: "600",
    fontStyle: "italic",
  },
  frameParent: {
    marginTop: 10,
  },
  forgotPassword: {
    marginTop: 24,
    alignSelf: "stretch",
  },
  inputField: {
    alignSelf: "stretch",
  },
  dontHaveAn: {
    color: Color.body,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
  },
  signUp1: {
    textDecoration: "underline",
    color: Color.main,
    fontFamily: FontFamily.workSansSemiBoldItalic,
    fontWeight: "600",
    fontStyle: "italic",
  },
  dontHaveAnAccount: {
    marginTop: 16,
    alignItems: "center",
  },
  loginBtnParent: {
    marginTop: 40,
    alignSelf: "stretch",
    alignItems: "center",
  },
  loginForm: {
    position: "absolute",
    top: 258,
    left: 20,
    width: 335,
    alignItems: "center",
  },
});

export default LoginForm1;
