import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import StepContainer1 from "../components/StepContainer1";
import CouponFormContainer from "../components/CouponFormContainer";
import BookingConfirmationContainer from "../components/BookingConfirmationContainer";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const ConfrimBookingPopup = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.confrimBookingPopup}>
      <View style={[styles.navigation, styles.btnFlexBox]}>
        <View style={styles.time}>
          <Text style={styles.text}>9:41</Text>
        </View>
        <View style={styles.symbols}>
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
      <View style={[styles.topNav, styles.btnFlexBox]}>
        <Image
          style={styles.stroke1Icon}
          contentFit="cover"
          source={require("../assets/stroke-11.png")}
        />
        <Text style={styles.bookService}>Book Service</Text>
      </View>
      <StepContainer1 />
      <CouponFormContainer
        productCode={require("../assets/polygon-21.png")}
        productCodeText={require("../assets/polygon-11.png")}
        couponButtonText="Apply coupon"
        lineAlignSelf="unset"
        linePosition="absolute"
        lineTop={217}
        lineLeft={20}
        lineWidth={335}
        taxWidth="unset"
        taxAlignSelf="stretch"
        discount5OffContainerWidth="unset"
        offAlignSelf="unset"
      />
      <View style={styles.button}>
        <View style={styles.btnFlexBox}>
          <View style={[styles.cancel, styles.nextSpaceBlock]}>
            <Text style={[styles.cancel1, styles.next1Typo]}>Previous</Text>
          </View>
          <View style={[styles.next, styles.nextSpaceBlock]}>
            <Text style={[styles.next1, styles.next1Typo]}>Book</Text>
          </View>
        </View>
      </View>
      <View style={[styles.bg, styles.bgPosition]} />
      <BookingConfirmationContainer />
      <Image
        style={[styles.hanymanAppIcon, styles.bgPosition]}
        contentFit="cover"
        source={require("../assets/hanyman-app2.png")}
      />
      <Pressable
        style={[styles.iconlylightcategory, styles.iconlyboldticketLayout]}
        onPress={() => navigation.navigate("OnClickOfCategory")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/iconlylightcategory.png")}
        />
      </Pressable>
      <Pressable
        style={styles.profile}
        onPress={() => navigation.navigate("UserProfile")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/profile1.png")}
        />
      </Pressable>
      <Image
        style={[styles.iconlyboldticket, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/iconlyboldticket.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  btnFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  nextSpaceBlock: {
    paddingVertical: Padding.p_smi,
    paddingHorizontal: Padding.p_3xs,
    width: 157,
    borderRadius: Border.br_xs,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  next1Typo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.workSansMedium,
    textAlign: "left",
    fontWeight: "500",
  },
  bgPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  iconlyboldticketLayout: {
    height: "2.46%",
    width: "5.33%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  text: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.sFProDisplay,
    textAlign: "left",
    fontWeight: "500",
    color: Color.white,
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
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  navigation: {
    backgroundColor: Color.colorCornflowerblue,
    height: 31,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    alignItems: "center",
    width: 375,
    left: 0,
    position: "absolute",
    top: 0,
  },
  stroke1Icon: {
    width: 6,
    height: 12,
  },
  bookService: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.workSansMedium,
    textAlign: "left",
    color: Color.white,
    fontWeight: "500",
  },
  topNav: {
    top: 31,
    paddingHorizontal: 27,
    paddingTop: Padding.p_sm,
    paddingBottom: Padding.p_mini,
    backgroundColor: Color.main,
    alignItems: "center",
    width: 375,
    left: 0,
    position: "absolute",
  },
  cancel1: {
    color: Color.heading,
  },
  cancel: {
    backgroundColor: Color.white,
    paddingHorizontal: Padding.p_3xs,
    width: 157,
  },
  next1: {
    color: Color.white,
    fontSize: FontSize.size_base,
  },
  next: {
    backgroundColor: Color.main,
  },
  button: {
    top: 661,
    left: 20,
    width: 335,
    borderRadius: Border.br_xs,
    justifyContent: "space-between",
    flexDirection: "row",
    position: "absolute",
  },
  bg: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    height: 752,
    top: 0,
    left: 0,
  },
  hanymanAppIcon: {
    top: 752,
    height: 60,
  },
  icon: {
    height: "100%",
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  iconlylightcategory: {
    left: "60%",
    right: "34.67%",
    bottom: "2.22%",
    top: "95.32%",
  },
  profile: {
    left: "86.13%",
    right: "10.67%",
    bottom: "2.8%",
    width: "3.2%",
    height: "1.88%",
    top: "95.32%",
    position: "absolute",
  },
  iconlyboldticket: {
    top: "95.07%",
    right: "60%",
    bottom: "2.46%",
    left: "34.67%",
    height: "2.46%",
    width: "5.33%",
    position: "absolute",
  },
  confrimBookingPopup: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default ConfrimBookingPopup;
