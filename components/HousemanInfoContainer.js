import * as React from "react";
import { StyleSheet, View } from "react-native";
import ContainerAboutHandyman from "./ContainerAboutHandyman";
import CustomerInfoContainer from "./CustomerInfoContainer";

const HousemanInfoContainer = () => {
  return (
    <View style={styles.otherInfo}>
      <ContainerAboutHandyman
        serviceDescription="About Houseman"
        profileImageUrl={require("../assets/image24.png")}
        btnAlignSelf="unset"
        acceptAlignSelf="unset"
        chatMarginLeft={16}
        propMarginLeft={57}
        propWidth="unset"
        propWidth1={134}
        propHeight={38}
        propTextAlign="left"
        propWidth2={134}
        propHeight1={38}
      />
      <CustomerInfoContainer
        dimensionsCode={require("../assets/image25.png")}
        propWidth="unset"
        propAlignSelf="unset"
        propOverflow="unset"
        propWidth1={70}
        propWidth2="unset"
        propHeight="unset"
        propAlignSelf1="unset"
        propAlignSelf2="unset"
        propWidth3="unset"
        propHeight1="unset"
        propMarginLeft={20}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  otherInfo: {
    position: "absolute",
    top: 287,
    left: 20,
  },
});

export default HousemanInfoContainer;
