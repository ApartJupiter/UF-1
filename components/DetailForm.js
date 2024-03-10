import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Input } from "@ui-kitten/components";
import { FontFamily, Padding, Color, Border, FontSize } from "../GlobalStyles";

const DetailForm = () => {
  return (
    <View style={styles.enterDetailInformation}>
      <Text style={[styles.enterDetailInformation1, styles.dateAndTime1Typo]}>
        Enter Detail Information
      </Text>
      <View style={[styles.formField, styles.formFieldSpaceBlock]}>
        <View style={styles.dateAndTime}>
          <Text style={[styles.dateAndTime1, styles.dateAndTime1Typo]}>
            Date And Time :
          </Text>
          <Input
            style={[styles.enterDateAndTime, styles.enterSpaceBlock]}
            placeholder="Enter Date And Time"
            placeholderTextColor="#6c757d"
            textStyle={styles.enterDateAndTimeText}
          />
        </View>
        <View style={styles.yourAddress}>
          <View style={styles.dateAndTime}>
            <Text style={[styles.dateAndTime1, styles.dateAndTime1Typo]}>
              Your Address :
            </Text>
            <Input
              style={[styles.enterDateAndTime1, styles.enterSpaceBlock]}
              placeholder="Enter Your Address"
              placeholderTextColor="#6c757d"
              textStyle={styles.enterDateAndTime1Text}
            />
          </View>
          <Text style={[styles.useCurrentLocation, styles.formFieldSpaceBlock]}>
            Use Current Location
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  enterDateAndTimeText: {
    fontWeight: "500",
    fontFamily: "WorkSans-Medium",
    color: "#6c757d",
  },
  enterDateAndTime1Text: {
    fontWeight: "500",
    fontFamily: "WorkSans-Medium",
    color: "#6c757d",
  },
  dateAndTime1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  formFieldSpaceBlock: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  enterSpaceBlock: {
    marginTop: 12,
    paddingRight: Padding.p_90xl,
    paddingTop: Padding.p_lg,
    paddingLeft: Padding.p_base,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.white,
    borderRadius: Border.br_3xs,
    alignSelf: "stretch",
  },
  enterDetailInformation1: {
    fontSize: FontSize.size_lg,
    textTransform: "capitalize",
    color: Color.heading,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    alignSelf: "stretch",
  },
  dateAndTime1: {
    fontSize: FontSize.size_sm,
    color: Color.heading,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    alignSelf: "stretch",
  },
  enterDateAndTime: {
    paddingBottom: Padding.p_lg,
  },
  dateAndTime: {
    alignSelf: "stretch",
  },
  enterDateAndTime1: {
    paddingBottom: Padding.p_41xl,
  },
  useCurrentLocation: {
    fontSize: FontSize.size_xs,
    color: Color.main,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    marginTop: 16,
  },
  yourAddress: {
    alignItems: "flex-end",
    marginTop: 24,
    alignSelf: "stretch",
  },
  formField: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.background,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_5xl,
  },
  enterDetailInformation: {
    position: "absolute",
    top: 214,
    left: 20,
    width: 335,
  },
});

export default DetailForm;
