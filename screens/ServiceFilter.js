import * as React from "react";
import { Text, StyleSheet, View, StatusBar, Pressable } from "react-native";
import { Image } from "expo-image";
import PriceContainer from "../components/PriceContainer";
import RatingWrapper from "../components/RatingWrapper";
import FilterByCategoryNameListContai from "../components/FilterByCategoryNameListContai";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const ServiceFilter = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.serviceFilter}>
      <View style={[styles.navigation, styles.topNavFlexBox]}>
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
      <StatusBar style={styles.topNavFlexBox} barStyle="default" />
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/9.png")}
      />
      <PriceContainer />
      <RatingWrapper />
      <FilterByCategoryNameListContai />
      <Image
        style={styles.hanymanAppIcon}
        contentFit="cover"
        source={require("../assets/hanyman-app2.png")}
      />
      <Image
        style={[styles.iconlylightcategory, styles.icon1Layout]}
        contentFit="cover"
        source={require("../assets/iconlylightcategory.png")}
      />
      <Pressable
        style={[styles.profile, styles.profilePosition]}
        onPress={() => navigation.navigate("UserProfile")}
      >
        <Image
          style={[styles.icon1, styles.icon1Layout]}
          contentFit="cover"
          source={require("../assets/profile.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  topNavFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: 375,
    left: 0,
    position: "absolute",
  },
  icon1Layout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  profilePosition: {
    top: "95.2%",
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
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  navigation: {
    top: 0,
    backgroundColor: Color.colorCornflowerblue,
    height: 31,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
  },
  icon: {
    top: 753,
    left: 138,
    width: 10,
    height: 10,
    position: "absolute",
  },
  hanymanAppIcon: {
    top: 751,
    height: 60,
    width: 375,
    left: 0,
    position: "absolute",
  },
  iconlylightcategory: {
    height: "2.46%",
    width: "5.33%",
    right: "34.67%",
    bottom: "2.34%",
    left: "60%",
    top: "95.2%",
    position: "absolute",
  },
  icon1: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
  },
  profile: {
    left: "86.13%",
    right: "10.67%",
    bottom: "2.92%",
    width: "3.2%",
    height: "1.88%",
  },
  serviceFilter: {
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default ServiceFilter;
