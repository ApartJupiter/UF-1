import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import FormContainer1 from "../components/FormContainer1";
import FeaturedContainer from "../components/FeaturedContainer";
import FrameContainer1 from "../components/FrameContainer1";
import { useNavigation } from "@react-navigation/native";
import ServiceContainer from "../components/ServiceContainer";
import { FontFamily, FontSize, Padding, Border, Color } from "../GlobalStyles";

const MainScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainScreen}>
      <FormContainer1 />
      <View style={styles.offer}>
        <Image
          style={styles.bgIcon}
          contentFit="cover"
          source={require("../assets/bg.png")}
        />
        <View style={styles.pagination}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/1.png")}
          />
          <Image
            style={[styles.icon1, styles.lineSpaceBlock]}
            contentFit="cover"
            source={require("../assets/1.png")}
          />
          <View style={[styles.line, styles.lineSpaceBlock]} />
          <Image
            style={[styles.icon1, styles.lineSpaceBlock]}
            contentFit="cover"
            source={require("../assets/1.png")}
          />
        </View>
      </View>
      <FeaturedContainer />
      <View style={[styles.rating, styles.bgPosition]}>
        <Image
          style={styles.starsIcon}
          contentFit="cover"
          source={require("../assets/stars.png")}
        />
        <View style={styles.titleAndBtn}>
          <Text style={[styles.introducingCustomerRating, styles.ratingTypo]}>
            Introducing Customer Rating
          </Text>
          <View style={styles.seeYourRating}>
            <Text style={[styles.seeYourRating1, styles.viewAllTypo1]}>
              See Your Rating
            </Text>
          </View>
        </View>
      </View>
      <FrameContainer1 />
      <View style={[styles.locationAndSearch, styles.andFlexBox]}>
        <View style={[styles.location, styles.searchShadowBox]}>
          <Image
            style={styles.iconlylightlocation}
            contentFit="cover"
            source={require("../assets/iconlylightlocation.png")}
          />
          <Text style={[styles.thornridgeCirShiloh, styles.viewAllTypo]}>
            1901 Thornridge Cir. Shiloh...
          </Text>
          <View style={styles.iconWrapper}>
            <Image
              style={styles.icon3}
              contentFit="cover"
              source={require("../assets/icon10.png")}
            />
          </View>
        </View>
        <View style={styles.searchShadowBox}>
          <Image
            style={styles.iconlylightlocation}
            contentFit="cover"
            source={require("../assets/iconlylightsearch.png")}
          />
        </View>
      </View>
      <View style={[styles.frame, styles.framePosition]}>
        <Pressable
          style={[styles.services, styles.framePosition]}
          onPress={() => navigation.navigate("OnClickOfCategory")}
        >
          <View style={styles.services1}>
            <View style={[styles.bg, styles.bgPosition]} />
            <View style={[styles.titleAndLinkBtn, styles.andFlexBox]}>
              <Text style={[styles.services2, styles.ratingTypo]}>
                Services
              </Text>
              <Text style={[styles.viewAll, styles.viewAllTypo]}>view All</Text>
            </View>
            <View style={styles.serviceList}>
              <ServiceContainer employeeName="HandyMan" />
              <ServiceContainer
                employeeName="Wade Warren"
                propWidth={251}
                propMarginLeft="unset"
              />
            </View>
          </View>
        </Pressable>
        <Image
          style={[styles.iconlylightcategory, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/iconlylightcategory.png")}
        />
        <Pressable
          style={[styles.profile, styles.profilePosition]}
          onPress={() => navigation.navigate("UserProfile")}
        >
          <Image
            style={[styles.icon4, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/profile.png")}
          />
        </Pressable>
        <Image
          style={[styles.homeIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/home.png")}
        />
        <View style={[styles.hanymanAppParent, styles.hanymanLayout]}>
          <Image
            style={[styles.hanymanAppIcon, styles.hanymanLayout]}
            contentFit="cover"
            source={require("../assets/hanyman-app2.png")}
          />
          <Pressable
            style={[styles.profile1, styles.profile1Position]}
            onPress={() => navigation.navigate("UserProfile")}
          >
            <Image
              style={[styles.icon4, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/profile.png")}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lineSpaceBlock: {
    marginLeft: 6,
    height: 5,
  },
  bgPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  ratingTypo: {
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  viewAllTypo1: {
    fontSize: FontSize.size_sm,
    textTransform: "capitalize",
  },
  andFlexBox: {
    width: 334,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  searchShadowBox: {
    padding: Padding.p_base,
    shadowOpacity: 1,
    elevation: 50,
    shadowRadius: 50,
    shadowOffset: {
      width: 0,
      height: 24,
    },
    shadowColor: "rgba(0, 0, 0, 0.06)",
    borderRadius: Border.br_5xs,
    flexDirection: "row",
    backgroundColor: Color.white,
  },
  viewAllTypo: {
    color: Color.body,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  framePosition: {
    width: 600,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  profilePosition: {
    top: "28.28%",
    position: "absolute",
  },
  hanymanLayout: {
    height: 60,
    width: 375,
    left: 0,
    position: "absolute",
  },
  profile1Position: {
    top: "36.67%",
    position: "absolute",
  },
  bgIcon: {
    borderRadius: Border.br_xs,
    height: 179,
    maxWidth: "100%",
    alignSelf: "stretch",
    overflow: "hidden",
    width: "100%",
  },
  icon: {
    height: 5,
    width: 5,
  },
  icon1: {
    width: 5,
    marginLeft: 6,
  },
  line: {
    borderRadius: Border.br_lg,
    backgroundColor: Color.main,
    width: 18,
  },
  pagination: {
    marginTop: 16,
    flexDirection: "row",
  },
  offer: {
    top: 1097,
    width: 335,
    alignItems: "center",
    left: 20,
    position: "absolute",
  },
  starsIcon: {
    width: 208,
    height: 48,
  },
  introducingCustomerRating: {
    color: Color.white,
    textAlign: "center",
    textTransform: "capitalize",
    fontWeight: "500",
    fontSize: FontSize.size_lg,
    alignSelf: "stretch",
  },
  seeYourRating1: {
    color: Color.main,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  seeYourRating: {
    borderRadius: Border.br_8xs,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    marginTop: 24,
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: Color.white,
  },
  titleAndBtn: {
    width: 257,
    alignItems: "center",
  },
  rating: {
    top: 1629,
    backgroundColor: "rgba(95, 96, 185, 0.91)",
    height: 216,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 30,
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconlylightlocation: {
    height: 18,
    width: 18,
  },
  thornridgeCirShiloh: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  icon3: {
    width: 16,
    height: 16,
  },
  iconWrapper: {
    paddingLeft: 26,
    flexDirection: "row",
  },
  location: {
    width: 264,
    justifyContent: "space-between",
    alignItems: "center",
  },
  locationAndSearch: {
    top: 261,
    left: 26,
  },
  bg: {
    backgroundColor: Color.colorGhostwhite,
    top: 0,
    height: 396,
  },
  services2: {
    color: Color.heading,
    textAlign: "left",
    fontSize: FontSize.size_lg,
    fontWeight: "500",
  },
  viewAll: {
    fontSize: FontSize.size_sm,
    textTransform: "capitalize",
    textAlign: "center",
  },
  titleAndLinkBtn: {
    top: 24,
    left: 20,
  },
  serviceList: {
    top: 61,
    width: 580,
    justifyContent: "space-between",
    flexDirection: "row",
    left: 20,
    position: "absolute",
  },
  services1: {
    height: 396,
    alignSelf: "stretch",
  },
  services: {
    justifyContent: "center",
    top: 0,
    alignItems: "center",
  },
  iconlylightcategory: {
    height: "5.05%",
    width: "3.33%",
    right: "59.17%",
    bottom: "66.67%",
    left: "37.5%",
    top: "28.28%",
    position: "absolute",
  },
  icon4: {
    height: "100%",
    width: "100%",
  },
  profile: {
    left: "53.17%",
    right: "44.83%",
    bottom: "67.85%",
    width: "2%",
    height: "3.86%",
  },
  homeIcon: {
    height: "4.22%",
    width: "2.63%",
    top: "28.23%",
    right: "91.02%",
    bottom: "67.55%",
    left: "6.35%",
    position: "absolute",
  },
  hanymanAppIcon: {
    top: 0,
  },
  profile1: {
    left: "86.13%",
    right: "10.67%",
    bottom: "37.83%",
    width: "3.2%",
    height: "25.5%",
  },
  hanymanAppParent: {
    top: 90,
  },
  frame: {
    top: 661,
    height: 396,
    overflow: "hidden",
  },
  mainScreen: {
    flex: 1,
    height: 811,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default MainScreen;
