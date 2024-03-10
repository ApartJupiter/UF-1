import * as React from "react";
import { Text, StyleSheet, View, StatusBar } from "react-native";
import { Image } from "expo-image";
import { Button } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import ContainerAboutHandyman from "../components/ContainerAboutHandyman";
import CustomerInfoContainer from "../components/CustomerInfoContainer";
import ReviewsWrapper from "../components/ReviewsWrapper";
import Property1Default from "../components/Property1Default";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const OnClickOfBookingServiceS = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.onclickOfBookingServiceS}>
      <View style={[styles.bookingId, styles.rateFlexBox]}>
        <Text style={[styles.bookingId1, styles.textTypo2]}>Booking ID</Text>
        <Text style={[styles.text, styles.textTypo]}>#123</Text>
      </View>
      <View style={[styles.line, styles.lineLayout]} />
      <View style={[styles.detail, styles.rateFlexBox]}>
        <View style={styles.serviceTitle}>
          <Text style={[styles.apartmentCleaning, styles.textTypo1]}>
            Apartment Cleaning
          </Text>
          <View style={styles.serviceDetail}>
            <View style={[styles.date, styles.rateFlexBox]}>
              <Text style={[styles.date1, styles.textTypo3]}>Date :</Text>
              <Text style={[styles.jan2023, styles.textTypo2]}>
                26 Jan, 2023
              </Text>
            </View>
            <View style={styles.time}>
              <Text style={[styles.date1, styles.textTypo3]}>Time :</Text>
              <Text style={[styles.pm, styles.textTypo2]}>04:00 PM</Text>
            </View>
          </View>
        </View>
      </View>
      <Image
        style={[styles.imageIcon, styles.imageIconLayout]}
        contentFit="cover"
        source={require("../assets/image17.png")}
      />
      <View style={[styles.otherInfo, styles.otherPosition]}>
        <ContainerAboutHandyman
          serviceDescription="About Handyman"
          profileImageUrl={require("../assets/image18.png")}
        />
        <CustomerInfoContainer
          dimensionsCode={require("../assets/image19.png")}
        />
        <View style={styles.priceDetail}>
          <Text style={[styles.priceDetail1, styles.textTypo3]}>
            Price Detail
          </Text>
          <View style={[styles.serviceDetail1, styles.serviceDetail1Layout]}>
            <View style={[styles.rate, styles.rateFlexBox]}>
              <Text style={[styles.date1, styles.textTypo3]}>Rate</Text>
              <Text style={[styles.jan2023, styles.textTypo2]}>$45.00</Text>
            </View>
            <View style={[styles.line1, styles.lineLayout]} />
            <View style={[styles.discount, styles.rateFlexBox]}>
              <Text style={[styles.discount5OffContainer, styles.textTypo3]}>
                <Text style={styles.discount1}>{`Discount `}</Text>
                <Text style={styles.off}>(5% off)</Text>
              </Text>
              <Text style={[styles.text2, styles.textTypo3]}>- $23.66</Text>
            </View>
            <View style={[styles.line1, styles.lineLayout]} />
            <View style={[styles.discount, styles.rateFlexBox]}>
              <Text style={[styles.date1, styles.textTypo3]}>Subtotal</Text>
              <Text style={[styles.text3, styles.textTypo2]}>$459</Text>
            </View>
            <View style={[styles.line3, styles.lineSpaceBlock]}>
              <View style={[styles.line4, styles.lineLayout]} />
            </View>
            <View style={[styles.totalAmount, styles.rateFlexBox]}>
              <Text style={[styles.totalAmount1, styles.textTypo]}>
                Total Amount
              </Text>
              <Text style={[styles.text4, styles.textTypo]}>$1255</Text>
            </View>
          </View>
        </View>
        <View style={styles.priceDetail}>
          <View style={[styles.title, styles.rateFlexBox]}>
            <Text style={[styles.reviews1, styles.textTypo1]}>Reviews</Text>
            <Text style={[styles.viewAll, styles.editTypo]}>View All</Text>
          </View>
          <View style={styles.comments}>
            <View style={styles.commentLayout}>
              <Image
                style={styles.imageIcon1}
                contentFit="cover"
                source={require("../assets/image20.png")}
              />
              <Text style={[styles.donnaBins, styles.ratingPosition]}>
                Donna Bins
              </Text>
              <View style={[styles.rating, styles.ratingPosition]}>
                <View style={styles.starParent}>
                  <Image
                    style={[styles.frameChild, styles.frameLayout]}
                    contentFit="cover"
                    source={require("../assets/star-1.png")}
                  />
                  <Image
                    style={[styles.frameItem, styles.frameLayout]}
                    contentFit="cover"
                    source={require("../assets/star-1.png")}
                  />
                  <Image
                    style={[styles.frameItem, styles.frameLayout]}
                    contentFit="cover"
                    source={require("../assets/star-1.png")}
                  />
                  <Image
                    style={[styles.frameItem, styles.frameLayout]}
                    contentFit="cover"
                    source={require("../assets/star-1.png")}
                  />
                  <Image
                    style={[styles.frameItem, styles.frameLayout]}
                    contentFit="cover"
                    source={require("../assets/star-1.png")}
                  />
                </View>
                <Text style={[styles.text5, styles.textTypo2]}>4.5</Text>
              </View>
              <Text style={[styles.dec, styles.decTypo]}>02 Dec</Text>
              <Text style={[styles.edit, styles.editTypo]}>Edit</Text>
              <Text
                style={[styles.ametMinimMollit, styles.ratingPosition]}
              >{`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet. `}</Text>
            </View>
            <View style={[styles.comment3, styles.commentLayout]}>
              <Image
                style={styles.imageIcon1}
                contentFit="cover"
                source={require("../assets/image21.png")}
              />
              <Text style={[styles.donnaBins, styles.ratingPosition]}>
                Saul Armstrong
              </Text>
              <View style={[styles.rating, styles.ratingPosition]}>
                <View style={styles.starParent}>
                  <Image
                    style={[styles.frameChild, styles.frameLayout]}
                    contentFit="cover"
                    source={require("../assets/star-1.png")}
                  />
                  <Image
                    style={[styles.frameItem, styles.frameLayout]}
                    contentFit="cover"
                    source={require("../assets/star-1.png")}
                  />
                  <Image
                    style={[styles.frameItem, styles.frameLayout]}
                    contentFit="cover"
                    source={require("../assets/star-1.png")}
                  />
                  <Image
                    style={[styles.frameItem, styles.frameLayout]}
                    contentFit="cover"
                    source={require("../assets/star-1.png")}
                  />
                  <Image
                    style={[styles.frameItem, styles.frameLayout]}
                    contentFit="cover"
                    source={require("../assets/star-1.png")}
                  />
                </View>
                <Text style={[styles.text5, styles.textTypo2]}>4.5</Text>
              </View>
              <Text style={[styles.jan, styles.decTypo]}>25 Jan</Text>
              <Text style={[styles.edit, styles.editTypo]}>Edit</Text>
              <Text
                style={[styles.ametMinimMollit, styles.ratingPosition]}
              >{`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet. `}</Text>
            </View>
          </View>
        </View>
      </View>
      <Button
        style={styles.confirm}
        title="proceed to payment"
        size="medium"
        status="primary"
        appearance="filled"
        color="#5f60b9"
        textStyle={styles.confirmText}
        onPress={() => navigation.navigate("BookingSummary")}
      >
        proceed to payment
      </Button>
      <StatusBar style={styles.framePosition} barStyle="default" />
      <View style={[styles.frame1, styles.framePosition]}>
        <View style={[styles.otherInfo1, styles.otherPosition]}>
          <View style={styles.aboutHandyman}>
            <Text style={[styles.aboutHandyman1, styles.textTypo3]}>
              About Handyman
            </Text>
            <View style={[styles.aboutHandyman2, styles.serviceDetail1Layout]}>
              <View style={styles.starParent}>
                <View style={styles.starParent}>
                  <Image
                    style={[styles.imageIcon3, styles.imageIconLayout]}
                    contentFit="cover"
                    source={require("../assets/image18.png")}
                  />
                  <View style={styles.justineBoyle}>
                    <Text style={[styles.reviews1, styles.textTypo1]}>
                      Ashutosh Pandey
                    </Text>
                    <View style={styles.serviceNameExpertAndRating}>
                      <Text style={[styles.cleaningExpert, styles.textTypo2]}>
                        Cleaning Expert
                      </Text>
                      <View style={styles.text7}>
                        <View style={styles.starParent}>
                          <Image
                            style={[styles.frameChild, styles.frameLayout]}
                            contentFit="cover"
                            source={require("../assets/star-1.png")}
                          />
                          <Image
                            style={[styles.frameChild, styles.frameLayout]}
                            contentFit="cover"
                            source={require("../assets/star-1.png")}
                          />
                          <Image
                            style={[styles.frameChild, styles.frameLayout]}
                            contentFit="cover"
                            source={require("../assets/star-1.png")}
                          />
                          <Image
                            style={[styles.frameChild, styles.frameLayout]}
                            contentFit="cover"
                            source={require("../assets/star-1.png")}
                          />
                          <Image
                            style={[styles.frameChild, styles.frameLayout]}
                            contentFit="cover"
                            source={require("../assets/star-1.png")}
                          />
                        </View>
                        <Text style={[styles.text8, styles.textTypo2]}>
                          4.5
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <Image
                  style={styles.verifiedIcon}
                  contentFit="cover"
                  source={require("../assets/verified.png")}
                />
              </View>
              <View style={styles.btn}>
                <View style={styles.call}>
                  <Image
                    style={styles.frameLayout}
                    contentFit="cover"
                    source={require("../assets/iconlylightcalling1.png")}
                  />
                  <Text style={[styles.call1, styles.call1Typo]}>Call</Text>
                </View>
                <View style={[styles.chat, styles.chatSpaceBlock]}>
                  <Image
                    style={styles.frameLayout}
                    contentFit="cover"
                    source={require("../assets/iconlylightchat.png")}
                  />
                  <Text style={[styles.chat1, styles.textTypo3]}>Chat</Text>
                </View>
              </View>
              <View style={[styles.rateHousemanWrapper, styles.rateFlexBox]}>
                <Text style={[styles.rateHouseman, styles.textTypo3]}>
                  Rate Houseman
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.priceDetail}>
            <Text style={[styles.aboutHandyman1, styles.textTypo3]}>
              About Customer
            </Text>
            <View style={[styles.aboutHandyman2, styles.serviceDetail1Layout]}>
              <View style={styles.starParent}>
                <Image
                  style={styles.imageIcon4}
                  contentFit="cover"
                  source={require("../assets/image22.png")}
                />
                <View style={styles.text9}>
                  <Text style={[styles.reviews1, styles.textTypo1]}>
                    Customer
                  </Text>
                  <View style={styles.comments}>
                    <View style={styles.email}>
                      <Image
                        style={styles.iconlylightmessage}
                        contentFit="cover"
                        source={require("../assets/iconlylightmessage2.png")}
                      />
                      <Text style={[styles.examplegmailcom, styles.textTypo2]}>
                        example@gmail.com
                      </Text>
                    </View>
                    <View style={styles.address}>
                      <Image
                        style={styles.iconlylightmessage}
                        contentFit="cover"
                        source={require("../assets/iconlylightlocation1.png")}
                      />
                      <Text style={[styles.examplegmailcom, styles.textTypo2]}>
                        exampleaddress
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.btn}>
                <View style={styles.call}>
                  <Image
                    style={styles.frameLayout}
                    contentFit="cover"
                    source={require("../assets/iconlylightcalling1.png")}
                  />
                  <Text style={[styles.call1, styles.call1Typo]}>Call</Text>
                </View>
                <View style={[styles.chat2, styles.chatSpaceBlock]}>
                  <Image
                    style={styles.frameLayout}
                    contentFit="cover"
                    source={require("../assets/iconlylightchat.png")}
                  />
                  <Text style={[styles.chat1, styles.textTypo3]}>Chat</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.priceDetail}>
            <Text style={[styles.priceDetail1, styles.textTypo3]}>
              Payment Details
            </Text>
            <View style={[styles.serviceDetail1, styles.serviceDetail1Layout]}>
              <View style={[styles.rate, styles.rateFlexBox]}>
                <Text style={[styles.date1, styles.textTypo3]}>ID</Text>
                <Text style={[styles.text10, styles.textTypo]}>#123</Text>
              </View>
              <View style={[styles.line1, styles.lineLayout]} />
              <View style={[styles.quantity, styles.rateFlexBox]}>
                <Text style={[styles.date1, styles.textTypo3]}>Quantity</Text>
                <Text style={[styles.jan2023, styles.textTypo2]}>*2</Text>
              </View>
              <View style={[styles.line6, styles.lineLayout]} />
              <View style={[styles.discount, styles.rateFlexBox]}>
                <Text style={[styles.discount5Off, styles.textTypo3]}>
                  Method
                </Text>
                <Text style={[styles.jan2023, styles.textTypo2]}>Cash</Text>
              </View>
              <View style={[styles.line1, styles.lineLayout]} />
              <View style={[styles.discount, styles.rateFlexBox]}>
                <Text style={[styles.date1, styles.textTypo3]}>Status</Text>
                <Text style={[styles.text13, styles.textTypo3]}>Pending</Text>
              </View>
              <View style={[styles.line1, styles.lineLayout]} />
              <View style={[styles.discount, styles.rateFlexBox]}>
                <Text style={[styles.date1, styles.textTypo3]}>Subtotal</Text>
                <Text style={[styles.text3, styles.textTypo2]}>₹459</Text>
              </View>
              <View style={[styles.line9, styles.lineSpaceBlock]}>
                <View style={[styles.line10, styles.lineLayout]} />
              </View>
              <View style={[styles.quantity, styles.rateFlexBox]}>
                <Text style={[styles.totalAmount1, styles.textTypo]}>
                  Total Amount
                </Text>
                <Text style={[styles.text4, styles.textTypo]}>₹1255</Text>
              </View>
            </View>
          </View>
          <View style={styles.priceDetail}>
            <Text style={[styles.priceDetail1, styles.textTypo3]}>
              Price Detail
            </Text>
            <View style={[styles.serviceDetail1, styles.serviceDetail1Layout]}>
              <View style={[styles.rate, styles.rateFlexBox]}>
                <Text style={[styles.date1, styles.textTypo3]}>Rate</Text>
                <Text style={[styles.jan2023, styles.textTypo2]}>₹45.00</Text>
              </View>
              <View style={[styles.line1, styles.lineLayout]} />
              <View style={[styles.totalAmount, styles.rateFlexBox]}>
                <Text style={[styles.date1, styles.textTypo3]}>Quantity</Text>
                <Text style={[styles.jan2023, styles.textTypo2]}>*2</Text>
              </View>
              <View style={[styles.line1, styles.lineLayout]} />
              <View style={[styles.discount, styles.rateFlexBox]}>
                <Text style={[styles.discount5OffContainer, styles.textTypo3]}>
                  <Text style={styles.discount1}>{`Discount `}</Text>
                  <Text style={styles.off}>(5% off)</Text>
                </Text>
                <Text style={[styles.text2, styles.textTypo3]}>- ₹23.66</Text>
              </View>
              <View style={[styles.line1, styles.lineLayout]} />
              <View style={[styles.discount, styles.rateFlexBox]}>
                <Text style={[styles.discount5OffContainer, styles.textTypo3]}>
                  <Text style={styles.coupon}>Coupon</Text>
                  <Text style={styles.ab45789a}> (AB45789A)</Text>
                </Text>
                <Text style={[styles.text13, styles.textTypo3]}>₹459</Text>
              </View>
              <View style={[styles.line1, styles.lineLayout]} />
              <View style={[styles.discount, styles.rateFlexBox]}>
                <Text style={[styles.date1, styles.textTypo3]}>Subtotal</Text>
                <Text style={[styles.text3, styles.textTypo2]}>₹459</Text>
              </View>
              <View style={[styles.line3, styles.lineSpaceBlock]}>
                <View style={[styles.line4, styles.lineLayout]} />
              </View>
              <View style={[styles.totalAmount, styles.rateFlexBox]}>
                <Text style={[styles.totalAmount1, styles.textTypo]}>
                  Total Amount
                </Text>
                <Text style={[styles.text4, styles.textTypo]}>₹1255</Text>
              </View>
            </View>
          </View>
          <ReviewsWrapper />
        </View>
        <Property1Default
          buttonText="Cancel Booking"
          property1DefaultPosition="absolute"
          property1DefaultBackgroundColor="unset"
          property1DefaultAlignSelf="unset"
          property1DefaultTop={385}
          property1DefaultLeft={20}
          property1DefaultWidth={335}
          property1DefaultBorderRadius={12}
          property1DefaultHeight="unset"
          property1DefaultMarginTop="unset"
          buttonTextFontWeight="500"
          buttonTextFontFamily="WorkSans-Medium"
          buttonTextTextTransform="capitalize"
          buttonTextTextAlign="center"
          buttonTextFlex={1}
          buttonTextFontSize={16}
          onLoginBtnPress={() =>
            navigation.navigate("AllBookingListWithStatus")
          }
        />
        <Image
          style={[styles.providerAppIcon, styles.framePosition]}
          contentFit="cover"
          source={require("../assets/provider-app2.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  confirmText: {
    fontWeight: "500",
    fontFamily: "WorkSans-Medium",
  },
  cancelBookingBtnText: {
    fontWeight: "500",
    fontFamily: "WorkSans-Medium",
  },
  rateFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  textTypo2: {
    color: Color.body,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  textTypo: {
    fontFamily: FontFamily.workSansSemiBold,
    fontWeight: "600",
  },
  lineLayout: {
    height: 1,
    backgroundColor: Color.border,
  },
  textTypo1: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
  },
  textTypo3: {
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  imageIconLayout: {
    height: 80,
    width: 80,
  },
  otherPosition: {
    left: 20,
    position: "absolute",
  },
  serviceDetail1Layout: {
    borderRadius: Border.br_xs,
    marginTop: 8,
    backgroundColor: Color.background,
  },
  lineSpaceBlock: {
    paddingTop: Padding.p_3xs,
    marginTop: 10,
  },
  editTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  ratingPosition: {
    left: 66,
    position: "absolute",
  },
  frameLayout: {
    height: 16,
    width: 16,
  },
  decTypo: {
    top: 1,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.body,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    position: "absolute",
  },
  commentLayout: {
    height: 96,
    width: 334,
  },
  framePosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  call1Typo: {
    color: Color.white,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  chatSpaceBlock: {
    marginLeft: 20,
    height: 38,
    width: 134,
    paddingVertical: Padding.p_6xs,
    paddingHorizontal: 0,
    justifyContent: "center",
    borderRadius: Border.br_8xs,
    alignItems: "center",
    flexDirection: "row",
  },
  bookingId1: {
    textAlign: "left",
    fontSize: FontSize.size_base,
  },
  text: {
    color: Color.main,
    fontSize: FontSize.size_lg,
    textAlign: "left",
  },
  bookingId: {
    top: 105,
    left: 20,
    position: "absolute",
  },
  line: {
    top: 142,
    width: 336,
    left: 20,
    position: "absolute",
  },
  apartmentCleaning: {
    color: Color.heading,
    alignSelf: "stretch",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  date1: {
    fontSize: FontSize.size_sm,
    color: Color.heading,
    textAlign: "left",
  },
  jan2023: {
    textAlign: "right",
    fontSize: FontSize.size_sm,
  },
  date: {
    alignSelf: "stretch",
  },
  pm: {
    marginLeft: 10,
    textAlign: "right",
    fontSize: FontSize.size_sm,
  },
  time: {
    justifyContent: "flex-end",
    marginTop: 10,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  serviceDetail: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  serviceTitle: {
    width: 154,
  },
  detail: {
    top: 167,
    left: 20,
    position: "absolute",
  },
  imageIcon: {
    top: 165,
    left: 189,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  priceDetail1: {
    textTransform: "capitalize",
    color: Color.heading,
    textAlign: "left",
    fontSize: FontSize.size_base,
  },
  rate: {
    width: 303,
  },
  line1: {
    width: 303,
    marginTop: 10,
  },
  discount1: {
    color: Color.colorGray_100,
  },
  off: {
    color: Color.colorMediumseagreen_200,
  },
  discount5OffContainer: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  text2: {
    color: Color.colorMediumseagreen_200,
    textAlign: "right",
    fontSize: FontSize.size_sm,
  },
  discount: {
    width: 303,
    marginTop: 10,
  },
  text3: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  line4: {
    alignSelf: "stretch",
  },
  line3: {
    width: 303,
  },
  totalAmount1: {
    color: Color.heading,
    textAlign: "left",
    fontSize: FontSize.size_base,
  },
  text4: {
    textAlign: "right",
    color: Color.main,
    fontSize: FontSize.size_base,
  },
  totalAmount: {
    alignItems: "center",
    width: 303,
    marginTop: 10,
  },
  serviceDetail1: {
    padding: Padding.p_base,
    marginTop: 8,
    backgroundColor: Color.background,
  },
  priceDetail: {
    marginTop: 32,
  },
  reviews1: {
    textTransform: "capitalize",
    color: Color.heading,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  viewAll: {
    color: Color.body,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  title: {
    width: 335,
    alignItems: "center",
  },
  imageIcon1: {
    width: 50,
    height: 50,
    left: 0,
    top: 0,
    position: "absolute",
  },
  donnaBins: {
    top: 0,
    textTransform: "capitalize",
    fontSize: FontSize.size_sm,
    color: Color.heading,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  frameChild: {
    borderRadius: Border.br_12xs,
    height: 16,
  },
  frameItem: {
    marginLeft: 1,
    borderRadius: Border.br_12xs,
    height: 16,
  },
  starParent: {
    flexDirection: "row",
  },
  text5: {
    marginLeft: 4,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  rating: {
    top: 24,
    alignItems: "center",
    flexDirection: "row",
  },
  dec: {
    left: 293,
  },
  edit: {
    top: 3,
    left: 311,
    textTransform: "capitalize",
    display: "none",
    color: Color.main,
    fontFamily: FontFamily.workSansSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  ametMinimMollit: {
    top: 56,
    lineHeight: 20,
    width: 268,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.body,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  jan: {
    left: 295,
  },
  comment3: {
    marginTop: 24,
  },
  comments: {
    marginTop: 16,
  },
  otherInfo: {
    top: 293,
    display: "none",
  },
  confirm: {
    top: 1360,
    left: 54,
    width: 287,
    height: 45,
    paddingVertical: Padding.p_6xs,
    paddingHorizontal: 0,
    justifyContent: "center",
    borderRadius: Border.br_8xs,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  aboutHandyman1: {
    color: Color.heading,
    textAlign: "left",
    fontSize: FontSize.size_base,
  },
  imageIcon3: {
    borderRadius: Border.br_121xl,
  },
  cleaningExpert: {
    textTransform: "capitalize",
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  text8: {
    marginLeft: 8,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  text7: {
    alignItems: "center",
    marginTop: 8,
    flexDirection: "row",
  },
  serviceNameExpertAndRating: {
    marginTop: 12,
  },
  justineBoyle: {
    marginLeft: 16,
  },
  verifiedIcon: {
    height: 15,
    marginLeft: 57,
    width: 16,
    display: "none",
  },
  call1: {
    marginLeft: 10,
  },
  call: {
    backgroundColor: Color.main,
    height: 38,
    width: 134,
    paddingVertical: Padding.p_6xs,
    paddingHorizontal: 0,
    justifyContent: "center",
    borderRadius: Border.br_8xs,
    alignItems: "center",
    flexDirection: "row",
  },
  chat1: {
    marginLeft: 10,
    fontSize: FontSize.size_sm,
    color: Color.heading,
    textAlign: "left",
  },
  chat: {
    backgroundColor: Color.background,
  },
  btn: {
    marginTop: 24,
    flexDirection: "row",
  },
  rateHouseman: {
    textTransform: "capitalize",
    fontSize: FontSize.size_sm,
    color: Color.main,
    textAlign: "left",
  },
  rateHousemanWrapper: {
    width: 288,
    marginTop: 24,
  },
  aboutHandyman2: {
    padding: Padding.p_5xl,
    marginTop: 8,
    backgroundColor: Color.background,
  },
  aboutHandyman: {
    display: "none",
  },
  imageIcon4: {
    width: 70,
    height: 70,
    borderRadius: Border.br_121xl,
  },
  iconlylightmessage: {
    width: 14,
    height: 14,
  },
  examplegmailcom: {
    marginLeft: 10,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  email: {
    alignItems: "center",
    flexDirection: "row",
  },
  address: {
    marginTop: 13,
    alignItems: "center",
    flexDirection: "row",
  },
  text9: {
    marginLeft: 24,
  },
  chat2: {
    backgroundColor: Color.white,
  },
  text10: {
    textAlign: "right",
    fontSize: FontSize.size_sm,
    color: Color.main,
  },
  quantity: {
    alignItems: "center",
    width: 303,
    display: "none",
    marginTop: 10,
  },
  line6: {
    width: 303,
    display: "none",
    marginTop: 10,
  },
  discount5Off: {
    color: Color.colorGray_100,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  text13: {
    color: Color.colorMediumseagreen_200,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  line10: {
    width: 303,
  },
  line9: {
    display: "none",
  },
  coupon: {
    color: Color.heading,
  },
  ab45789a: {
    color: Color.main,
  },
  otherInfo1: {
    top: 0,
  },
  providerAppIcon: {
    top: 473,
    height: 60,
  },
  frame1: {
    top: 279,
    height: 985,
    overflow: "hidden",
  },
  onclickOfBookingServiceS: {
    flex: 1,
    width: "100%",
    height: 1600,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default OnClickOfBookingServiceS;
