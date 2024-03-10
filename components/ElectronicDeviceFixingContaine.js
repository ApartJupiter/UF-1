import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import ImageStatusContainer from "./ImageStatusContainer";
import ApartmentCleaningContainer from "./ApartmentCleaningContainer";
import { Padding, Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const ElectronicDeviceFixingContaine = () => {
  return (
    <View style={styles.view}>
      <ImageStatusContainer
        dimensionId={require("../assets/image29.png")}
        statusLabel="On Going"
        propBackgroundColor="#fd6922"
        propFontWeight="600"
        propFontFamily="WorkSans-SemiBold"
      />
      <ApartmentCleaningContainer
        cleaningServiceType="Electronic Device fixing"
        address="88-B Kailash Nagar, Manaja, Vadodara"
        appointmentDateTime="28 Febuary, 2023 at "
        customerName="Jay Prajapati"
      />
      <View style={styles.line} />
      <View style={styles.btn}>
        <View style={[styles.accept, styles.acceptFlexBox]}>
          <Text style={[styles.accept1, styles.accept1Typo]}>Accept</Text>
        </View>
        <View style={[styles.decline, styles.acceptFlexBox]}>
          <Text style={[styles.decline1, styles.accept1Typo]}>Decline</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  acceptFlexBox: {
    paddingVertical: Padding.p_6xs,
    paddingHorizontal: 0,
    justifyContent: "center",
    alignItems: "center",
    height: 38,
    width: 141,
    borderRadius: Border.br_8xs,
    flexDirection: "row",
  },
  accept1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
  },
  line: {
    backgroundColor: Color.border,
    width: 303,
    height: 1,
    marginTop: 20,
    display: "none",
  },
  accept1: {
    color: Color.white,
  },
  accept: {
    backgroundColor: Color.main,
  },
  decline1: {
    color: Color.heading,
  },
  decline: {
    backgroundColor: Color.background,
    marginLeft: 20,
  },
  btn: {
    flexDirection: "row",
    marginTop: 20,
    display: "none",
  },
  view: {
    borderRadius: Border.br_xs,
    borderStyle: "solid",
    borderColor: Color.border,
    borderWidth: 1,
    padding: Padding.p_base,
    marginTop: 24,
  },
});

export default ElectronicDeviceFixingContaine;
