import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import ServiceSummaryContainer from "./ServiceSummaryContainer";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const FrameContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frame}>
      <View style={styles.view}>
        <Pressable
          style={styles.totalEarning}
          onPress={() => navigation.navigate("EarningList")}
        >
          <View>
            <Text style={[styles.text, styles.textText]}>₹1259</Text>
            <Text style={[styles.totalEarning2, styles.textText]}>
              Total Earning
            </Text>
          </View>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon3.png")}
          />
        </Pressable>
        <ServiceSummaryContainer
          serviceNumber="1589"
          serviceDescription="Total Service"
        />
      </View>
      <View style={styles.view}>
        <ServiceSummaryContainer
          serviceNumber="15"
          serviceDescription="upcoming services"
          propBackgroundColor="unset"
          propMarginLeft="unset"
          propWidth={63}
          propMarginLeft1={29}
        />
        <ServiceSummaryContainer
          serviceNumber="05"
          serviceDescription={`Today’s
Service`}
          propBackgroundColor="#fff"
          propMarginLeft={20}
          propWidth="unset"
          propMarginLeft1={49}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textText: {
    textAlign: "left",
    textTransform: "capitalize",
  },
  text: {
    fontSize: FontSize.size_3xl,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.workSansSemiBold,
    color: Color.main,
  },
  totalEarning2: {
    fontSize: FontSize.size_xs,
    fontWeight: "500",
    fontFamily: FontFamily.workSansMedium,
    color: Color.body,
    marginTop: 10,
  },
  icon: {
    width: 35,
    height: 35,
    marginLeft: 16,
  },
  totalEarning: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: Color.border,
    borderWidth: 1,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_xl,
    flexDirection: "row",
  },
  view: {
    flexDirection: "row",
  },
  frame: {
    position: "absolute",
    top: 189,
    left: 0,
    width: 354,
    height: 186,
    overflow: "hidden",
    alignItems: "flex-end",
    justifyContent: "center",
  },
});

export default FrameContainer;
