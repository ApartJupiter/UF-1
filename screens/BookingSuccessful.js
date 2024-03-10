import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import SuccessPopupContainer from "../components/SuccessPopupContainer";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const BookingSuccessful = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bookingSuccessful}>
      <View style={[styles.navigation, styles.topNavFlexBox]}>
        <View style={styles.time}>
          <Text style={[styles.text, styles.textTypo]}>9:41</Text>
        </View>
        <View style={[styles.symbols, styles.topNavFlexBox]}>
          <Image
            style={styles.wiFiIcon}
            contentFit="cover"
            source={require("../assets/wifi4.png")}
          />
          <Image
            style={styles.batteryIcon}
            contentFit="cover"
            source={require("../assets/battery2.png")}
          />
        </View>
      </View>
      <View style={[styles.topNav, styles.topNavFlexBox]}>
        <Image
          style={styles.stroke1Icon}
          contentFit="cover"
          source={require("../assets/stroke-11.png")}
        />
        <Text style={[styles.booking, styles.textTypo]}>Booking</Text>
      </View>
      <Image
        style={[styles.bgIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/bg1.png")}
      />
      <SuccessPopupContainer />
      <Image
        style={[styles.hanymanAppIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/hanyman-app2.png")}
      />
      <Image
        style={[styles.profileIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/profile1.png")}
      />
      <Pressable
        style={[styles.iconlylightcategory, styles.iconlyboldticketLayout]}
        onPress={() => navigation.navigate("Category")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/iconlylightcategory.png")}
        />
      </Pressable>
      <Image
        style={[styles.iconlyboldticket, styles.iconlyboldticketLayout]}
        contentFit="cover"
        source={require("../assets/iconlyboldticket.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  topNavFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo: {
    textAlign: "left",
    color: Color.white,
    fontWeight: "500",
  },
  iconPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconlyboldticketLayout: {
    height: "2.46%",
    width: "5.33%",
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.sFProDisplay,
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
    backgroundColor: Color.colorCornflowerblue,
    height: 31,
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    width: 375,
    left: 0,
    position: "absolute",
    top: 0,
  },
  stroke1Icon: {
    width: 6,
    height: 12,
  },
  booking: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.workSansMedium,
    marginLeft: 15,
    flex: 1,
  },
  topNav: {
    top: 31,
    backgroundColor: Color.main,
    paddingHorizontal: 27,
    paddingTop: Padding.p_sm,
    paddingBottom: Padding.p_mini,
    width: 375,
    left: 0,
    position: "absolute",
  },
  bgIcon: {
    opacity: 0.8,
    top: 0,
    left: 0,
    height: 812,
  },
  hanymanAppIcon: {
    top: 752,
    height: 60,
  },
  profileIcon: {
    height: "1.88%",
    width: "3.2%",
    right: "10.67%",
    bottom: "2.8%",
    left: "86.13%",
    top: "95.32%",
    position: "absolute",
    maxWidth: "100%",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  iconlylightcategory: {
    left: "60%",
    right: "34.67%",
    bottom: "2.22%",
    top: "95.32%",
  },
  iconlyboldticket: {
    top: "95.07%",
    right: "60%",
    bottom: "2.46%",
    left: "34.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  bookingSuccessful: {
    backgroundColor: Color.white,
    overflow: "hidden",
    height: 812,
    width: "100%",
    flex: 1,
  },
});

export default BookingSuccessful;
