import * as React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import ChangePasswordForm from "../components/ChangePasswordForm";
import { Color } from "../GlobalStyles";

const ChangePassword = () => {
  return (
    <View style={[styles.changePassword, styles.frameFlexBox]}>
      <ChangePasswordForm />
      <StatusBar style={styles.frameFlexBox} barStyle="default" />
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    alignItems: "center",
    overflow: "hidden",
  },
  changePassword: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
  },
});

export default ChangePassword;
