import React, { useState, useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Checkbox } from "react-native-paper";
import { FontFamily, Border, FontSize, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const HandymanCard = ({ handymanName, joinDate, propWidth }) => {
  const [checkBox3checked, setCheckBox3checked] = useState(false);
  const handymanInfo3Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  return (
    <View style={[styles.view, styles.viewFlexBox]}>
      <View
        style={[styles.handymanInfo, styles.viewFlexBox, handymanInfo3Style]}
      >
        <Image
          style={styles.imageIcon}
          contentFit="cover"
          source={require("../assets/image14.png")}
        />
        <View>
          <Text style={[styles.handyman, styles.handymanTypo]}>
            {handymanName}
          </Text>
          <Text style={[styles.yearOfJoining, styles.handymanTypo]}>
            {joinDate}
          </Text>
        </View>
      </View>
      <View>
        <Checkbox
          status={checkBox3checked ? "checked" : "unchecked"}
          onPress={() => setCheckBox3checked(!checkBox3checked)}
          color="#f6f7f9"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
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
    width: 141,
  },
  view: {
    alignSelf: "stretch",
    marginTop: 21,
  },
});

export default HandymanCard;
