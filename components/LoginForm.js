import * as React from "react";
import { Input, Button } from "@ui-kitten/components";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Property1Default from "./Property1Default";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const LoginForm = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginForm}>
      <View>
        <Input
          style={styles.email}
          placeholder="Email Address"
          placeholderTextColor="#6c757d"
          textStyle={styles.emailTextInputText}
        />
        <View style={styles.forgotPassword}>
          <Input
            style={styles.email}
            placeholder="Password"
            placeholderTextColor="#6c757d"
            textStyle={styles.frameTextInputText}
          />
          <View style={styles.frameParent}>
            <View style={styles.frameGroup}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/frame-34821.png")}
              />
              <Text style={styles.rememberMe}>Remember Me</Text>
            </View>
            <Text style={[styles.forgotPassword1, styles.signUpTypo1]}>
              Forgot Password ?
            </Text>
          </View>
        </View>
      </View>
      <Pressable
        style={styles.loginBtnParent}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "Profile" })
        }
      >
        <Property1Default
          buttonText="Login"
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
        />
        <Pressable
          style={styles.dontHaveAnAccount}
          onPress={() => navigation.navigate("SignupServiceMan")}
        >
          <Text style={[styles.dontHaveAn, styles.signUpTypo]}>
            Don’t have an account?
          </Text>
          <Text style={[styles.signUp, styles.signUpTypo]}>Sign Up</Text>
        </Pressable>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  emailTextInputText: {
    fontWeight: "500",
    fontFamily: "WorkSans-Medium",
    color: "#6c757d",
  },
  frameTextInputText: {
    fontWeight: "500",
    fontFamily: "WorkSans-Medium",
    color: "#6c757d",
  },
  loginBtnText: {
    fontWeight: "600",
    fontFamily: "WorkSans-SemiBold",
  },
  signUpTypo1: {
    color: Color.main,
    fontFamily: FontFamily.workSansSemiBoldItalic,
    fontWeight: "600",
    fontStyle: "italic",
  },
  signUpTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  email: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.background,
    width: 335,
    justifyContent: "space-between",
    padding: Padding.p_xl,
    flexDirection: "row",
    alignItems: "center",
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
    marginLeft: 117,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.workSansSemiBoldItalic,
    fontWeight: "600",
    fontStyle: "italic",
  },
  frameParent: {
    marginTop: 10,
    flexDirection: "row",
  },
  forgotPassword: {
    marginTop: 24,
  },
  dontHaveAn: {
    color: Color.body,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
  },
  signUp: {
    textDecoration: "underline",
    marginLeft: 5,
    color: Color.main,
    fontFamily: FontFamily.workSansSemiBoldItalic,
    fontWeight: "600",
    fontStyle: "italic",
  },
  dontHaveAnAccount: {
    justifyContent: "center",
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  loginBtnParent: {
    marginTop: 40,
    alignItems: "center",
  },
  loginForm: {
    position: "absolute",
    top: 258,
    left: 20,
    alignItems: "center",
  },
});

export default LoginForm;
