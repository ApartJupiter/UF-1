import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const FilterByCategoryNameListContai = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.rating, styles.ratingBorder]}
      onPress={() => navigation.navigate("ServiceFilter1")}
    >
      <Text style={[styles.categoryNameList, styles.paintingTypo]}>
        Category name List
      </Text>
      <View style={styles.parent}>
        <View style={[styles.view, styles.viewFlexBox]}>
          <View style={styles.handymanInfo}>
            <View>
              <Text style={[styles.painting, styles.paintingTypo]}>
                Painting
              </Text>
              <Text style={[styles.services, styles.paintingTypo]}>
                33 Services
              </Text>
            </View>
          </View>
          <View style={[styles.checkBox, styles.checkBoxLayout]} />
        </View>
        <View style={[styles.frameChild, styles.view1SpaceBlock]} />
        <View style={[styles.view1, styles.view1SpaceBlock]}>
          <View style={styles.handymanInfo}>
            <View>
              <Text style={[styles.painting, styles.paintingTypo]}>
                Painting
              </Text>
              <Text style={[styles.services, styles.paintingTypo]}>
                33 Services
              </Text>
            </View>
          </View>
          <Image
            style={styles.checkBoxLayout}
            contentFit="cover"
            source={require("../assets/checkbox.png")}
          />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  ratingBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.background,
  },
  paintingTypo: {
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  viewFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  checkBoxLayout: {
    height: 14,
    width: 14,
  },
  view1SpaceBlock: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  categoryNameList: {
    fontSize: FontSize.size_base,
    textTransform: "capitalize",
    color: Color.heading,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  painting: {
    fontSize: FontSize.size_sm,
    color: Color.heading,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  services: {
    fontSize: FontSize.size_xs,
    color: Color.body,
    marginTop: 8,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  handymanInfo: {
    alignItems: "center",
    flexDirection: "row",
  },
  checkBox: {
    borderRadius: Border.br_smi,
    borderColor: Color.main,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.background,
  },
  view: {
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  frameChild: {
    backgroundColor: Color.border,
    height: 1,
  },
  view1: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  parent: {
    width: 293,
    marginTop: 10,
  },
  rating: {
    position: "absolute",
    top: 105,
    left: 21,
    borderRadius: Border.br_xs,
    borderColor: Color.border,
    width: 335,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_base,
  },
});

export default FilterByCategoryNameListContai;
