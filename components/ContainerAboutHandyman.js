import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ContainerAboutHandyman = ({
  serviceDescription,
  profileImageUrl,
  btnAlignSelf,
  acceptAlignSelf,
  chatMarginLeft,
  propMarginLeft,
  propWidth,
  propFlex,
  propWidth1,
  propHeight,
  propFlex1,
  propTextAlign,
  propFlex2,
  propWidth2,
  propHeight1,
}) => {
  const handymanDetailStyle = useMemo(() => {
    return {
      ...getStyleValue("alignSelf", btnAlignSelf),
    };
  }, [btnAlignSelf]);

  const providerNameAndRatingStyle = useMemo(() => {
    return {
      ...getStyleValue("alignSelf", acceptAlignSelf),
    };
  }, [acceptAlignSelf]);

  const justineBoyleStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", chatMarginLeft),
    };
  }, [chatMarginLeft]);

  const verifiedIconStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft),
    };
  }, [propMarginLeft]);

  const btnStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  const acceptStyle = useMemo(() => {
    return {
      ...getStyleValue("flex", propFlex),
      ...getStyleValue("width", propWidth1),
      ...getStyleValue("height", propHeight),
    };
  }, [propFlex, propWidth1, propHeight]);

  const callStyle = useMemo(() => {
    return {
      ...getStyleValue("flex", propFlex1),
      ...getStyleValue("textAlign", propTextAlign),
    };
  }, [propFlex1, propTextAlign]);

  const declineStyle = useMemo(() => {
    return {
      ...getStyleValue("flex", propFlex2),
      ...getStyleValue("width", propWidth2),
      ...getStyleValue("height", propHeight1),
    };
  }, [propFlex2, propWidth2, propHeight1]);

  return (
    <View>
      <Text style={[styles.aboutHandyman1, styles.justineBoyle1Typo]}>
        {serviceDescription}
      </Text>
      <View
        style={[
          styles.handymanDetail,
          styles.handymanDetailBg,
          handymanDetailStyle,
        ]}
      >
        <View
          style={[
            styles.providerNameAndRating,
            styles.handymanDetailBg,
            providerNameAndRatingStyle,
          ]}
        >
          <View style={[styles.detail, styles.textFlexBox]}>
            <Image
              style={styles.imageIcon}
              contentFit="cover"
              source={profileImageUrl}
            />
            <View>
              <Text style={[styles.justineBoyle1, styles.justineBoyle1Typo]}>
                Justine Boyle
              </Text>
              <View style={styles.serviceNameExpertAndRating}>
                <Text style={[styles.cleaningExpert, styles.text1Typo]}>
                  Cleaning Expert
                </Text>
                <View style={[styles.text, styles.textFlexBox]}>
                  <View style={styles.star}>
                    <Image
                      style={styles.starChild}
                      contentFit="cover"
                      source={require("../assets/star-12.png")}
                    />
                    <Image
                      style={styles.starChild}
                      contentFit="cover"
                      source={require("../assets/star-12.png")}
                    />
                    <Image
                      style={styles.starChild}
                      contentFit="cover"
                      source={require("../assets/star-12.png")}
                    />
                    <Image
                      style={styles.starChild}
                      contentFit="cover"
                      source={require("../assets/star-12.png")}
                    />
                    <Image
                      style={styles.starChild}
                      contentFit="cover"
                      source={require("../assets/star-12.png")}
                    />
                  </View>
                  <Text style={[styles.text1, styles.text1Typo]}>4.5</Text>
                </View>
              </View>
            </View>
          </View>
          <Image
            style={[styles.verifiedIcon, verifiedIconStyle]}
            contentFit="cover"
            source={require("../assets/verified.png")}
          />
        </View>
        <View style={[styles.btn, btnStyle]}>
          <View style={[styles.accept, styles.acceptFlexBox, acceptStyle]}>
            <Text style={[styles.call, callStyle]}>Call</Text>
          </View>
          <View style={[styles.decline, styles.acceptFlexBox, declineStyle]}>
            <Text style={styles.chat}>Chat</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  justineBoyle1Typo: {
    textAlign: "left",
    color: Color.heading,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  handymanDetailBg: {
    backgroundColor: Color.background,
    alignSelf: "stretch",
  },
  textFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  text1Typo: {
    color: Color.body,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  acceptFlexBox: {
    paddingVertical: Padding.p_6xs,
    paddingHorizontal: 0,
    borderRadius: Border.br_8xs,
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  aboutHandyman1: {
    fontSize: FontSize.size_base,
  },
  imageIcon: {
    borderRadius: Border.br_121xl,
    width: 80,
    height: 80,
  },
  justineBoyle1: {
    fontSize: FontSize.size_lg,
    textTransform: "capitalize",
  },
  cleaningExpert: {
    textTransform: "capitalize",
  },
  starChild: {
    borderRadius: Border.br_12xs,
    height: 16,
    width: 16,
  },
  star: {
    flexDirection: "row",
  },
  text1: {
    marginLeft: 8,
  },
  text: {
    marginTop: 8,
  },
  serviceNameExpertAndRating: {
    marginTop: 16,
  },
  detail: {
    justifyContent: "space-between",
  },
  verifiedIcon: {
    height: 15,
    width: 16,
  },
  providerNameAndRating: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  call: {
    color: Color.white,
    textAlign: "center",
    flex: 1,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  accept: {
    backgroundColor: Color.main,
    justifyContent: "center",
  },
  chat: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.heading,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  decline: {
    backgroundColor: Color.white,
    marginLeft: 20,
    justifyContent: "space-between",
  },
  btn: {
    width: 287,
    marginTop: 24,
    flexDirection: "row",
  },
  handymanDetail: {
    borderRadius: Border.br_xs,
    padding: Padding.p_5xl,
    marginTop: 8,
  },
});

export default ContainerAboutHandyman;
