import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const CouponFormContainer = ({
  productCode,
  productCodeText,
  couponButtonText,
  lineAlignSelf,
  linePosition,
  lineTop,
  lineLeft,
  lineWidth,
  taxWidth,
  taxAlignSelf,
  discount5OffContainerWidth,
  offAlignSelf,
}) => {
  const enterDetailInformationStyle = useMemo(() => {
    return {
      ...getStyleValue("alignSelf", lineAlignSelf),
      ...getStyleValue("position", linePosition),
      ...getStyleValue("top", lineTop),
      ...getStyleValue("left", lineLeft),
      ...getStyleValue("width", lineWidth),
    };
  }, [lineAlignSelf, linePosition, lineTop, lineLeft, lineWidth]);

  const detail1Style = useMemo(() => {
    return {
      ...getStyleValue("width", taxWidth),
      ...getStyleValue("alignSelf", taxAlignSelf),
    };
  }, [taxWidth, taxAlignSelf]);

  const serviceTitleStyle = useMemo(() => {
    return {
      ...getStyleValue("width", discount5OffContainerWidth),
    };
  }, [discount5OffContainerWidth]);

  const quantityStyle = useMemo(() => {
    return {
      ...getStyleValue("alignSelf", offAlignSelf),
    };
  }, [offAlignSelf]);

  return (
    <View style={[styles.enterDetailInformation, enterDetailInformationStyle]}>
      <View style={[styles.detail, styles.detailSpaceBlock1, detail1Style]}>
        <View style={[styles.serviceTitle, serviceTitleStyle]}>
          <Text style={styles.apartmentCleaning}>Apartment Cleaning</Text>
          <View style={[styles.quantity, quantityStyle]}>
            <Image
              style={styles.quantityLayout}
              contentFit="cover"
              source={productCode}
            />
            <Text style={[styles.text, styles.textTypo1]}>2</Text>
            <Image
              style={[styles.quantityItem, styles.quantityLayout]}
              contentFit="cover"
              source={productCodeText}
            />
          </View>
        </View>
        <Image
          style={styles.imageIcon}
          contentFit="cover"
          source={require("../assets/image16.png")}
        />
      </View>
      <View
        style={[styles.enterDetailInformationInner, styles.detailSpaceBlock]}
      >
        <View style={styles.frameChild} />
      </View>
      <View style={styles.detailSpaceBlock}>
        <Text style={styles.priceDetail}>Price Detail</Text>
        <View style={[styles.formField, styles.detailSpaceBlock1]}>
          <View style={styles.enterDetailInformation}>
            <View style={styles.enterDetailInformation}>
              <View style={[styles.price, styles.detailFlexBox]}>
                <Text style={[styles.price1, styles.textTypo1]}>Price</Text>
                <Text style={[styles.text1, styles.textTypo1]}>₹120</Text>
              </View>
              <View style={[styles.line, styles.lineSpaceBlock]} />
              <View style={[styles.subTotal, styles.lineSpaceBlock]}>
                <Text style={[styles.price1, styles.textTypo1]}>Sub Total</Text>
                <Text style={[styles.text2, styles.textTypo]}>
                  ₹120 * 2 = ₹240
                </Text>
              </View>
              <View style={[styles.line, styles.lineSpaceBlock]} />
              <View style={[styles.subTotal, styles.lineSpaceBlock]}>
                <Text style={styles.textTypo1}>
                  <Text style={styles.discount}>{`Discount `}</Text>
                  <Text style={styles.off}>(5% off)</Text>
                </Text>
                <Text style={[styles.text3, styles.textTypo]}>- ₹15.12</Text>
              </View>
              <View style={[styles.line, styles.lineSpaceBlock]} />
              <View style={[styles.subTotal, styles.lineSpaceBlock]}>
                <Text style={[styles.price1, styles.textTypo1]}>Tax</Text>
                <Text style={[styles.text4, styles.textTypo]}>₹15.12</Text>
              </View>
              <View style={[styles.line, styles.lineSpaceBlock]} />
              <View style={[styles.coupon, styles.lineSpaceBlock]}>
                <Text style={[styles.price1, styles.textTypo1]}>Coupon</Text>
                <Text style={[styles.applyCoupon, styles.textTypo1]}>
                  {couponButtonText}
                </Text>
              </View>
            </View>
            <View style={styles.lineWrapper}>
              <View style={[styles.line4, styles.lineLayout]} />
            </View>
            <View style={[styles.totalAmount, styles.detailFlexBox]}>
              <Text style={[styles.totalAmount1, styles.text5Typo]}>
                Total Amount
              </Text>
              <Text style={[styles.text5, styles.text5Typo]}>₹255.12</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailSpaceBlock1: {
    paddingVertical: Padding.p_5xl,
    paddingHorizontal: Padding.p_xl,
    backgroundColor: Color.background,
    borderRadius: Border.br_xs,
  },
  textTypo1: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  quantityLayout: {
    height: 11,
    width: 11,
    borderRadius: Border.br_12xs,
  },
  detailSpaceBlock: {
    marginTop: 32,
    alignSelf: "stretch",
  },
  detailFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  lineSpaceBlock: {
    marginTop: 10,
    alignSelf: "stretch",
  },
  textTypo: {
    textAlign: "right",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  lineLayout: {
    height: 1,
    backgroundColor: Color.border,
  },
  text5Typo: {
    fontFamily: FontFamily.workSansSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  apartmentCleaning: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    color: Color.heading,
    alignSelf: "stretch",
  },
  text: {
    color: Color.colorBlack,
    marginLeft: 12,
  },
  quantityItem: {
    marginLeft: 12,
  },
  quantity: {
    backgroundColor: Color.white,
    padding: Padding.p_5xs,
    marginTop: 16,
    borderRadius: Border.br_8xs,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  serviceTitle: {
    width: 176,
  },
  imageIcon: {
    width: 80,
    height: 80,
    borderRadius: Border.br_8xs,
  },
  detail: {
    width: 335,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  frameChild: {
    backgroundColor: Color.colorSilver,
    width: 100,
    height: 100,
  },
  enterDetailInformationInner: {
    display: "none",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  priceDetail: {
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.heading,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    alignSelf: "stretch",
  },
  price1: {
    color: Color.heading,
  },
  text1: {
    color: Color.body,
  },
  price: {
    alignSelf: "stretch",
  },
  line: {
    height: 1,
    backgroundColor: Color.border,
  },
  text2: {
    color: Color.body,
  },
  subTotal: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  discount: {
    color: Color.heading,
  },
  off: {
    color: Color.colorMediumseagreen_200,
  },
  text3: {
    color: Color.colorMediumseagreen_200,
  },
  text4: {
    color: Color.colorRed,
  },
  applyCoupon: {
    color: Color.main,
  },
  coupon: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  enterDetailInformation: {
    alignSelf: "stretch",
  },
  line4: {
    alignSelf: "stretch",
  },
  lineWrapper: {
    paddingTop: Padding.p_xl,
    alignSelf: "stretch",
  },
  totalAmount1: {
    color: Color.heading,
  },
  text5: {
    color: Color.main,
    textTransform: "capitalize",
  },
  totalAmount: {
    paddingTop: Padding.p_3xs,
    alignItems: "center",
    alignSelf: "stretch",
  },
  formField: {
    marginTop: 8,
    alignSelf: "stretch",
  },
});

export default CouponFormContainer;
