import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import NotificationContainer from "./NotificationContainer";
import { FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

const BookingFormContainer1 = () => {
  return (
    <View style={styles.new}>
      <View style={styles.title}>
        <Text style={[styles.new1, styles.new1Typo]}>New</Text>
        <Text style={[styles.markAsAll, styles.new1Typo]}>
          Mark as all read
        </Text>
      </View>
      <View style={styles.comments}>
        <NotificationContainer
          bookingActionText="Add Booking"
          bookingTimeAgoText="02 min ago"
        />
        <NotificationContainer
          bookingActionText="Cancel Booking"
          bookingTimeAgoText="25 min ago"
          newBookingAddedMarginTop={25}
          newBookingAddedBackgroundColor="#fff"
          newBookingAddedPaddingLeft={20}
          newBookingAddedPadding="unset"
          propMarginLeft={32}
        />
        <View style={styles.notification}>
          <NotificationContainer
            bookingActionText="Add Booking"
            bookingTimeAgoText="30 min ago"
            newBookingAddedMarginTop="unset"
            newBookingAddedBackgroundColor="#f6f7f9"
            newBookingAddedPaddingLeft="unset"
            newBookingAddedPadding={20}
            propMarginLeft={32}
          />
        </View>
        <NotificationContainer
          bookingActionText="Cancel Booking"
          bookingTimeAgoText="25 min ago"
          newBookingAddedMarginTop={25}
          newBookingAddedBackgroundColor="#fff"
          newBookingAddedPaddingLeft={20}
          newBookingAddedPadding="unset"
          propMarginLeft={32}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  new1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  new1: {
    fontSize: FontSize.size_sm,
    color: Color.heading,
  },
  markAsAll: {
    fontSize: FontSize.size_xs,
    color: Color.main,
  },
  title: {
    width: 356,
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: Padding.p_xl,
    flexDirection: "row",
  },
  notification: {
    backgroundColor: Color.white,
    marginTop: 25,
    flexDirection: "row",
  },
  comments: {
    marginTop: 15,
  },
  new: {
    position: "absolute",
    top: 95,
    left: 0,
  },
});

export default BookingFormContainer1;
