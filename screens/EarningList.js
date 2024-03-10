import * as React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import PaymentMethodFormContainer from "../components/PaymentMethodFormContainer";
import { Color } from "../GlobalStyles";

const EarningList = () => {
  return (
    <View style={[styles.earningList, styles.frameFlexBox]}>
      <StatusBar style={styles.frameFlexBox} barStyle="default" />
      <View style={[styles.frame1, styles.frameFlexBox]}>
        <View>
          <PaymentMethodFormContainer serviceDescription="Cleaning of Floors and Ceilings." />
          <PaymentMethodFormContainer serviceDescription="Painting Job." />
          <PaymentMethodFormContainer serviceDescription="Fixing TV and attaching new electrical devices." />
          <PaymentMethodFormContainer serviceDescription="Plumbing work." />
        </View>
        <Image
          style={styles.providerAppIcon}
          contentFit="cover"
          source={require("../assets/provider-app.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    alignItems: "center",
    overflow: "hidden",
  },
  providerAppIcon: {
    height: 60,
    marginTop: -155,
    width: 375,
  },
  frame1: {
    height: 793,
    justifyContent: "flex-end",
    marginTop: 24,
    width: 375,
  },
  earningList: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 1075,
    paddingBottom: 168,
  },
});

export default EarningList;
