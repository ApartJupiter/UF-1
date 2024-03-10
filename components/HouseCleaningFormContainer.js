import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "@ui-kitten/components";
import { Button as RNPButton } from "react-native-paper";
import ImageStatusContainer from "./ImageStatusContainer";
import ApartmentCleaningContainer from "./ApartmentCleaningContainer";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, Color } from "../GlobalStyles";

const HouseCleaningFormContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <ImageStatusContainer
        dimensionId={require("../assets/image28.png")}
        statusLabel="completed"
        propBackgroundColor="#3bae5c"
        propFontWeight="600"
        propFontFamily="WorkSans-SemiBold"
      />
      <ApartmentCleaningContainer
        cleaningServiceType="House Cleaning"
        address="66-B Kajal Soc, Makarpura, Vadodara"
        appointmentDateTime="15 Febuary, 2022 at "
        customerName="Gurjyot Gill"
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
          textStyle={styles.accept1Text}
          onPress={() => navigation.navigate("OnClickOfBookingServiceS")}
        >
          Accept
        </Button>
        <Button
          style={[styles.decline, styles.acceptFlexBox]}
          title="Decline"
          size="medium"
          status="primary"
          appearance="filled"
          color="#f6f7f9"
          textStyle={styles.decline1Text}
        >
          Decline
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  accept1Text: {
    fontWeight: "500",
    fontFamily: "WorkSans-Medium",
  },
  accept2Btn: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "WorkSans-Medium",
  },
  decline1Text: {
    fontWeight: "500",
    fontFamily: "WorkSans-Medium",
  },
  acceptFlexBox: {
    paddingVertical: Padding.p_6xs,
    paddingHorizontal: 0,
    justifyContent: "center",
    alignItems: "center",
    height: 38,
    borderRadius: Border.br_8xs,
    flex: 1,
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
    width: 302,
    flexDirection: "row",
    marginTop: 20,
  },
  view: {
    borderRadius: Border.br_xs,
    borderStyle: "solid",
    borderColor: Color.border,
    borderWidth: 1,
    padding: Padding.p_base,
    marginTop: 24,
  },
});

export default HouseCleaningFormContainer;
