import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import FeaturedServiceContainer from "./FeaturedServiceContainer";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const FeaturedContainer = () => {
  return (
    <View style={styles.featured}>
      <View style={styles.featured1}>
        <View style={[styles.titleAndLinkBtn, styles.viewFlexBox]}>
          <Text style={[styles.featured2, styles.viewAllTypo]}>Featured</Text>
          <Text style={[styles.viewAll, styles.viewAllTypo]}>view All</Text>
        </View>
        <View style={[styles.view, styles.viewFlexBox]}>
          <FeaturedServiceContainer
            dimensionCode={require("../assets/image3.png")}
            taskDescription="Painting for home"
          />
          <FeaturedServiceContainer
            dimensionCode={require("../assets/image5.png")}
            taskDescription="Fixing TV Wire..."
            propLeft={101}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  viewAllTypo: {
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  featured2: {
    fontSize: FontSize.size_lg,
    color: Color.heading,
    textAlign: "left",
  },
  viewAll: {
    fontSize: FontSize.size_sm,
    textTransform: "capitalize",
    color: Color.body,
    textAlign: "center",
  },
  titleAndLinkBtn: {
    alignItems: "center",
  },
  view: {
    marginTop: 16,
  },
  featured1: {
    alignSelf: "stretch",
  },
  featured: {
    position: "absolute",
    top: 1329,
    left: 21,
    width: 334,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FeaturedContainer;
