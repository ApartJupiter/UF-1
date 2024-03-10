import * as React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { Button } from "@ui-kitten/components";
import StepContainer from "../components/StepContainer";
import DetailForm from "../components/DetailForm";
import { useNavigation } from "@react-navigation/native";
import { Border, Padding, Color } from "../GlobalStyles";

const BookTheServiceStep = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bookTheServiceStep1}>
      <StatusBar style={styles.framePosition} barStyle="default" />
      <StepContainer />
      <DetailForm />
      <Image
        style={[styles.frameIcon, styles.framePosition]}
        contentFit="cover"
        source={require("../assets/frame5.png")}
      />
      <Button
        style={styles.nextBtn}
        title="Next"
        appearance=""
        color="#5f60b9"
        textStyle={styles.nextBtnText}
        onPress={() => navigation.navigate("BookTheServiceStep1")}
      >
        Next
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  nextBtnText: {
    fontWeight: "500",
    fontFamily: "WorkSans-Medium",
  },
  framePosition: {
    width: 375,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frameIcon: {
    top: 752,
    height: 60,
  },
  nextBtn: {
    top: 595,
    left: 20,
    borderRadius: Border.br_xs,
    width: 335,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_smi,
    position: "absolute",
  },
  bookTheServiceStep1: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default BookTheServiceStep;
