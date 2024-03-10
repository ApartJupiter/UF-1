import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import ReviewContainer from "./ReviewContainer";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const ReviewCard = () => {
  return (
    <View style={styles.frame}>
      <View style={styles.reviews}>
        <View style={styles.reviews1}>
          <Text style={styles.reviews2}>Reviews</Text>
          <Text style={[styles.viewAll, styles.decTypo]}>View All</Text>
        </View>
        <View style={styles.comments}>
          <ReviewContainer
            datePosted="25 Jan"
            userFeedbackText="User  2"
            feedbackMessage="Great Service! "
          />
          <View style={styles.comment1}>
            <View style={styles.frame1}>
              <Image
                style={[styles.imageIcon, styles.frame2Position]}
                contentFit="cover"
                source={require("../assets/image2.png")}
              />
              <Text style={[styles.dec, styles.decTypo]}>02 Dec</Text>
              <View style={[styles.frame2, styles.frame2Position]}>
                <Text style={[styles.user1, styles.textTypo]}>User 1</Text>
                <View style={styles.rating}>
                  <View style={styles.starParent}>
                    <Image
                      style={styles.frameLayout}
                      contentFit="cover"
                      source={require("../assets/star-1.png")}
                    />
                    <Image
                      style={[styles.frameItem, styles.frameLayout]}
                      contentFit="cover"
                      source={require("../assets/star-1.png")}
                    />
                    <Image
                      style={[styles.frameItem, styles.frameLayout]}
                      contentFit="cover"
                      source={require("../assets/star-1.png")}
                    />
                    <Image
                      style={[styles.frameItem, styles.frameLayout]}
                      contentFit="cover"
                      source={require("../assets/star-1.png")}
                    />
                    <Image
                      style={[styles.frameItem, styles.frameLayout]}
                      contentFit="cover"
                      source={require("../assets/star-1.png")}
                    />
                  </View>
                  <Text style={[styles.text, styles.textTypo]}>4.5</Text>
                </View>
              </View>
            </View>
            <Text style={[styles.whatAnExperience, styles.textTypo]}>
              What an experience! Would recommend!!!
            </Text>
          </View>
          <ReviewContainer
            datePosted="30 Jan"
            userFeedbackText="User 3"
            feedbackMessage="Amazing Work Done "
            propPaddingRight={1}
            propMarginTop={24}
            propWidth={333}
          />
        </View>
      </View>
      <Image
        style={styles.hanymanAppIcon}
        contentFit="cover"
        source={require("../assets/hanyman-app1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  decTypo: {
    fontSize: FontSize.size_xs,
    color: Color.body,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  frame2Position: {
    top: 0,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  frameLayout: {
    height: 16,
    width: 16,
    borderRadius: Border.br_12xs,
  },
  reviews2: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    color: Color.heading,
    textTransform: "capitalize",
  },
  viewAll: {
    color: Color.body,
  },
  reviews1: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: 335,
    alignItems: "center",
  },
  imageIcon: {
    width: 50,
    height: 50,
    left: 0,
  },
  dec: {
    top: 1,
    left: 294,
    color: Color.body,
    position: "absolute",
  },
  user1: {
    color: Color.heading,
    textTransform: "capitalize",
    fontSize: FontSize.size_sm,
  },
  frameItem: {
    marginLeft: 1,
  },
  starParent: {
    flexDirection: "row",
  },
  text: {
    marginLeft: 4,
    color: Color.body,
  },
  rating: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  frame2: {
    left: 66,
    width: 109,
    height: 40,
    overflow: "hidden",
  },
  frame1: {
    height: 50,
    width: 335,
    overflow: "hidden",
  },
  whatAnExperience: {
    lineHeight: 20,
    width: 268,
    marginTop: 6,
    color: Color.body,
  },
  comment1: {
    height: 96,
    alignItems: "flex-end",
    marginTop: 24,
    width: 335,
  },
  comments: {
    marginTop: 16,
  },
  reviews: {
    height: 384,
  },
  hanymanAppIcon: {
    height: 60,
    marginTop: -60,
    width: 375,
  },
  frame: {
    top: 427,
    height: 385,
    justifyContent: "flex-end",
    alignItems: "center",
    overflow: "hidden",
    width: 375,
    left: 0,
    position: "absolute",
  },
});

export default ReviewCard;
