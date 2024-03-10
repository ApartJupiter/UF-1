import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, Border, FontSize, Color, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const NotificationContainer = ({
  bookingActionText,
  bookingTimeAgoText,
  newBookingAddedMarginTop,
  newBookingAddedBackgroundColor,
  newBookingAddedPaddingLeft,
  newBookingAddedPadding,
  propMarginLeft,
}) => {
  const notificationStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", newBookingAddedMarginTop),
      ...getStyleValue("backgroundColor", newBookingAddedBackgroundColor),
      ...getStyleValue("paddingLeft", newBookingAddedPaddingLeft),
      ...getStyleValue("padding", newBookingAddedPadding),
    };
  }, [
    newBookingAddedMarginTop,
    newBookingAddedBackgroundColor,
    newBookingAddedPaddingLeft,
    newBookingAddedPadding,
  ]);

  const minAgoStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft),
    };
  }, [propMarginLeft]);

  return (
    <View style={[styles.notification, notificationStyle]}>
      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/image-11.png")}
      />
      <View style={styles.comment}>
        <View>
          <Text style={[styles.addBooking, styles.bookingTypo]}>
            {bookingActionText}
          </Text>
          <Text style={[styles.newBookingAddedContainer, styles.bookingTypo]}>
            <Text
              style={styles.newBookingAdded}
            >{`New Booking Added by `}</Text>
            <Text style={styles.customer}>Customer</Text>
          </Text>
        </View>
        <Text style={[styles.minAgo, styles.bookingTypo, minAgoStyle]}>
          {bookingTimeAgoText}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bookingTypo: {
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  image1Icon: {
    borderRadius: Border.br_5xs,
    width: 60,
    height: 60,
  },
  addBooking: {
    fontSize: FontSize.size_lg,
    color: Color.heading,
  },
  newBookingAdded: {
    color: Color.body,
  },
  customer: {
    color: Color.heading,
  },
  newBookingAddedContainer: {
    fontSize: FontSize.size_sm,
    lineHeight: 18,
    width: 162,
    marginTop: 10,
  },
  minAgo: {
    fontSize: FontSize.size_xs,
    marginLeft: 32,
    color: Color.body,
  },
  comment: {
    marginLeft: 15,
    flexDirection: "row",
  },
  notification: {
    backgroundColor: Color.white,
    paddingLeft: Padding.p_xl,
    flexDirection: "row",
  },
});

export default NotificationContainer;
