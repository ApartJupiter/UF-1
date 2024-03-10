import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import SmartHomeContainer from "./SmartHomeContainer";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const FormContainer1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.category, styles.frame1FlexBox]}>
      <View style={styles.category1}>
        <View style={[styles.titleAndLinkBtn, styles.viewFlexBox]}>
          <Text style={styles.category2}>Category</Text>
          <Pressable onPress={() => navigation.navigate("Category")}>
            <Text style={styles.viewAll1}>view All</Text>
          </Pressable>
        </View>
        <View style={[styles.view, styles.viewFlexBox]}>
          <Pressable
            style={[styles.plumber, styles.plumberLayout]}
            onPress={() => navigation.navigate("OnClickOfCategory")}
          >
            <View style={styles.frame}>
              <View style={[styles.bg, styles.frameLayout]} />
              <View style={styles.bg1} />
            </View>
            <View style={[styles.frame1, styles.frame1FlexBox]}>
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/icon5.png")}
              />
              <Text style={[styles.plumber1, styles.plumber1Typo]}>
                Plumber
              </Text>
            </View>
          </Pressable>
          <Pressable
            style={styles.plumberLayout}
            onPress={() => navigation.navigate("OnClickOfCategory")}
          >
            <View style={[styles.frame2, styles.frameLayout]}>
              <View style={[styles.frame3, styles.frameLayout]}>
                <View style={[styles.bg, styles.frameLayout]} />
                <View style={[styles.bg3, styles.frameLayout]} />
              </View>
              <Image
                style={styles.icon1}
                contentFit="cover"
                source={require("../assets/icon6.png")}
              />
            </View>
            <Text style={[styles.carpenter1, styles.plumber1Typo]}>
              Carpenter
            </Text>
          </Pressable>
          <View style={[styles.painting, styles.plumberLayout]}>
            <Image
              style={[styles.frameIcon, styles.frameLayout]}
              contentFit="cover"
              source={require("../assets/frame1.png")}
            />
            <Text style={[styles.carpenter1, styles.plumber1Typo]}>
              Painting
            </Text>
          </View>
        </View>
        <View style={[styles.view, styles.viewFlexBox]}>
          <SmartHomeContainer
            dimensionId={require("../assets/icon7.png")}
            roomTypeLabel="Salon"
            onSalonPress={() => navigation.navigate("OnClickOfCategory")}
          />
          <SmartHomeContainer
            dimensionId={require("../assets/icon8.png")}
            roomTypeLabel="Smart home"
            propHeight="36.04%"
            propBottom="48.65%"
            propLeft={12}
            onSalonPress={() => navigation.navigate("OnClickOfCategory")}
          />
          <SmartHomeContainer
            dimensionId={require("../assets/icon9.png")}
            roomTypeLabel="AC Repair"
            propHeight="36.13%"
            propBottom="48.56%"
            propLeft={20}
            onSalonPress={() => navigation.navigate("OnClickOfCategory")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frame1FlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  viewFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  plumberLayout: {
    height: 111,
    width: 100,
    borderWidth: 1,
    borderColor: Color.border,
    borderStyle: "solid",
    borderRadius: Border.br_xs,
    alignItems: "center",
  },
  frameLayout: {
    height: 75,
    width: 98,
  },
  plumber1Typo: {
    fontSize: FontSize.size_xs,
    textAlign: "center",
    textTransform: "capitalize",
    color: Color.heading,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  category2: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.heading,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  viewAll1: {
    fontSize: FontSize.size_sm,
    color: Color.body,
    textAlign: "center",
    textTransform: "capitalize",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  titleAndLinkBtn: {
    alignItems: "center",
  },
  bg: {
    backgroundColor: Color.colorGhostwhite,
    height: 75,
    borderTopRightRadius: Border.br_xs,
    borderTopLeftRadius: Border.br_xs,
  },
  bg1: {
    borderBottomRightRadius: Border.br_xs,
    borderBottomLeftRadius: Border.br_xs,
    height: 31,
    backgroundColor: Color.white,
    width: 98,
  },
  frame: {
    overflow: "hidden",
    width: 98,
    alignItems: "center",
  },
  icon: {
    width: 38,
    height: 40,
  },
  plumber1: {
    marginTop: 18,
  },
  frame1: {
    width: 50,
    height: 95,
    marginTop: -92,
    overflow: "hidden",
  },
  plumber: {
    justifyContent: "flex-end",
  },
  bg3: {
    marginTop: -75,
    backgroundColor: Color.colorGhostwhite,
    height: 75,
    borderTopRightRadius: Border.br_xs,
    borderTopLeftRadius: Border.br_xs,
  },
  frame3: {
    top: 0,
    left: 0,
    overflow: "hidden",
    alignItems: "center",
    position: "absolute",
  },
  icon1: {
    height: "53.33%",
    width: "49.8%",
    top: "22.67%",
    right: "24.69%",
    bottom: "24%",
    left: "25.51%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  frame2: {
    overflow: "hidden",
  },
  carpenter1: {
    marginTop: 10,
  },
  frameIcon: {
    borderTopRightRadius: Border.br_xs,
    borderTopLeftRadius: Border.br_xs,
    height: 75,
    overflow: "hidden",
  },
  painting: {
    backgroundColor: Color.white,
  },
  view: {
    marginTop: 16,
  },
  category1: {
    paddingRight: Padding.p_12xs,
    justifyContent: "flex-end",
    alignSelf: "stretch",
  },
  category: {
    top: 346,
    left: 20,
    width: 335,
    position: "absolute",
  },
});

export default FormContainer1;
