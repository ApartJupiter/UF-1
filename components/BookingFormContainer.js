import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import NotificationContainer from "./NotificationContainer";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const BookingFormContainer = () => {
  return (
    <View style={styles.ealier}>
      <View style={styles.title}>
        <Text style={styles.ealier1}>Ealier</Text>
      </View>
      <View style={styles.comments}>
        <NotificationContainer
          bookingActionText="Add Booking"
          bookingTimeAgoText="1 day"
          newBookingAddedMarginTop="unset"
          newBookingAddedBackgroundColor="#fff"
          newBookingAddedPaddingLeft={20}
          newBookingAddedPadding="unset"
          propMarginLeft={70}
        />
        <NotificationContainer
          bookingActionText="Cancel Booking"
          bookingTimeAgoText="2 day"
          newBookingAddedMarginTop={25}
          newBookingAddedBackgroundColor="#fff"
          newBookingAddedPaddingLeft={20}
          newBookingAddedPadding="unset"
          propMarginLeft={68}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ealier1: {
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.workSansMedium,
    color: Color.heading,
    textAlign: "left",
  },
  title: {
    flexDirection: "row",
    paddingLeft: Padding.p_xl,
  },
  comments: {
    marginTop: 15,
  },
  ealier: {
    position: "absolute",
    top: 529,
    left: 9,
  },
});

export default BookingFormContainer;
