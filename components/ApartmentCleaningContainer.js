import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const ApartmentCleaningContainer = ({
  cleaningServiceType,
  address,
  appointmentDateTime,
  customerName,
}) => {
  return (
    <View style={styles.apartmentCleaning}>
      <View>
        <View style={[styles.titleAndId, styles.dateFlexBox]}>
          <Text style={[styles.apartmentCleaning1, styles.text1Text]}>
            {cleaningServiceType}
          </Text>
          <View style={styles.id}>
            <Text style={styles.text}>#123</Text>
          </View>
        </View>
        <View style={[styles.price, styles.dateFlexBox]}>
          <Text style={[styles.text1, styles.text1Text]}>₹120</Text>
          <Text style={styles.off}>21% Off</Text>
        </View>
      </View>
      <View style={styles.apartmentCleaning}>
        <View style={styles.dateFlexBox}>
          <Image
            style={styles.iconlylightlocation}
            contentFit="cover"
            source={require("../assets/iconlylightlocation2.png")}
          />
          <Text
            style={[styles.washingtonAventure, styles.washingtonAventureTypo]}
          >
            {address}
          </Text>
        </View>
        <View style={[styles.date, styles.dateFlexBox]}>
          <Image
            style={styles.iconlylightlocation}
            contentFit="cover"
            source={require("../assets/iconlylightcalendar.png")}
          />
          <Text
            style={[
              styles.febuary2022AtContainer,
              styles.washingtonAventureTypo,
            ]}
          >
            <Text style={styles.febuary2022At}>{appointmentDateTime}</Text>
            <Text style={styles.am}>8:30 AM</Text>
          </Text>
        </View>
        <View style={[styles.date, styles.dateFlexBox]}>
          <Image
            style={styles.iconlylightlocation}
            contentFit="cover"
            source={require("../assets/iconlylightprofile3.png")}
          />
          <Text
            style={[styles.washingtonAventure, styles.washingtonAventureTypo]}
          >
            {customerName}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dateFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  text1Text: {
    textAlign: "left",
    textTransform: "capitalize",
  },
  washingtonAventureTypo: {
    marginLeft: 10,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  apartmentCleaning1: {
    fontSize: FontSize.size_base,
    color: Color.heading,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  text: {
    fontSize: FontSize.size_sm,
    color: Color.white,
    fontFamily: FontFamily.workSansSemiBold,
    fontWeight: "600",
    textAlign: "left",
    textTransform: "capitalize",
  },
  id: {
    borderRadius: Border.br_24xl,
    backgroundColor: Color.main,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_9xs,
    flexDirection: "row",
  },
  titleAndId: {
    width: 303,
    justifyContent: "space-between",
  },
  text1: {
    fontSize: FontSize.size_3xl,
    fontWeight: "700",
    fontFamily: FontFamily.workSansBold,
    color: Color.main,
  },
  off: {
    color: Color.colorMediumseagreen_100,
    marginLeft: 12,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.workSansSemiBold,
    fontWeight: "600",
    textAlign: "left",
    textTransform: "capitalize",
  },
  price: {
    borderRadius: Border.br_121xl,
    marginTop: 16,
  },
  iconlylightlocation: {
    width: 14,
    height: 14,
  },
  washingtonAventure: {
    color: Color.body,
  },
  febuary2022At: {
    color: Color.body,
  },
  am: {
    color: Color.heading,
  },
  febuary2022AtContainer: {
    textTransform: "capitalize",
    marginLeft: 10,
  },
  date: {
    marginTop: 15,
  },
  apartmentCleaning: {
    marginTop: 20,
  },
});

export default ApartmentCleaningContainer;
