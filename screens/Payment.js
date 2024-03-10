import * as React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import PaymentContainer from "../components/PaymentContainer";
import { Color } from "../GlobalStyles";

const Payment = () => {
  return (
    <View style={[styles.payment, styles.frameFlexBox]}>
      <StatusBar style={styles.frameFlexBox} barStyle="default" />
      <View style={[styles.frame1, styles.frameFlexBox]}>
        <View style={[styles.frame2, styles.frameFlexBox]}>
          <View>
            <PaymentContainer
              transactionId="#12"
              paymentAmount="Cash"
              amountText="₹1500"
              transactionCode="#123"
            />
            <PaymentContainer
              transactionId="#14"
              paymentAmount="wallet"
              amountText="₹1245"
              transactionCode="#124"
              textMarginTop={24}
            />
            <PaymentContainer
              transactionId="#12"
              paymentAmount="Wallet"
              amountText="₹1500"
              transactionCode="#125"
              textMarginTop={24}
            />
            <PaymentContainer
              transactionId="#12"
              paymentAmount="Cash"
              amountText="₹248"
              transactionCode="#126"
              textMarginTop={24}
            />
          </View>
        </View>
        <Image
          style={styles.providerAppIcon}
          contentFit="cover"
          source={require("../assets/provider-app4.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    alignItems: "center",
    overflow: "hidden",
  },
  frame2: {
    justifyContent: "center",
    width: 375,
  },
  providerAppIcon: {
    height: 60,
    marginTop: -10,
    width: 375,
  },
  frame1: {
    height: 1002,
    width: 375,
  },
  payment: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
  },
});

export default Payment;
