import * as React from "react";
import { StatusBar, StyleSheet, Pressable, Text, View } from "react-native";
import { Image } from "expo-image";
import { Button } from "@ui-kitten/components";
import StepContainer1 from "../components/StepContainer1";
import CouponFormContainer from "../components/CouponFormContainer";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const BookTheServiceStep1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bookTheServiceStep2}>
      <StatusBar barStyle="default" />
      <StepContainer1 />
      <Image
        style={styles.frameIcon}
        contentFit="cover"
        source={require("../assets/frame5.png")}
      />
      <View style={styles.frame1}>
        <CouponFormContainer
          productCode={require("../assets/polygon-2.png")}
          productCodeText={require("../assets/polygon-1.png")}
          couponButtonText="Apply Coupon"
        />
        <Pressable
          style={[styles.button, styles.btnFlexBox]}
          onPress={() => navigation.navigate("ConfrimBookingPopup")}
        >
          <View style={styles.btnFlexBox}>
            <Pressable
              style={[styles.cancel, styles.nextSpaceBlock]}
              onPress={() => navigation.navigate("BookTheServiceStep")}
            >
              <Text style={[styles.cancel1, styles.next1Typo]}>Previous</Text>
            </Pressable>
            <Button
              style={styles.nextSpaceBlock}
              title="Book"
              size="medium"
              status="primary"
              appearance="filled"
              color="#5f60b9"
              textStyle={styles.nextText}
            >
              Book
            </Button>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nextText: {
    fontWeight: "500",
    fontFamily: "WorkSans-Medium",
  },
  btnFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  nextSpaceBlock: {
    paddingVertical: Padding.p_smi,
    paddingHorizontal: Padding.p_3xs,
    width: 157,
    justifyContent: "space-between",
    flexDirection: "row",
    borderRadius: Border.br_xs,
  },
  next1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
  },
  frameIcon: {
    top: 752,
    left: -3,
    height: 60,
    width: 375,
    position: "absolute",
    overflow: "hidden",
  },
  cancel1: {
    color: Color.heading,
  },
  cancel: {
    backgroundColor: Color.white,
    paddingHorizontal: Padding.p_3xs,
    width: 157,
  },
  button: {
    marginTop: -5,
    borderRadius: Border.br_xs,
    flexDirection: "row",
    width: 335,
  },
  frame1: {
    top: 217,
    left: 20,
    width: 335,
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  bookTheServiceStep2: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default BookTheServiceStep1;
