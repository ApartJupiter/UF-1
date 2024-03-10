import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import FrameContainer from "../components/FrameContainer";
import ReviewCard from "../components/ReviewCard";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const ServiceManDashboard = () => {
  return (
    <View style={styles.servicemanDashboard}>
      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <View style={[styles.frame, styles.frameFlexBox]}>
        <Text style={[styles.helloDeepParmar, styles.welcomeBackTypo]}>
          Hello Deep Parmar
        </Text>
      </View>
      <View style={[styles.frame1, styles.framePosition]}>
        <Text style={[styles.welcomeBack, styles.welcomeBackTypo]}>
          Welcome back!
        </Text>
      </View>
      <FrameContainer />
      <StatusBar style={styles.framePosition} barStyle="default" />
      <ReviewCard />
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    justifyContent: "center",
    alignItems: "flex-end",
  },
  welcomeBackTypo: {
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  framePosition: {
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  image1Icon: {
    top: 427,
    left: 20,
    width: 335,
    height: 230,
    display: "none",
    position: "absolute",
  },
  helloDeepParmar: {
    fontSize: 20,
    color: Color.heading,
  },
  frame: {
    top: 115,
    left: 1,
    width: 205,
    position: "absolute",
    overflow: "hidden",
  },
  welcomeBack: {
    fontSize: FontSize.size_base,
    textTransform: "capitalize",
    color: Color.body,
  },
  frame1: {
    top: 138,
    width: 140,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  servicemanDashboard: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default ServiceManDashboard;
