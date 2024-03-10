import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "@ui-kitten/components";
import ImageStatusContainer from "./ImageStatusContainer";
import ApartmentCleaningContainer from "./ApartmentCleaningContainer";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Padding, Border, Color } from "../GlobalStyles";

const BookingCardContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bookingCard}>
      <ImageStatusContainer
        dimensionId={require("../assets/image27.png")}
        statusLabel="Pending"
      />
      <ApartmentCleaningContainer
        cleaningServiceType="Apartment Cleaning"
        address="G-84 Laxmi Complex, Manjalpur, Vadodara"
        appointmentDateTime="02 Febuary, 2022 at "
        customerName="Manav Patel"
      />
      <View style={styles.line} />
      <View style={styles.btn}>
        <Button
          style={styles.acceptFlexBox}
          title="Accept"
          size="medium"
          status="primary"
          appearance="outline"
          color="#5f60b9"
          textStyle={styles.acceptText}
          onPress={() => navigation.navigate("OnClickOfBookingServiceS")}
        >
          Accept
        </Button>
        <Button
          style={[styles.decline, styles.acceptFlexBox]}
          title="Decline"
          appearance="filled"
          color="#f6f7f9"
          textStyle={styles.declineText}
        >
          Decline
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  acceptText: {
    fontWeight: "500",
    fontFamily: "WorkSans-Medium",
  },
  declineText: {
    fontWeight: "500",
    fontFamily: "WorkSans-Medium",
  },
  accept1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
  },
  acceptFlexBox: {
    paddingVertical: Padding.p_6xs,
    paddingHorizontal: 0,
    justifyContent: "center",
    alignItems: "center",
    height: 38,
    width: 141,
    borderRadius: Border.br_8xs,
    flexDirection: "row",
  },
  line: {
    backgroundColor: Color.border,
    width: 303,
    height: 1,
    marginTop: 20,
  },
  decline: {
    marginLeft: 20,
  },
  btn: {
    flexDirection: "row",
    marginTop: 20,
  },
  bookingCard: {
    borderRadius: Border.br_xs,
    borderStyle: "solid",
    borderColor: Color.border,
    borderWidth: 1,
    padding: Padding.p_base,
  },
});

export default BookingCardContainer;
