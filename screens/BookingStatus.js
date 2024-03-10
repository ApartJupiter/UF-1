import * as React from "react";
import { Text, StyleSheet, View, StatusBar } from "react-native";
import { Image } from "expo-image";
import DetailContainer from "../components/DetailContainer";
import HousemanInfoContainer from "../components/HousemanInfoContainer";
import BookingHistoryContainer from "../components/BookingHistoryContainer";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const BookingStatus = () => {
  return (
    <View style={styles.bookingStatus}>
      <View style={[styles.navigation, styles.symbolsFlexBox]}>
        <View style={styles.time}>
          <Text style={[styles.text, styles.textTypo]}>9:41</Text>
        </View>
        <View style={[styles.symbols, styles.symbolsFlexBox]}>
          <Image
            style={styles.wiFiIcon}
            contentFit="cover"
            source={require("../assets/wifi6.png")}
          />
          <Image
            style={styles.batteryIcon}
            contentFit="cover"
            source={require("../assets/battery2.png")}
          />
        </View>
      </View>
      <StatusBar style={styles.bgPosition} barStyle="default" />
      <View style={styles.bookingId}>
        <Text style={[styles.bookingId1, styles.textTypo]}>Booking ID</Text>
        <Text style={styles.text1}>#123</Text>
      </View>
      <View style={[styles.line, styles.lineBg]} />
      <DetailContainer />
      <HousemanInfoContainer />
      <View style={[styles.bg, styles.bgPosition]} />
      <View style={[styles.line1, styles.lineBg]} />
      <BookingHistoryContainer />
      <Image
        style={[styles.providerAppIcon, styles.bgPosition]}
        contentFit="cover"
        source={require("../assets/provider-app2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  symbolsFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo: {
    fontWeight: "500",
    textAlign: "left",
  },
  bgPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  lineBg: {
    backgroundColor: Color.border,
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.sFProDisplay,
    color: Color.white,
    textAlign: "left",
  },
  time: {
    width: 27,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  wiFiIcon: {
    width: 15,
    height: 11,
  },
  batteryIcon: {
    width: 25,
    marginLeft: 9,
    height: 12,
  },
  symbols: {
    width: 51,
    paddingLeft: 1,
    paddingRight: Padding.p_12xs_5,
    height: 12,
    overflow: "hidden",
  },
  navigation: {
    top: 0,
    backgroundColor: Color.colorCornflowerblue,
    height: 31,
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    width: 375,
    left: 0,
    position: "absolute",
  },
  bookingId1: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.workSansMedium,
    color: Color.body,
    textAlign: "left",
  },
  text1: {
    fontSize: FontSize.size_lg,
    fontWeight: "600",
    fontFamily: FontFamily.workSansSemiBold,
    color: Color.main,
    marginLeft: 210,
    textAlign: "left",
  },
  bookingId: {
    top: 105,
    left: 20,
    flexDirection: "row",
    position: "absolute",
  },
  line: {
    top: 142,
    width: 336,
    height: 1,
    left: 20,
  },
  bg: {
    top: 371,
    borderTopLeftRadius: Border.br_xs,
    borderTopRightRadius: Border.br_xs,
    height: 441,
    backgroundColor: Color.white,
  },
  line1: {
    top: 391,
    left: 168,
    borderRadius: 23,
    width: 40,
    height: 3,
  },
  providerAppIcon: {
    top: 752,
    height: 60,
  },
  bookingStatus: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default BookingStatus;
