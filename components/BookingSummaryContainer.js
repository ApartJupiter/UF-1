import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Button } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const BookingSummaryContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.popup}>
      <View style={[styles.titleAndIcon, styles.andFlexBox]}>
        <Text style={[styles.bookingSummary, styles.confirm2Typo]}>
          Booking Summary
        </Text>
        <Image
          style={styles.iconlylightcloseSquare}
          contentFit="cover"
          source={require("../assets/iconlylightclose-square.png")}
        />
      </View>
      <View style={styles.serviceSummary}>
        <Image
          style={styles.imageIcon}
          contentFit="cover"
          source={require("../assets/image26.png")}
        />
        <View style={styles.detail}>
          <View style={[styles.serviceNameAndPrice, styles.andFlexBox]}>
            <Text style={styles.carWashAnd}>Car wash and cleaning</Text>
            <Text style={styles.text}>₹120</Text>
          </View>
          <View style={styles.serviceDetail}>
            <View style={[styles.date, styles.andFlexBox]}>
              <Text style={styles.date1}>Date</Text>
              <Text style={styles.feb2024Typo}>25 Feb, 2024</Text>
            </View>
            <View style={styles.line} />
            <View style={[styles.time, styles.andFlexBox]}>
              <Text style={styles.date1}>Time</Text>
              <Text style={styles.feb2024Typo}>08:30 AM</Text>
            </View>
            <View style={styles.line} />
            <View style={[styles.location, styles.andFlexBox]}>
              <Text style={styles.date1}>Location</Text>
              <Text style={[styles.exampleaddress, styles.feb2024Typo]}>
                exampleAddress
              </Text>
            </View>
            <View style={styles.line} />
            <View style={[styles.time, styles.andFlexBox]}>
              <Text style={styles.date1}>Service Status</Text>
              <Text style={styles.feb2024Typo}>Accepted</Text>
            </View>
            <View style={styles.line} />
            <View style={[styles.time, styles.andFlexBox]}>
              <Text style={styles.date1}>Quantity</Text>
              <Text style={styles.feb2024Typo}>*1</Text>
            </View>
            <View style={styles.line} />
            <View style={[styles.time, styles.andFlexBox]}>
              <Text style={styles.date1}>Payment Status</Text>
              <Text style={styles.feb2024Typo}>Pending</Text>
            </View>
          </View>
          <View style={styles.confirm}>
            <Button
              style={[styles.confirm1, styles.andFlexBox]}
              title="Confirm"
              size="medium"
              status="primary"
              appearance="outline"
              color="#5f60b9"
              textStyle={styles.confirmText}
              onPress={() => navigation.navigate("Payment")}
            >
              Confirm
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  confirmText: {
    fontWeight: "500",
    fontFamily: "WorkSans-Medium",
  },
  andFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  confirm2Typo: {
    color: Color.white,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  feb2024Typo: {
    textAlign: "right",
    color: Color.body,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  bookingSummary: {
    textAlign: "left",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  iconlylightcloseSquare: {
    width: 20,
    height: 20,
  },
  titleAndIcon: {
    borderTopLeftRadius: Border.br_8xs,
    borderTopRightRadius: Border.br_8xs,
    backgroundColor: Color.main,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_base,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  imageIcon: {
    maxWidth: "100%",
    overflow: "hidden",
    height: 125,
    width: "100%",
    alignSelf: "stretch",
    borderRadius: Border.br_8xs,
  },
  carWashAnd: {
    textTransform: "capitalize",
    color: Color.heading,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
  },
  text: {
    fontSize: FontSize.size_3xl,
    fontWeight: "600",
    fontFamily: FontFamily.workSansSemiBold,
    color: Color.main,
    textAlign: "left",
  },
  serviceNameAndPrice: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  date1: {
    fontSize: FontSize.size_xs,
    color: Color.heading,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  date: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  line: {
    backgroundColor: Color.border,
    height: 1,
    marginTop: 8,
    alignSelf: "stretch",
  },
  time: {
    marginTop: 8,
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  exampleaddress: {
    width: 171,
  },
  location: {
    width: 156,
    marginTop: 8,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  serviceDetail: {
    paddingTop: Padding.p_5xl,
    alignSelf: "stretch",
  },
  confirm1: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_6xs,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    borderRadius: Border.br_8xs,
  },
  confirm: {
    paddingTop: Padding.p_13xl,
    alignSelf: "stretch",
  },
  detail: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  serviceSummary: {
    borderBottomRightRadius: Border.br_8xs,
    borderBottomLeftRadius: Border.br_8xs,
    backgroundColor: Color.white,
    padding: Padding.p_5xl,
    alignSelf: "stretch",
  },
  popup: {
    position: "absolute",
    top: 130,
    left: 20,
    width: 335,
    borderRadius: Border.br_8xs,
  },
});

export default BookingSummaryContainer;
