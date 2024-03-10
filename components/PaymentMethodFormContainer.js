import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const PaymentMethodFormContainer = ({ serviceDescription }) => {
  return (
    <View style={styles.frameParent}>
      <View>
        <View style={styles.paymentMethodParent}>
          <Text style={[styles.paymentMethod, styles.cashTypo]}>
            Payment Method :
          </Text>
          <Text style={[styles.cash, styles.cashTypo]}>Cash</Text>
        </View>
        <Text style={[styles.cleaningOfFloors, styles.cashTypo]}>
          {serviceDescription}
        </Text>
      </View>
      <View style={styles.paymentMethodGroup}>
        <View style={styles.paymentMethod1}>
          <Text style={[styles.amount, styles.cashTypo]}>Amount</Text>
          <Text style={[styles.text, styles.textTypo]}>₹1258</Text>
        </View>
        <View style={styles.paymentFlexBox}>
          <Text style={[styles.amount, styles.cashTypo]}>Date</Text>
          <Text style={[styles.dec2022, styles.textTypo]}>02 Dec, 2022</Text>
        </View>
        <View style={[styles.paymentMethod3, styles.paymentFlexBox]}>
          <Text style={[styles.amount, styles.cashTypo]}>Method</Text>
          <Text style={[styles.cash1, styles.textTypo]}>Cash</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cashTypo: {
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  textTypo: {
    textAlign: "right",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  paymentFlexBox: {
    marginTop: 16,
    width: 263,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  paymentMethod: {
    color: Color.heading,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
  },
  cash: {
    color: Color.main,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
  },
  paymentMethodParent: {
    width: 295,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  cleaningOfFloors: {
    lineHeight: 22,
    width: 280,
    marginTop: 14,
    color: Color.body,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  amount: {
    fontSize: FontSize.size_sm,
    color: Color.heading,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  text: {
    fontSize: FontSize.size_sm,
    color: Color.main,
  },
  paymentMethod1: {
    width: 263,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  dec2022: {
    fontSize: FontSize.size_xs,
    color: Color.body,
  },
  cash1: {
    color: Color.body,
    fontSize: FontSize.size_sm,
  },
  paymentMethod3: {
    display: "none",
  },
  paymentMethodGroup: {
    backgroundColor: Color.colorGhostwhite,
    padding: Padding.p_base,
    marginTop: 20,
    borderRadius: Border.br_xs,
  },
  frameParent: {
    borderStyle: "solid",
    borderColor: Color.border,
    borderWidth: 1,
    padding: Padding.p_xl,
    borderRadius: Border.br_xs,
  },
});

export default PaymentMethodFormContainer;
