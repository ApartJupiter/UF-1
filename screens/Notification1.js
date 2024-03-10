import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, StatusBar, View } from "react-native";
import BookingFormContainer1 from "../components/BookingFormContainer1";
import BookingFormContainer from "../components/BookingFormContainer";
import { Color } from "../GlobalStyles";

const Notification1 = () => {
  return (
    <View style={styles.notification}>
      <BookingFormContainer1 />
      <BookingFormContainer />
      <Image
        style={[styles.providerAppIcon, styles.framePosition]}
        contentFit="cover"
        source={require("../assets/provider-app1.png")}
      />
      <StatusBar style={styles.framePosition} barStyle="default" />
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  providerAppIcon: {
    top: 752,
    height: 60,
  },
  notification: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Notification1;
