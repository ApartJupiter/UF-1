import * as React from "react";
import { Text, StyleSheet, View, StatusBar } from "react-native";
import { Image } from "expo-image";
import { Button } from "@ui-kitten/components";
import RateUsFormContainer from "../components/RateUsFormContainer";
import AboutContainer from "../components/AboutContainer";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const UserProfile = () => {
  return (
    <View style={styles.userProfile}>
      <View style={[styles.navigation, styles.logoutFlexBox]}>
        <View style={styles.time}>
          <Text style={[styles.text, styles.textFlexBox]}>9:41</Text>
        </View>
        <View style={styles.symbols}>
          <Image
            style={styles.wiFiIcon}
            contentFit="cover"
            source={require("../assets/wifi4.png")}
          />
          <Image
            style={styles.batteryIcon}
            contentFit="cover"
            source={require("../assets/battery2.png")}
          />
        </View>
      </View>
      <StatusBar style={styles.editBg} barStyle="default" />
      <View style={[styles.profileDetail, styles.detailLayout]}>
        <Image
          style={styles.imageIcon}
          contentFit="cover"
          source={require("../assets/image8.png")}
        />
        <View style={[styles.detail, styles.detailLayout]}>
          <Text style={[styles.deepParmar, styles.deepParmarFlexBox]}>
            Deep Parmar
          </Text>
          <Text style={[styles.deepexamplegmailcom, styles.logout1Typo]}>
            deepexample@gmail.com
          </Text>
        </View>
        <View style={[styles.edit, styles.editBg]}>
          <Image
            style={styles.iconlylightedit}
            contentFit="cover"
            source={require("../assets/iconlylightedit.png")}
          />
        </View>
      </View>
      <RateUsFormContainer />
      <AboutContainer />
      <Button
        style={[styles.logout, styles.logoutFlexBox]}
        title="Logout"
        size="medium"
        status="primary"
        appearance="filled"
        color="#5f60b9"
        textStyle={styles.logoutText}
      >
        Logout
      </Button>
      <Image
        style={[styles.hanymanAppIcon, styles.topNavLayout]}
        contentFit="cover"
        source={require("../assets/hanyman-app3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logoutText: {
    fontWeight: "500",
    fontFamily: "WorkSans-Medium",
  },
  logoutFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.white,
  },
  editBg: {
    backgroundColor: Color.main,
    flexDirection: "row",
    position: "absolute",
  },
  detailLayout: {
    width: 201,
    position: "absolute",
  },
  deepParmarFlexBox: {
    textAlign: "center",
    alignSelf: "stretch",
  },
  logout1Typo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  topNavLayout: {
    width: 375,
    left: 0,
  },
  text: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "500",
    textAlign: "left",
    color: Color.white,
  },
  time: {
    width: 27,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  wiFiIcon: {
    width: 15,
    height: 11,
  },
  batteryIcon: {
    width: 25,
    marginLeft: 9,
    height: 12,
  },
  symbols: {
    width: 51,
    paddingLeft: 1,
    paddingRight: Padding.p_12xs_5,
    height: 12,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  navigation: {
    backgroundColor: Color.colorCornflowerblue,
    height: 31,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    alignItems: "center",
    width: 375,
    left: 0,
    top: 0,
  },
  imageIcon: {
    left: 45,
    borderRadius: Border.br_161xl,
    width: 100,
    height: 100,
    top: 0,
    position: "absolute",
  },
  deepParmar: {
    fontSize: FontSize.size_3xl,
    color: Color.heading,
    fontFamily: FontFamily.workSansMedium,
    textAlign: "center",
    alignSelf: "stretch",
    fontWeight: "500",
  },
  deepexamplegmailcom: {
    color: Color.body,
    marginTop: 8,
    textAlign: "center",
    alignSelf: "stretch",
    fontSize: FontSize.size_base,
  },
  detail: {
    top: 124,
    alignItems: "center",
    left: 0,
    width: 201,
  },
  iconlylightedit: {
    width: 16,
    height: 16,
  },
  edit: {
    top: 67,
    left: 112,
    borderRadius: Border.br_71xl,
    borderStyle: "solid",
    borderColor: Color.white,
    borderWidth: 3,
    padding: Padding.p_5xs,
  },
  profileDetail: {
    top: 121,
    left: 83,
    height: 177,
  },
  logout: {
    top: 853,
    left: 20,
    borderRadius: Border.br_xs,
    width: 335,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_smi,
  },
  hanymanAppIcon: {
    top: 785,
    height: 60,
    position: "absolute",
  },
  userProfile: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 916,
    overflow: "hidden",
  },
});

export default UserProfile;
