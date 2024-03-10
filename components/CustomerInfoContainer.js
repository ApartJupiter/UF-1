import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const CustomerInfoContainer = ({
  dimensionsCode,
  propWidth,
  propAlignSelf,
  propFlex,
  propOverflow,
  propWidth1,
  propFlex1,
  propWidth2,
  propHeight,
  propAlignSelf1,
  propAlignSelf2,
  propWidth3,
  propHeight1,
  propMarginLeft,
}) => {
  const customerInfoStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  const detail2Style = useMemo(() => {
    return {
      ...getStyleValue("alignSelf", propAlignSelf),
    };
  }, [propAlignSelf]);

  const imageIconStyle = useMemo(() => {
    return {
      ...getStyleValue("flex", propFlex),
      ...getStyleValue("overflow", propOverflow),
      ...getStyleValue("width", propWidth1),
    };
  }, [propFlex, propOverflow, propWidth1]);

  const textStyle = useMemo(() => {
    return {
      ...getStyleValue("flex", propFlex1),
    };
  }, [propFlex1]);

  const emailAndAddressStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth2),
      ...getStyleValue("height", propHeight),
    };
  }, [propWidth2, propHeight]);

  const emailStyle = useMemo(() => {
    return {
      ...getStyleValue("alignSelf", propAlignSelf1),
    };
  }, [propAlignSelf1]);

  const addressStyle = useMemo(() => {
    return {
      ...getStyleValue("alignSelf", propAlignSelf2),
    };
  }, [propAlignSelf2]);

  const btn1Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth3),
      ...getStyleValue("height", propHeight1),
    };
  }, [propWidth3, propHeight1]);

  const chatStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft),
    };
  }, [propMarginLeft]);

  return (
    <View style={styles.aboutCustomer}>
      <Text style={[styles.aboutCustomer1, styles.aboutCustomer1Typo]}>
        About Customer
      </Text>
      <View style={[styles.customerInfo, customerInfoStyle]}>
        <View style={[styles.detail, detail2Style]}>
          <Image
            style={[styles.imageIcon, imageIconStyle]}
            contentFit="cover"
            source={dimensionsCode}
          />
          <View style={[styles.text, textStyle]}>
            <Text style={[styles.leslieAlexander, styles.aboutCustomer1Typo]}>
              Leslie Alexander
            </Text>
            <View style={[styles.emailAndAddress, emailAndAddressStyle]}>
              <View style={[styles.emailFlexBox, emailStyle]}>
                <Image
                  style={styles.iconlylightmessage}
                  contentFit="cover"
                  source={require("../assets/iconlylightmessage2.png")}
                />
                <Text style={[styles.examplegmailcom, styles.call1Typo]}>
                  example@gmail.com
                </Text>
              </View>
              <View style={[styles.address, styles.emailFlexBox, addressStyle]}>
                <Image
                  style={styles.iconlylightmessage}
                  contentFit="cover"
                  source={require("../assets/iconlylightlocation1.png")}
                />
                <Text style={[styles.examplegmailcom, styles.call1Typo]}>
                  1901 Thornridge Cirav...
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.btn, btn1Style]}>
          <View style={[styles.call, styles.callFlexBox]}>
            <Text style={[styles.call1, styles.call1Typo]}>Call</Text>
          </View>
          <View style={[styles.chat, styles.callFlexBox, chatStyle]}>
            <Text style={[styles.chat1, styles.call1Typo]}>Chat</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  aboutCustomer1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    color: Color.heading,
  },
  call1Typo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  emailFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  callFlexBox: {
    padding: Padding.p_3xs,
    justifyContent: "center",
    width: 133,
    borderRadius: Border.br_8xs,
    flexDirection: "row",
  },
  aboutCustomer1: {
    fontSize: FontSize.size_base,
  },
  imageIcon: {
    borderRadius: Border.br_121xl,
    maxWidth: "100%",
    overflow: "hidden",
    height: 70,
    flex: 1,
  },
  leslieAlexander: {
    fontSize: FontSize.size_lg,
    textTransform: "capitalize",
  },
  iconlylightmessage: {
    width: 14,
    height: 14,
  },
  examplegmailcom: {
    color: Color.body,
    marginLeft: 10,
  },
  address: {
    marginTop: 13,
  },
  emailAndAddress: {
    width: 171,
    height: 36,
    marginTop: 16,
  },
  text: {
    marginLeft: 24,
    flex: 1,
  },
  detail: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  call1: {
    color: Color.heading,
    fontSize: FontSize.size_sm,
  },
  call: {
    backgroundColor: Color.white,
  },
  chat1: {
    color: Color.white,
  },
  chat: {
    backgroundColor: Color.main,
  },
  btn: {
    width: 296,
    height: 35,
    justifyContent: "space-between",
    marginTop: 24,
    flexDirection: "row",
  },
  customerInfo: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.background,
    width: 334,
    padding: Padding.p_5xl,
    marginTop: 8,
  },
  aboutCustomer: {
    marginTop: 32,
  },
});

export default CustomerInfoContainer;
