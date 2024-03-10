import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const StepContainer1 = () => {
  return (
    <View style={styles.steps}>
      <Text style={[styles.step1, styles.textTypo]}>Step1</Text>
      <Text style={[styles.step2, styles.textTypo]}>Step 2</Text>
      <Text style={[styles.step3, styles.textTypo]}>Step 3</Text>
      <View style={styles.view}>
        <View style={[styles.view1, styles.viewPosition]}>
          <Image
            style={[styles.child, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-2092.png")}
          />
          <Image
            style={[styles.icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/icon22.png")}
          />
          <Text style={[styles.text, styles.iconPosition]}>01</Text>
        </View>
        <View style={[styles.item, styles.itemPosition]} />
        <View style={[styles.view2, styles.childPosition]}>
          <Image
            style={[styles.child, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-209.png")}
          />
          <Text style={[styles.text1, styles.textTypo]}>02</Text>
        </View>
        <View style={[styles.lineView, styles.itemPosition]} />
        <View style={[styles.view3, styles.viewPosition]}>
          <View style={styles.groupChildLayout}>
            <Image
              style={[styles.groupChild, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-2091.png")}
            />
            <Text style={[styles.text2, styles.textTypo]}>03</Text>
          </View>
          <View style={styles.child1} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
  },
  viewPosition: {
    bottom: "0%",
    height: "100%",
    width: "17.45%",
    top: "0%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  iconPosition: {
    top: "29.73%",
    position: "absolute",
  },
  itemPosition: {
    borderTopWidth: 1.5,
    borderColor: Color.border,
    bottom: "47.84%",
    top: "48.11%",
    height: "4.05%",
    borderRadius: 0.001,
    borderStyle: "dashed",
    position: "absolute",
  },
  childPosition: {
    right: "0%",
    bottom: "0%",
    height: "100%",
    top: "0%",
    position: "absolute",
  },
  groupChildLayout: {
    height: 37,
    width: 37,
  },
  step1: {
    color: Color.body,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    textTransform: "capitalize",
    top: "76.81%",
    left: "0%",
    position: "absolute",
  },
  step2: {
    left: "79.26%",
    color: Color.heading,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    position: "absolute",
    textTransform: "capitalize",
    top: "76.81%",
  },
  step3: {
    left: "133.64%",
    display: "none",
    color: Color.body,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    textTransform: "capitalize",
    top: "76.81%",
    position: "absolute",
  },
  child: {
    width: "100%",
    right: "0%",
    bottom: "0%",
    height: "100%",
    top: "0%",
    position: "absolute",
    left: "0%",
  },
  icon: {
    height: "39.73%",
    width: "54.05%",
    right: "21.62%",
    bottom: "30.54%",
    left: "24.32%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  text: {
    left: "29.73%",
    display: "none",
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    color: Color.body,
  },
  view1: {
    right: "82.55%",
    left: "0%",
  },
  item: {
    width: "47.88%",
    right: "26.51%",
    left: "25.61%",
  },
  text1: {
    top: "27.03%",
    left: "27.03%",
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  view2: {
    left: "82.55%",
    width: "17.45%",
    right: "0%",
  },
  lineView: {
    width: "35.61%",
    right: "-30.57%",
    left: "94.95%",
    display: "none",
  },
  groupChild: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  text2: {
    top: 10,
    left: 10,
    color: Color.body,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  child1: {
    borderColor: Color.colorLightgray,
    borderRightWidth: 1.5,
    width: 2,
    height: 87,
    marginTop: 20,
    borderRadius: 0.001,
    borderStyle: "dashed",
    display: "none",
  },
  view3: {
    right: "-55.66%",
    left: "138.21%",
    alignItems: "center",
    display: "none",
  },
  view: {
    height: "53.62%",
    width: "97.7%",
    right: "1.84%",
    bottom: "46.38%",
    left: "0.46%",
    top: "0%",
    position: "absolute",
  },
  steps: {
    top: 105,
    left: 79,
    width: 217,
    height: 69,
    position: "absolute",
  },
});

export default StepContainer1;
