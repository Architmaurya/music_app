import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screen/HomeScreen';
import DetailsScreen from '../screen/DetailsScreen';
import SearchScreen from '../screen/SearchScreen';    
import ProfileScreen from '../screen/ProfileScreen'; 
import BottomMenuBar from '../common/BottomMenuBar'; 

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Home stack: Home + Details
function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeMain" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

// Bottom tabs with custom BottomMenuBar
export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={props => <BottomMenuBar {...props} />} // render custom tab bar
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
