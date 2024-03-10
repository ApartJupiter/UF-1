import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const DetailContainer = () => {
  return (
    <View style={styles.detail}>
      <View>
        <Text style={[styles.apartmentCleaning, styles.date1FlexBox]}>
          Apartment Cleaning
        </Text>
        <View style={styles.serviceDetail}>
          <View style={styles.dateFlexBox}>
            <Text style={[styles.date1, styles.date1Typo]}>Date :</Text>
            <Text style={[styles.march2023, styles.date1Typo]}>
              26 Jan, 2022
            </Text>
          </View>
          <View style={[styles.time, styles.dateFlexBox]}>
            <Text style={[styles.date1, styles.date1Typo]}>Time :</Text>
            <Text style={[styles.march2023, styles.date1Typo]}>04:00 PM</Text>
          </View>
        </View>
      </View>
      <Image
        style={styles.imageIcon}
        contentFit="cover"
        source={require("../assets/image17.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  date1FlexBox: {
    textAlign: "left",
    color: Color.heading,
  },
  date1Typo: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  dateFlexBox: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  apartmentCleaning: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    color: Color.heading,
  },
  date1: {
    textAlign: "left",
    color: Color.heading,
  },
  march2023: {
    color: Color.body,
    textAlign: "right",
    marginLeft: 10,
  },
  time: {
    marginTop: 10,
  },
  serviceDetail: {
    marginTop: 16,
  },
  imageIcon: {
    borderRadius: Border.br_3xs,
    width: 80,
    height: 80,
    marginLeft: 79,
  },
  detail: {
    position: "absolute",
    top: 167,
    left: 20,
    flexDirection: "row",
  },
});

export default DetailContainer;
