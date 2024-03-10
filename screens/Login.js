import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import LoginForm1 from "../components/LoginForm1";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <View style={[styles.navigation, styles.frameFlexBox]}>
        <View style={styles.time}>
          <Text style={[styles.text, styles.textTypo]}>9:42</Text>
        </View>
        <View style={styles.symbols}>
          <Image
            style={styles.wiFiIcon}
            contentFit="cover"
            source={require("../assets/wifi2.png")}
          />
          <Image
            style={styles.batteryIcon}
            contentFit="cover"
            source={require("../assets/battery.png")}
          />
        </View>
      </View>
      <LoginForm1 />
      <View style={[styles.frame, styles.frameFlexBox]}>
        <Text style={styles.changeModes}>{`Change Modes? `}</Text>
        <Pressable onPress={() => navigation.navigate("LoginAs")}>
          <Text style={[styles.backToModes, styles.textTypo]}>
            {" "}
            Back To Modes
          </Text>
        </Pressable>
      </View>
      <View style={styles.text1}>
        <Text style={[styles.helloUser, styles.helloUserTypo]}>
          Hello User!
        </Text>
        <Text style={[styles.gladToHave, styles.helloUserTypo]}>
          Glad to Have you back!
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  helloUserTypo: {
    textAlign: "center",
    textTransform: "capitalize",
    alignSelf: "stretch",
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
    flexDirection: "row",
    overflow: "hidden",
  },
  navigation: {
    top: 10,
    left: 20,
    width: 335,
    paddingLeft: Padding.p_12xs_5,
  },
  changeModes: {
    width: 113,
    height: 15,
    color: Color.body,
    fontFamily: FontFamily.workSansMedium,
    textAlign: "left",
    fontWeight: "500",
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
  frame: {
    top: 566,
    left: 78,
    width: 216,
    overflow: "hidden",
  },
  helloUser: {
    fontSize: FontSize.size_3xl,
    color: Color.heading,
  },
  gladToHave: {
    fontSize: FontSize.size_base,
    lineHeight: 20,
    marginTop: 16,
    color: Color.body,
  },
  text1: {
    top: 97,
    left: 97,
    width: 182,
    alignItems: "center",
    position: "absolute",
  },
  login: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Login;
