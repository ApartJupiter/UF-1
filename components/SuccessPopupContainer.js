import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const SuccessPopupContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.popup}>
      <Image
        style={styles.checkIcon}
        contentFit="cover"
        source={require("../assets/check1.png")}
      />
      <View style={styles.content}>
        <View style={styles.text}>
          <Text style={[styles.bookingSuccessful, styles.itIsATypo]}>
            Booking Successful
          </Text>
          <Text
            style={[styles.itIsA, styles.itIsATypo]}
          >{`It is a long established fact that a reader will be distracted by the readable `}</Text>
        </View>
        <Button
          style={styles.button}
          title="Back To Home"
          appearance="filled"
          color="#5f60b9"
          textStyle={styles.buttonText}
          onPress={() => navigation.navigate("MainScreen")}
        >
          Back To Home
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    fontWeight: "500",
    fontFamily: "WorkSans-Medium",
  },
  itIsATypo: {
    textAlign: "center",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    alignSelf: "stretch",
  },
  checkIcon: {
    width: 106,
    height: 105,
  },
  bookingSuccessful: {
    fontSize: FontSize.size_3xl,
    textTransform: "capitalize",
    color: Color.heading,
  },
  itIsA: {
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    color: Color.body,
    marginTop: 12,
  },
  text: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_smi,
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
    top: 189,
    left: 16,
    backgroundColor: Color.white,
    width: 343,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_37xl,
    alignItems: "center",
    borderRadius: Border.br_xs,
  },
});

export default SuccessPopupContainer;
