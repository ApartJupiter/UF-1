import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const BookingHistoryContainer = () => {
  return (
    <View style={styles.frameParent}>
      <View style={styles.bookingHistoryParent}>
        <Text style={styles.bookingHistory}>Booking History</Text>
        <Text style={[styles.id123, styles.febTypo]}>ID : #123</Text>
      </View>
      <View style={styles.line} />
      <View style={styles.status}>
        <View style={[styles.time, styles.timePosition]}>
          <View>
            <Text style={styles.pm}>1:17 PM</Text>
            <Text style={[styles.feb, styles.febTypo]}>6 Feb</Text>
          </View>
          <View style={styles.dateAndTime1}>
            <Text style={styles.pm}>1:21 PM</Text>
            <Text style={[styles.feb, styles.febTypo]}>6 Feb</Text>
          </View>
          <View style={styles.dateAndTime1}>
            <Text style={styles.pm}>1:22 PM</Text>
            <Text style={[styles.feb, styles.febTypo]}>6 Feb</Text>
          </View>
        </View>
        <View style={[styles.text, styles.timePosition]}>
          <View>
            <Text style={styles.bookingHistory}>New Booking</Text>
            <Text style={[styles.newBookingAdded, styles.bookingTypo]}>
              New Booking Added by customer
            </Text>
          </View>
          <View style={styles.acceptBooking}>
            <Text style={styles.bookingHistory}>Accept Booking</Text>
            <Text style={[styles.newBookingAdded, styles.bookingTypo]}>
              Status changed From pending to accept
            </Text>
          </View>
          <View style={styles.acceptBooking}>
            <Text style={styles.bookingHistory}>Assigned Booking</Text>
            <Text style={styles.bookingTypo}>
              <Text
                style={styles.bookingHasAssigned}
              >{`Booking has assigned to `}</Text>
              <Text style={styles.naomieHackett}>Naomie Hackett</Text>
            </Text>
          </View>
        </View>
        <View style={[styles.lineAndCircle, styles.timePosition]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/13.png")}
          />
          <View style={styles.lineAndCircleChild} />
          <Image
            style={[styles.icon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/21.png")}
          />
          <View style={[styles.lineAndCircleItem, styles.lineBorder]} />
          <Image
            style={[styles.icon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/3.png")}
          />
          <View style={[styles.lineAndCircleInner, styles.lineBorder]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  febTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  timePosition: {
    top: "0%",
    position: "absolute",
  },
  bookingTypo: {
    marginTop: 10,
    width: 162,
    textTransform: "capitalize",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  iconLayout: {
    height: 12,
    width: 12,
  },
  lineBorder: {
    borderColor: Color.colorDarkcyan,
    width: 2,
    borderRightWidth: 1.5,
    borderRadius: 0.001,
    borderStyle: "dashed",
    marginTop: 8,
  },
  bookingHistory: {
    textAlign: "left",
    fontSize: FontSize.size_base,
    color: Color.heading,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  id123: {
    fontWeight: "600",
    fontFamily: FontFamily.workSansSemiBold,
    color: Color.main,
  },
  bookingHistoryParent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 335,
  },
  line: {
    backgroundColor: Color.border,
    height: 1,
    marginTop: 20,
    width: 335,
  },
  pm: {
    color: Color.body,
    textTransform: "capitalize",
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
  },
  feb: {
    marginTop: 8,
    color: Color.heading,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
  },
  dateAndTime1: {
    marginTop: 60,
  },
  time: {
    height: "93.26%",
    width: "21.28%",
    right: "78.72%",
    bottom: "6.74%",
    left: "0%",
  },
  newBookingAdded: {
    color: Color.body,
  },
  acceptBooking: {
    marginTop: 42,
  },
  bookingHasAssigned: {
    color: Color.body,
  },
  naomieHackett: {
    color: Color.heading,
  },
  text: {
    height: "100%",
    width: "57.45%",
    right: "0%",
    bottom: "0%",
    left: "42.55%",
  },
  lineAndCircleChild: {
    borderColor: Color.colorCrimson,
    height: 77,
    width: 2,
    borderRightWidth: 1.5,
    borderRadius: 0.001,
    borderStyle: "dashed",
    marginTop: 8,
  },
  icon1: {
    marginTop: 8,
  },
  lineAndCircleItem: {
    height: 77,
  },
  lineAndCircleInner: {
    height: 39,
    display: "none",
  },
  lineAndCircle: {
    height: "81.65%",
    width: "4.26%",
    right: "65.96%",
    bottom: "18.35%",
    left: "29.79%",
    alignItems: "center",
  },
  status: {
    width: 282,
    height: 267,
    marginTop: 20,
  },
  frameParent: {
    top: 414,
    left: 20,
    position: "absolute",
  },
});

export default BookingHistoryContainer;
