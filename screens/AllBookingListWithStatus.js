import * as React from "react";
import { Text, StyleSheet, View, StatusBar } from "react-native";
import { Image } from "expo-image";
import BookingCardContainer from "../components/BookingCardContainer";
import HouseCleaningFormContainer from "../components/HouseCleaningFormContainer";
import ElectronicDeviceFixingContaine from "../components/ElectronicDeviceFixingContaine";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const AllBookingListWithStatus = () => {
  return (
    <View style={styles.allBookingListWithStatus}>
      <View style={styles.dropdown}>
        <Text style={styles.pending}>All</Text>
        <Image
          style={styles.iconlylightarrowDown2}
          contentFit="cover"
          source={require("../assets/iconlylightarrow--down-2.png")}
        />
      </View>
      <StatusBar style={styles.framePosition} barStyle="default" />
      <View style={[styles.frame1, styles.framePosition]}>
        <View style={styles.all}>
          <BookingCardContainer />
          <HouseCleaningFormContainer />
          <ElectronicDeviceFixingContaine />
        </View>
        <Image
          style={styles.providerAppIcon}
          contentFit="cover"
          source={require("../assets/provider-app3.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    alignItems: "center",
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  pending: {
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.workSansMedium,
    color: Color.heading,
    textAlign: "left",
  },
  iconlylightarrowDown2: {
    width: 18,
    height: 18,
  },
  dropdown: {
    top: 110,
    left: 21,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.background,
    width: 334,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_lg,
    paddingVertical: Padding.p_sm,
    position: "absolute",
  },
  all: {
    width: 355,
    height: 1306,
  },
  providerAppIcon: {
    width: 372,
    height: 60,
    marginTop: -64,
  },
  frame1: {
    top: 152,
    width: 396,
    height: 1967,
    justifyContent: "flex-end",
    paddingTop: 581,
    paddingBottom: 587,
  },
  allBookingListWithStatus: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 1546,
    overflow: "hidden",
  },
});

export default AllBookingListWithStatus;
