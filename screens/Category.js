import * as React from "react";
import { Text, StyleSheet, View, StatusBar, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import CategoryContainer from "../components/CategoryContainer";
import PainterContainer from "../components/PainterContainer";
import ACRepairContainer from "../components/ACRepairContainer";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Category = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.category}>
      <View style={[styles.navigation, styles.viewFlexBox]}>
        <View style={styles.time}>
          <Text style={styles.text}>9:41</Text>
        </View>
        <View style={styles.symbols}>
          <Image
            style={styles.batteryIcon}
            contentFit="cover"
            source={require("../assets/battery3.png")}
          />
          <Image
            style={styles.wiFiIcon}
            contentFit="cover"
            source={require("../assets/wifi5.png")}
          />
        </View>
      </View>
      <StatusBar style={styles.topNavPosition} barStyle="default" />
      <Pressable
        style={styles.categoryList}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "ServiceFilter" })
        }
      >
        <CategoryContainer />
        <View style={[styles.view, styles.viewFlexBox]}>
          <PainterContainer
            dimensionCode={require("../assets/icon13.png")}
            serviceTypeCode="Painter"
          />
          <PainterContainer
            dimensionCode={require("../assets/icon14.png")}
            serviceTypeCode="Pest Control"
            propLeft={30}
          />
        </View>
        <View style={[styles.view, styles.viewFlexBox]}>
          <View style={[styles.carpenter, styles.bgBorder]}>
            <View style={styles.bgPosition}>
              <View style={[styles.bg, styles.bgPosition]} />
              <Image
                style={[styles.icon1, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/icon15.png")}
              />
            </View>
            <Text style={[styles.carpenter1, styles.security1Typo]}>
              Carpenter
            </Text>
          </View>
          <View style={[styles.carpenter, styles.bgBorder]}>
            <View style={styles.bgPosition}>
              <View style={[styles.bg, styles.bgPosition]} />
              <Image
                style={[styles.icon3, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/icon16.png")}
              />
            </View>
            <Text style={[styles.security1, styles.security1Typo]}>
              Security
            </Text>
          </View>
        </View>
        <View style={[styles.view, styles.viewFlexBox]}>
          <ACRepairContainer
            serviceId={require("../assets/icon17.png")}
            serviceType="AC Repair"
          />
          <ACRepairContainer
            serviceId={require("../assets/icon18.png")}
            serviceType="Salon"
            propHeight="52.17%"
            propBottom="24.35%"
            propLeft={57}
          />
        </View>
      </Pressable>
      <Image
        style={[styles.hanymanAppIcon, styles.topNavPosition]}
        contentFit="cover"
        source={require("../assets/hanyman-app3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  topNavPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  bgBorder: {
    borderWidth: 1.5,
    borderColor: Color.border,
    borderStyle: "solid",
  },
  bgPosition: {
    height: 115,
    width: 157,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  security1Typo: {
    color: Color.heading,
    fontFamily: FontFamily.workSansMedium,
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
    top: 135,
    textAlign: "left",
    fontWeight: "500",
    position: "absolute",
  },
  text: {
    marginTop: -8.5,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.sFProDisplay,
    color: Color.white,
    textAlign: "left",
    fontWeight: "500",
    top: "50%",
    left: 0,
    position: "absolute",
  },
  time: {
    width: 27,
    height: 17,
  },
  batteryIcon: {
    marginTop: -5.8,
    right: 1,
    width: 25,
    height: 12,
    top: "50%",
    position: "absolute",
  },
  wiFiIcon: {
    width: 15,
    height: 11,
  },
  symbols: {
    width: 51,
    height: 12,
    overflow: "hidden",
  },
  navigation: {
    backgroundColor: Color.colorCornflowerblue,
    height: 31,
    alignItems: "center",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    width: 375,
    left: 0,
    position: "absolute",
    top: 0,
    flexDirection: "row",
  },
  view: {
    marginTop: 20,
    width: 334,
  },
  bg: {
    borderTopLeftRadius: Border.br_xs,
    borderTopRightRadius: Border.br_xs,
    backgroundColor: Color.colorGhostwhite,
    borderWidth: 1.5,
    borderColor: Color.border,
    borderStyle: "solid",
  },
  icon1: {
    height: "52.17%",
    width: "46.69%",
    top: "23.48%",
    right: "26.56%",
    bottom: "24.35%",
    left: "26.75%",
  },
  carpenter1: {
    left: 39,
  },
  carpenter: {
    borderRadius: Border.br_xs,
    width: 160,
    height: 177,
    backgroundColor: Color.white,
  },
  icon3: {
    height: "37.74%",
    width: "38.22%",
    top: "31.3%",
    right: "30.57%",
    bottom: "30.96%",
    left: "31.21%",
  },
  security1: {
    left: 46,
  },
  categoryList: {
    top: 105,
    left: 20,
    width: 334,
    position: "absolute",
  },
  hanymanAppIcon: {
    top: 862,
    height: 60,
  },
  category: {
    flex: 1,
    width: "100%",
    height: 922,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default Category;
