import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, Border, FontSize, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const HandymanInfoContainer = ({ propWidth }) => {
  const handymanInfo1Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  return (
    <View style={[styles.handymanInfo, handymanInfo1Style]}>
      <Image
        style={styles.imageIcon}
        contentFit="cover"
        source={require("../assets/image14.png")}
      />
      <View>
        <Text style={[styles.handyman, styles.handymanTypo]}>HandyMan</Text>
        <Text style={[styles.yearOfJoining, styles.handymanTypo]}>
          Year of Joining
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  handymanTypo: {
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  imageIcon: {
    borderRadius: Border.br_141xl,
    width: 45,
    height: 45,
  },
  handyman: {
    fontSize: FontSize.size_sm,
    color: Color.heading,
  },
  yearOfJoining: {
    fontSize: FontSize.size_xs,
    color: Color.body,
    marginTop: 8,
  },
  handymanInfo: {
    width: 140,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default HandymanInfoContainer;
