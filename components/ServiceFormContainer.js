import * as React from "react";
import { Input } from "@ui-kitten/components";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Border, FontSize, Color } from "../GlobalStyles";

const ServiceFormContainer = () => {
  return (
    <View style={[styles.frame, styles.frameFlexBox]}>
      <View style={styles.frame1}>
        <View style={[styles.frame2, styles.frameFlexBox]}>
          <View style={styles.details}>
            <Input
              placeholder="Full Name"
              placeholderTextColor="#6c757d"
              textStyle={styles.fullNameTextInputText}
            />
            <Input
              style={styles.userName}
              placeholder="User Name"
              placeholderTextColor="#6c757d"
              textStyle={styles.userNameTextInputText}
            />
            <Input
              style={styles.userName}
              placeholder="Contact Number"
              placeholderTextColor="#6c757d"
              textStyle={styles.contactNumberTextInputText}
            />
            <Input
              style={styles.userName}
              placeholder="Password"
              placeholderTextColor="#6c757d"
              textStyle={styles.passwordTextInputText}
            />
            <Input
              style={styles.email}
              placeholder="deep@deppcorpo.com"
              placeholderTextColor="#6c757d"
              textStyle={styles.emailTextInputText}
              label="Email"
            />
          </View>
        </View>
        <View style={[styles.frame3, styles.frameFlexBox]}>
          <View style={styles.text}>
            <Image
              style={styles.logoIcon}
              contentFit="cover"
              source={require("../assets/logo.png")}
            />
            <Text style={[styles.helloServiceman, styles.helloServicemanTypo]}>
              Hello ServiceMan!
            </Text>
            <Text
              style={[styles.createYourAccount, styles.helloServicemanTypo]}
            >{`Create your account for
better Experience`}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fullNameTextInputText: {
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
  frameFlexBox: {
    justifyContent: "center",
    position: "absolute",
    overflow: "hidden",
  },
  helloServicemanTypo: {
    marginTop: 16,
    textAlign: "center",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    textTransform: "capitalize",
  },
  userName: {
    marginTop: 24,
  },
  email: {
    width: 325,
    marginTop: 24,
  },
  details: {
    width: 374,
    height: 383,
  },
  frame2: {
    top: 102,
    left: -31,
    width: 405,
    alignItems: "flex-end",
    justifyContent: "center",
    position: "absolute",
  },
  logoIcon: {
    borderRadius: Border.br_161xl,
    width: 80,
    height: 80,
    display: "none",
  },
  helloServiceman: {
    fontSize: FontSize.size_3xl,
    color: Color.heading,
  },
  createYourAccount: {
    fontSize: FontSize.size_base,
    lineHeight: 20,
    color: Color.body,
    width: 254,
  },
  text: {
    alignItems: "center",
  },
  frame3: {
    top: 0,
    left: 40,
    width: 263,
    justifyContent: "center",
    position: "absolute",
  },
  frame1: {
    width: 343,
    height: 471,
    overflow: "hidden",
  },
  frame: {
    top: 104,
    left: -8,
    width: 351,
    alignItems: "flex-end",
    justifyContent: "center",
    position: "absolute",
  },
});

export default ServiceFormContainer;
