import * as React from "react";
import { Text, StyleSheet, View, StatusBar, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import BookingSummaryContainer from "../components/BookingSummaryContainer";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const BookingSummary = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bookingSummary}>
      <View style={[styles.navigation, styles.symbolsFlexBox]}>
        <View style={styles.time}>
          <Text style={styles.text}>9:41</Text>
        </View>
        <View style={[styles.symbols, styles.symbolsFlexBox]}>
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
      <Pressable
        style={styles.topNavPosition}
        barStyle="default"
        onPress={() => navigation.navigate("Payment")}
      />
      <BookingSummaryContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  symbolsFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  topNavPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_sm,
    fontWeight: "500",
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
  bookingSummary: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default BookingSummary;
