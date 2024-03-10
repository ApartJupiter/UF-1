import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import ReviewContainer1 from "./ReviewContainer1";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const ReviewsWrapper = () => {
  return (
    <View style={styles.reviews}>
      <View style={styles.reviews1}>
        <Text style={[styles.reviews2, styles.viewAllTypo]}>Reviews</Text>
        <Text style={[styles.viewAll, styles.viewAllTypo]}>View All</Text>
      </View>
      <View style={styles.comments}>
        <ReviewContainer1
          uniqueId={require("../assets/image23.png")}
          dateLabel="02 Dec"
        />
        <ReviewContainer1
          uniqueId={require("../assets/image1.png")}
          dateLabel="25 Jan"
          propMarginTop={24}
          propMarginLeft={8}
          propTop={0}
          propLeft={293}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewAllTypo: {
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  reviews2: {
    fontSize: FontSize.size_base,
    textTransform: "capitalize",
    color: Color.heading,
  },
  viewAll: {
    fontSize: FontSize.size_xs,
    color: Color.body,
  },
  reviews1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  comments: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  reviews: {
    width: 336,
    marginTop: 32,
  },
});

export default ReviewsWrapper;
