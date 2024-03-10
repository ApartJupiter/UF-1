import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const PaymentContainer = ({
  transactionId,
  paymentAmount,
  amountText,
  transactionCode,
  textMarginTop,
}) => {
  const paymentStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", textMarginTop),
    };
  }, [textMarginTop]);

  return (
    <View style={[styles.payment, paymentStyle]}>
      <View style={[styles.bg, styles.bgBorder]} />
      <View style={styles.serviceDetail}>
        <View style={[styles.paymentId, styles.paymentFlexBox]}>
          <Text style={styles.id}>ID</Text>
          <Text style={[styles.text, styles.textTypo1]}>{transactionId}</Text>
        </View>
        <View style={[styles.line, styles.lineSpaceBlock]} />
        <View style={[styles.paymentStatus, styles.lineSpaceBlock]}>
          <Text style={styles.id}>Status</Text>
          <Text style={[styles.text, styles.textTypo1]}>Pending</Text>
        </View>
        <View style={[styles.line, styles.lineSpaceBlock]} />
        <View style={[styles.paymentStatus, styles.lineSpaceBlock]}>
          <Text style={styles.id}>Method</Text>
          <Text style={[styles.text, styles.textTypo1]}>{paymentAmount}</Text>
        </View>
        <View style={[styles.line, styles.lineSpaceBlock]} />
        <View style={[styles.paymentStatus, styles.lineSpaceBlock]}>
          <Text style={styles.id}>Amount Paid</Text>
          <Text style={[styles.text1, styles.textTypo]}>{amountText}</Text>
        </View>
      </View>
      <View style={[styles.userNameAndId, styles.paymentFlexBox]}>
        <Text
          style={[styles.alexisLockman, styles.text2Typo]}
        >{`User  -> HandyMan`}</Text>
        <Text style={[styles.text2, styles.text2Typo]}>{transactionCode}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bgBorder: {
    borderWidth: 1,
    borderColor: Color.border,
    borderStyle: "solid",
    position: "absolute",
  },
  paymentFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  textTypo1: {
    textAlign: "right",
    fontSize: FontSize.size_sm,
  },
  lineSpaceBlock: {
    marginTop: 10,
    width: 303,
  },
  textTypo: {
    color: Color.main,
    fontFamily: FontFamily.workSansSemiBold,
    fontWeight: "600",
  },
  text2Typo: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
  },
  bg: {
    height: "100.91%",
    width: "100.6%",
    top: "-0.45%",
    right: "-0.3%",
    bottom: "-0.45%",
    left: "-0.3%",
    borderRadius: Border.br_xs,
    backgroundColor: Color.white,
  },
  id: {
    textAlign: "left",
    fontSize: FontSize.size_sm,
    color: Color.heading,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  text: {
    color: Color.body,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    textAlign: "right",
  },
  paymentId: {
    width: 303,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  line: {
    backgroundColor: Color.border,
    height: 1,
  },
  paymentStatus: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  text1: {
    textAlign: "right",
    fontSize: FontSize.size_sm,
  },
  serviceDetail: {
    height: "57.73%",
    width: "90.45%",
    top: "33.18%",
    right: "4.78%",
    bottom: "9.09%",
    left: "4.78%",
    position: "absolute",
  },
  alexisLockman: {
    color: Color.heading,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  text2: {
    color: Color.main,
    fontFamily: FontFamily.workSansSemiBold,
    fontWeight: "600",
  },
  userNameAndId: {
    height: "24.09%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "75.91%",
    left: "0%",
    borderTopLeftRadius: Border.br_8xs,
    borderTopRightRadius: Border.br_8xs,
    backgroundColor: Color.colorGhostwhite,
    alignItems: "center",
    padding: Padding.p_base,
    borderWidth: 1,
    borderColor: Color.border,
    borderStyle: "solid",
    position: "absolute",
  },
  payment: {
    width: 335,
    height: 220,
  },
});

export default PaymentContainer;
