import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screen/HomeScreen";
import DetailsScreen from "../screen/DetailsScreen";
import SearchScreen from "../screen/SearchScreen";
import ProfileScreen from "../screen/ProfileScreen";
import BottomMenuBar from "../components/Common/BottomMenuBar";
import WelcomeScreen from "../screen/WelcomeScreen";
import RegistionScreen from "../screen/RegistionScreen";
import EnterOtpScreen from "../screen/EnterOtpScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Home stack: Home + Details
function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

// Tabs with custom BottomMenuBar
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <BottomMenuBar {...props} />}
    >
      <Tab.Screen name="HomeTab" component={HomeStack} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

// Root stack: Welcome first, then tabs
export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Welcome"
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Registion" component={RegistionScreen} />
      <Stack.Screen name="EnterOtp" component={EnterOtpScreen} />
      <Stack.Screen name="MainTabs" component={MainTabs} />
    </Stack.Navigator>
  );
}
