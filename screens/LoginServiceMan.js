import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import LoginForm from "../components/LoginForm";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Padding } from "../GlobalStyles";

const LoginServiceMan = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginServiceman}>
      <View style={[styles.navigation, styles.frameFlexBox]}>
        <View style={styles.time}>
          <Text style={[styles.text, styles.modesTypo]}>9:41</Text>
        </View>
        <View style={[styles.symbols, styles.frameFlexBox]}>
          <Image
            style={styles.wiFiIcon}
            contentFit="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={styles.batteryIcon}
            contentFit="cover"
            source={require("../assets/battery.png")}
          />
        </View>
      </View>
      <View style={styles.text1}>
        <Text style={[styles.helloServiceman, styles.gladToHaveText]}>
          Hello ServiceMan!
        </Text>
        <Text style={[styles.gladToHave, styles.gladToHaveTypo]}>
          Glad to Have you back!
        </Text>
      </View>
      <LoginForm />
      <View style={[styles.frame, styles.frameFlexBox]}>
        <Text
          style={[styles.changeModes, styles.gladToHaveTypo]}
        >{`Change Modes? `}</Text>
        <Pressable
          style={styles.backToModesContainer}
          onPress={() => navigation.navigate("LoginAs")}
        >
          <Text style={[styles.backToModes, styles.modesTypo]}>
            {" "}
            Back To Modes
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  modesTypo: {
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  gladToHaveText: {
    textAlign: "center",
    textTransform: "capitalize",
  },
  gladToHaveTypo: {
    color: Color.body,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  text: {
    fontFamily: FontFamily.sFProDisplay,
    color: Color.heading,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.size_sm,
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
    overflow: "hidden",
  },
  navigation: {
    top: 10,
    left: 20,
    width: 335,
    justifyContent: "space-between",
    paddingLeft: Padding.p_12xs_5,
    alignItems: "center",
    position: "absolute",
  },
  helloServiceman: {
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.workSansMedium,
    textAlign: "center",
    textTransform: "capitalize",
    color: Color.heading,
    fontWeight: "500",
  },
  gladToHave: {
    fontSize: FontSize.size_base,
    lineHeight: 20,
    width: 254,
    marginTop: 16,
    textAlign: "center",
    textTransform: "capitalize",
    color: Color.body,
  },
  text1: {
    top: 97,
    left: 60,
    alignItems: "center",
    position: "absolute",
  },
  changeModes: {
    width: 113,
    height: 15,
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  backToModes: {
    textDecoration: "underline",
    fontStyle: "italic",
    fontWeight: "600",
    fontFamily: FontFamily.workSansSemiBoldItalic,
    color: Color.main,
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  backToModesContainer: {
    marginLeft: -4,
  },
  frame: {
    top: 565,
    left: 80,
    width: 216,
    height: 16,
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  loginServiceman: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default LoginServiceMan;
