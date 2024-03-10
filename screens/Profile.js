import * as React from "react";
import { StatusBar, StyleSheet, View, Text } from "react-native";
import { Button } from "@ui-kitten/components";
import { Image } from "expo-image";
import CounterContainer from "../components/CounterContainer";
import FormContainer from "../components/FormContainer";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profile}>
      <StatusBar style={styles.nameFlexBox} barStyle="default" />
      <View style={[styles.bg, styles.bgPosition]} />
      <CounterContainer />
      <FormContainer />
      <Button
        style={[styles.logout, styles.nameFlexBox]}
        title="Logout"
        size="medium"
        status="primary"
        appearance="filled"
        textStyle={styles.logoutText}
        onPress={() => navigation.navigate("LoginServiceMan")}
      >
        Logout
      </Button>
      <View style={[styles.name, styles.nameFlexBox]}>
        <Text style={[styles.deepParmar, styles.deepParmarTypo]}>
          Deep Parmar
        </Text>
        <Text style={[styles.deepdeppcorpocom, styles.deepParmarTypo]}>
          deep@deppcorpo.com
        </Text>
      </View>
      <Image
        style={styles.imageIcon}
        contentFit="cover"
        source={require("../assets/image.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logoutText: {
    fontWeight: "500",
    fontFamily: "WorkSans-Medium",
  },
  logout1Text: {
    fontWeight: "500",
    fontFamily: "WorkSans-Medium",
  },
  nameFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  bgPosition: {
    left: 0,
    width: 375,
  },
  deepParmarTypo: {
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  bg: {
    top: 31,
    backgroundColor: Color.main,
    height: 319,
    width: 375,
    position: "absolute",
  },
  logout: {
    top: 709,
    left: 161,
    flexDirection: "row",
  },
  deepParmar: {
    fontSize: FontSize.size_3xl,
  },
  deepdeppcorpocom: {
    fontSize: FontSize.size_base,
    marginTop: 8,
  },
  name: {
    top: 215,
    left: 98,
  },
  imageIcon: {
    top: 71,
    left: 128,
    borderRadius: 60,
    width: 120,
    height: 120,
    position: "absolute",
  },
  profile: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Profile;
