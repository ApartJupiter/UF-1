import * as React from "react";
import { StatusBar, StyleSheet, Text, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { Input } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import ServiceContainer1 from "../components/ServiceContainer1";
import Container from "../components/Container";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const OnClickOfCategory = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.onclickOfCategory}>
      <StatusBar style={styles.framePosition1} barStyle="default" />
      <View style={[styles.frame1, styles.frame1FlexBox]}>
        <View style={[styles.search, styles.searchSpaceBlock]}>
          <View style={styles.iconlylightsearchParent}>
            <Image
              style={styles.iconlylightsearch}
              contentFit="cover"
              source={require("../assets/iconlylightsearch1.png")}
            />
            <Text style={styles.searchHere}>Search here...</Text>
          </View>
        </View>
        <View style={[styles.searchAndFilter, styles.frame1FlexBox]}>
          <Input
            style={[styles.search1, styles.search1Layout]}
            placeholder="Search Here"
            placeholderTextColor="#6c757d"
            textStyle={styles.searchTextInputText}
          />
          <View style={[styles.filterBy, styles.search1Layout]}>
            <Image
              style={styles.iconlylightfilter}
              contentFit="cover"
              source={require("../assets/iconlylightfilter.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.frame2, styles.framePosition]}>
        <View style={[styles.allWrapper, styles.wrapperSpaceBlock]}>
          <Text style={[styles.all, styles.allTypo]}>All</Text>
        </View>
        <View style={[styles.wallPainingWrapper, styles.wrapperSpaceBlock]}>
          <Text style={[styles.wallPaining, styles.allTypo]}>Wall Paining</Text>
        </View>
        <View style={[styles.homePaintingWrapper, styles.wrapperSpaceBlock]}>
          <Text style={[styles.all, styles.allTypo]}>Home Painting</Text>
        </View>
      </View>
      <View style={[styles.frame3, styles.framePosition1]}>
        <Pressable
          style={styles.serviceList}
          onPress={() => navigation.navigate("BookTheServiceStep")}
        >
          <ServiceContainer1
            deviceDescription={require("../assets/image9.png")}
            serviceDescription="Eletronics"
            issueDescription={`Fixing Anroid Smart Devices around
Interior and Wiring`}
          />
          <ServiceContainer1
            deviceDescription={require("../assets/image10.png")}
            serviceDescription="Fixing"
            issueDescription={`Black and White Spot in display
and blur Images`}
            propMarginTop={24}
          />
          <ServiceContainer1
            deviceDescription={require("../assets/image11.png")}
            serviceDescription="pest control"
            issueDescription={`Retail Shop pest control and
Disinfection of entire premises `}
            propMarginTop={24}
          />
          <ServiceContainer1
            deviceDescription={require("../assets/image12.png")}
            serviceDescription="Install"
            issueDescription={`Uninstallation and Flickering TV
Display Screen`}
            propMarginTop={24}
          />
        </Pressable>
        <Container />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchTextInputText: {
    fontWeight: "500",
    fontFamily: "WorkSans-Medium",
    color: "#6c757d",
  },
  framePosition1: {
    width: 375,
    left: 0,
    position: "absolute",
    alignItems: "center",
    overflow: "hidden",
  },
  frame1FlexBox: {
    width: 335,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  searchSpaceBlock: {
    padding: Padding.p_base,
    width: 271,
    backgroundColor: Color.background,
    alignItems: "center",
  },
  search1Layout: {
    borderRadius: Border.br_5xs,
    flexDirection: "row",
  },
  framePosition: {
    left: 20,
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  wrapperSpaceBlock: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_6xl,
    borderRadius: Border.br_71xl,
    flexDirection: "row",
    alignItems: "center",
  },
  allTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  iconlylightsearch: {
    width: 16,
    height: 16,
  },
  searchHere: {
    fontSize: FontSize.size_xs,
    marginLeft: 10,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    color: Color.body,
  },
  iconlylightsearchParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  search: {
    borderRadius: Border.br_8xs,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  search1: {
    padding: Padding.p_base,
    width: 271,
    backgroundColor: Color.background,
    alignItems: "center",
  },
  iconlylightfilter: {
    width: 24,
    height: 24,
  },
  filterBy: {
    padding: Padding.p_xs,
    backgroundColor: Color.main,
  },
  searchAndFilter: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  frame1: {
    top: 105,
    justifyContent: "space-between",
    flexDirection: "row",
    left: 20,
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  all: {
    color: Color.body,
    fontSize: FontSize.size_sm,
  },
  allWrapper: {
    backgroundColor: Color.background,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_6xl,
    borderRadius: Border.br_71xl,
  },
  wallPaining: {
    color: Color.white,
  },
  wallPainingWrapper: {
    backgroundColor: Color.main,
    justifyContent: "space-between",
  },
  homePaintingWrapper: {
    backgroundColor: Color.background,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_6xl,
    borderRadius: Border.br_71xl,
    justifyContent: "space-between",
  },
  frame2: {
    top: 169,
    width: 385,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  serviceList: {
    alignSelf: "stretch",
  },
  frame3: {
    top: 233,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  onclickOfCategory: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 1618,
    overflow: "hidden",
  },
});

export default OnClickOfCategory;
