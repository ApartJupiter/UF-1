const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import LoginAs from "./screens/LoginAs";
import LoginServiceMan from "./screens/LoginServiceMan";
import SignupServiceMan from "./screens/SignupServiceMan";
import Property1Default from "./components/Property1Default";
import Profile from "./screens/Profile";
import Login from "./screens/Login";
import ServiceManDashboard from "./screens/ServiceManDashboard";
import ChangePassword from "./screens/ChangePassword";
import MainScreen from "./screens/MainScreen";
import Signup from "./components/Signup";
import EarningList from "./screens/EarningList";
import Category from "./screens/Category";
import UserProfile from "./screens/UserProfile";
import ServiceFilter from "./screens/ServiceFilter";
import OnClickOfCategory from "./screens/OnClickOfCategory";
import ServiceFilter1 from "./screens/ServiceFilter1";
import BookTheServiceStep from "./screens/BookTheServiceStep";
import BookTheServiceStep1 from "./screens/BookTheServiceStep1";
import ConfrimBookingPopup from "./screens/ConfrimBookingPopup";
import BookingSuccessful from "./screens/BookingSuccessful";
import IconlyLightCategory from "./components/IconlyLightCategory";
import CategoryIcon from "./components/CategoryIcon";
import IconlyBoldTicket from "./components/IconlyBoldTicket";
import IconlyBoldHome from "./components/IconlyBoldHome";
import IconlyBoldNotification from "./components/IconlyBoldNotification";
import IconlyBoldProfile from "./components/IconlyBoldProfile";
import IconlyLightHome from "./components/IconlyLightHome";
import Notification1 from "./screens/Notification1";
import IconlyLightProfile from "./components/IconlyLightProfile2";
import OnClickOfBookingServiceS from "./screens/OnClickOfBookingServiceS";
import IconlyLightNotification from "./components/IconlyLightNotification";
import BookingStatus from "./screens/BookingStatus";
import BookingSummary from "./screens/BookingSummary";
import AllBookingListWithStatus from "./screens/AllBookingListWithStatus";
import Payment from "./screens/Payment";
import IconlyLightTicket from "./components/IconlyLightTicket";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
function BottomTabsRoot({ navigation }) {
  const [bottomTabItemsNormal] = React.useState([
    <IconlyLightHome />,
    <IconlyLightNotification />,
    <IconlyLightTicket />,
    <IconlyLightProfile />,
    <IconlyLightCategory />,
  ]);
  const [bottomTabItemsActive] = React.useState([
    <IconlyBoldHome />,
    <IconlyBoldNotification />,
    <IconlyBoldTicket />,
    <IconlyBoldProfile />,
    <CategoryIcon />,
  ]);
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={({ state, descriptors, navigation }) => {
        const activeIndex = state.index;
        return (
          <View
            style={{
              width: 375,
              height: 60,
              flexDirection: "row",
            }}
          >
            {bottomTabItemsNormal.map((item, index) => {
              const isFocused = state.index === index;
              return (
                <Pressable
                  key={index}
                  onPress={() => {
                    navigation.navigate({
                      name: state.routes[index].name,
                      merge: true,
                    });
                  }}
                >
                  {activeIndex === index
                    ? bottomTabItemsActive[index] || item
                    : item}
                </Pressable>
              );
            })}
          </View>
        );
      }}
    >
      <Tab.Screen
        name="ServiceManDashboard"
        component={ServiceManDashboard}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Notification1"
        component={Notification1}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="BookingStatus"
        component={BookingStatus}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="ServiceFilter"
        component={ServiceFilter}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "WorkSans-Regular": require("./assets/fonts/WorkSans-Regular.ttf"),
    "WorkSans-Medium": require("./assets/fonts/WorkSans-Medium.ttf"),
    "WorkSans-SemiBold": require("./assets/fonts/WorkSans-SemiBold.ttf"),
    "WorkSans-Bold": require("./assets/fonts/WorkSans-Bold.ttf"),
    "WorkSans-SemiBoldItalic": require("./assets/fonts/WorkSans-SemiBoldItalic.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
  });

  function MaterialIcon({ name, style }) {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
    return (
      <MIcon name={name} size={height} color={tintColor} style={iconStyle} />
    );
  }

  const IconProvider = (name) => ({
    toReactElement: (props) => MaterialIcon({ name, ...props }),
  });

  function createIconsMap() {
    return new Proxy(
      {},
      {
        get(target, name) {
          return IconProvider(name);
        },
      }
    );
  }
  const MaterialIconsPack = {
    name: "material",
    icons: createIconsMap(),
  };

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <IconRegistry icons={[MaterialIconsPack]} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Stack.Navigator
              initialRouteName="LoginAs"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen name="BottomTabsRoot" component={BottomTabsRoot} />
              <Stack.Screen
                name="LoginAs"
                component={LoginAs}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="LoginServiceMan"
                component={LoginServiceMan}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SignupServiceMan"
                component={SignupServiceMan}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ChangePassword"
                component={ChangePassword}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MainScreen"
                component={MainScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="EarningList"
                component={EarningList}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Category"
                component={Category}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="UserProfile"
                component={UserProfile}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="OnClickOfCategory"
                component={OnClickOfCategory}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ServiceFilter1"
                component={ServiceFilter1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="BookTheServiceStep"
                component={BookTheServiceStep}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="BookTheServiceStep1"
                component={BookTheServiceStep1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ConfrimBookingPopup"
                component={ConfrimBookingPopup}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="BookingSuccessful"
                component={BookingSuccessful}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="OnClickOfBookingServiceS"
                component={OnClickOfBookingServiceS}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="BookingSummary"
                component={BookingSummary}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AllBookingListWithStatus"
                component={AllBookingListWithStatus}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Payment"
                component={Payment}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          ) : null}
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};
export default App;
