import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const FormContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.field}>
      <View style={styles.appFlexBox}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/icon.png")}
        />
        <Text style={styles.appLanguage1}>App Language</Text>
      </View>
      <View style={styles.line} />
      <View style={[styles.appTheme, styles.appFlexBox]}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/icon1.png")}
        />
        <Text style={styles.appLanguage1}>App Theme</Text>
      </View>
      <View style={styles.line} />
      <Pressable
        style={[styles.changePassword, styles.appFlexBox]}
        onPress={() => navigation.navigate("ChangePassword")}
      >
        <Image
          style={styles.icon2}
          contentFit="cover"
          source={require("../assets/icon2.png")}
        />
        <Text style={styles.appLanguage1}>Change Password</Text>
      </Pressable>
      <View style={styles.line} />
      <View style={[styles.language, styles.appFlexBox]}>
        <Image
          style={styles.image21Traced}
          contentFit="cover"
          source={require("../assets/image-21-traced.png")}
        />
        <Text style={styles.appLanguage1}>Earning List</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  icon: {
    height: 16,
    width: 16,
  },
  appLanguage1: {
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.workSansMedium,
    color: Color.heading,
    textAlign: "left",
    marginLeft: 12,
  },
  line: {
    backgroundColor: Color.border,
    width: 335,
    height: 1,
    marginTop: 18,
  },
  appTheme: {
    borderRadius: Border.br_8xs,
    width: 299,
    marginTop: 18,
  },
  icon2: {
    width: 12,
    height: 16,
  },
  changePassword: {
    marginTop: 18,
  },
  image21Traced: {
    height: 14,
    width: 16,
  },
  language: {
    width: 122,
    height: 19,
    marginTop: 18,
  },
  field: {
    position: "absolute",
    top: 466,
    left: 20,
  },
});

export default FormContainer;
