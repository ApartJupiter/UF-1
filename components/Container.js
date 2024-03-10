import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../GlobalStyles";

const Container = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.hanymanApp}>
      <Pressable
        style={[styles.iconlylighthome, styles.iconlylighthomeLayout]}
        onPress={() => navigation.navigate("MainScreen")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/iconlylighthome.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.iconlylightticket, styles.iconlylighthomeLayout]}
        onPress={() => navigation.navigate("BookTheServiceStep")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/iconlylightticket.png")}
        />
      </Pressable>
      <Image
        style={[styles.iconlyboldprofile, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/iconlyboldprofile.png")}
      />
      <Pressable
        style={[styles.iconlylightcategory, styles.iconlylighthomeLayout]}
        onPress={() => navigation.navigate("Category")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/iconlylightcategory.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconlylighthomeLayout: {
    height: "33.33%",
    width: "5.33%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  iconlylighthome: {
    left: "9.6%",
    right: "85.07%",
    bottom: "33.33%",
    top: "33.33%",
    height: "33.33%",
    width: "5.33%",
    position: "absolute",
  },
  iconlylightticket: {
    left: "34.67%",
    right: "60%",
    bottom: "33.33%",
    top: "33.33%",
    height: "33.33%",
    width: "5.33%",
    position: "absolute",
  },
  iconlyboldprofile: {
    right: "9.6%",
    left: "85.07%",
    height: "33.33%",
    width: "5.33%",
    position: "absolute",
    bottom: "33.33%",
    top: "33.33%",
  },
  iconlylightcategory: {
    left: "60%",
    top: "36.67%",
    right: "34.67%",
    bottom: "30%",
    height: "33.33%",
    width: "5.33%",
    position: "absolute",
  },
  hanymanApp: {
    alignSelf: "stretch",
    backgroundColor: Color.background,
    shadowColor: "rgba(30, 28, 28, 0.2)",
    shadowOffset: {
      width: -30,
      height: 0,
    },
    shadowRadius: 100,
    elevation: 100,
    shadowOpacity: 1,
    height: 60,
    marginTop: -858,
  },
});

export default Container;
