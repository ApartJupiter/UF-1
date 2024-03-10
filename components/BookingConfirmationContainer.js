import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Button } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const BookingConfirmationContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.popup}>
      <Image
        style={styles.checkIcon}
        contentFit="cover"
        source={require("../assets/check.png")}
      />
      <View style={styles.content}>
        <View style={styles.text}>
          <Text style={[styles.confirmBooking, styles.areYouSureTypo]}>
            confirm Booking
          </Text>
          <Text
            style={[styles.areYouSure, styles.areYouSureTypo]}
          >{`Are you sure you want to confirm 
the booking`}</Text>
        </View>
        <Pressable
          style={[styles.button, styles.btnFlexBox]}
          onPress={() => navigation.navigate("BookTheServiceStep1")}
        >
          <View style={[styles.btn, styles.btnFlexBox]}>
            <Button
              style={[styles.cancel, styles.btnFlexBox]}
              title="Cancel"
              appearance=""
              color="#fff"
              textStyle={styles.cancelText}
            >
              Cancel
            </Button>
            <Button
              style={[styles.cancel, styles.btnFlexBox]}
              title="Book"
              appearance=""
              color="#5f60b9"
              textStyle={styles.nextText}
              onPress={() => navigation.navigate("BookingSuccessful")}
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
  cancelText: {
    fontWeight: "500",
    fontFamily: "WorkSans-Medium",
  },
  nextText: {
    fontWeight: "500",
    fontFamily: "WorkSans-Medium",
  },
  areYouSureTypo: {
    textAlign: "center",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    alignSelf: "stretch",
  },
  btnFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  bookTypo: {
    textAlign: "left",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  checkIcon: {
    width: 105,
    height: 105,
  },
  confirmBooking: {
    fontSize: FontSize.size_3xl,
    textTransform: "capitalize",
    color: Color.heading,
  },
  areYouSure: {
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    color: Color.body,
    marginTop: 12,
  },
  text: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  cancel: {
    borderRadius: Border.br_5xs,
    width: 134,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_smi,
  },
  btn: {
    width: 284,
  },
  button: {
    marginTop: 40,
    alignSelf: "stretch",
    borderRadius: Border.br_xs,
  },
  content: {
    marginTop: 48,
    alignSelf: "stretch",
    alignItems: "center",
  },
  popup: {
    position: "absolute",
    top: 192,
    left: 20,
    backgroundColor: Color.white,
    width: 335,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_37xl,
    alignItems: "center",
    borderRadius: Border.br_xs,
  },
});

export default BookingConfirmationContainer;
