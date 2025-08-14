import React from "react";
import { View, TouchableOpacity } from "react-native";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "react-native-heroicons/outline";

export default function BottomMenuBar({ state, navigation }) {
  return (
    <View className="flex-row justify-around items-center bg-primary py-5 border-t border-gray-200">
      
      {/* Home Button */}
      <TouchableOpacity
        className="p-2"
        onPress={() => navigation.navigate(state.routes[0].name)}
      >
        <HomeIcon size={28} color="white" />
      </TouchableOpacity>

      {/* Search Button */}
      <TouchableOpacity
        className="p-2"
        onPress={() => navigation.navigate(state.routes[1].name)}
      >
        <MagnifyingGlassIcon size={28} color="white" />
      </TouchableOpacity>

      {/* Profile Button */}
      <TouchableOpacity
        className="p-2"
        onPress={() => navigation.navigate(state.routes[2].name)}
      >
        <UserIcon size={28} color="white" />
      </TouchableOpacity>
    </View>
  );
}
