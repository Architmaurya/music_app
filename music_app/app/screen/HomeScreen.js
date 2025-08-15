// App.js
import React from "react";
import { View, Text, ScrollView, Image, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Cog6ToothIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";

export default function HomeScreen() {
  const continueListening = [
    { id: 1, title: "The Sound of Silence", image: "https://via.placeholder.com/150" },
    { id: 2, title: "The Wall", image: "https://via.placeholder.com/150" },
    { id: 3, title: "Abbey Road", image: "https://via.placeholder.com/150" },
  ];

  const madeForYou = [
    { id: 1, title: "Daily Mix 1", image: "https://via.placeholder.com/150" },
    { id: 2, title: "Discover Weekly", image: "https://via.placeholder.com/150" },
    { id: 3, title: "Release Radar", image: "https://via.placeholder.com/150" },
  ];

  const popularPlaylists = [
    { id: 1, title: "Top Hits 2023", image: "https://via.placeholder.com/150" },
    { id: 2, title: "Chill Vibes", image: "https://via.placeholder.com/150" },
    { id: 3, title: "Workout", image: "https://via.placeholder.com/150" },
  ];

  const renderSection = (title, data) => (
    <View className="mt-5">
      <Text className="text-white text-lg font-semibold mb-2">{title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item) => (
          <View key={item.id} className="mr-4">
            <Image
              source={{ uri: item.image }}
              className="w-32 h-32 rounded-lg"
            />
            <Text className="text-white mt-1 w-32" numberOfLines={1}>
              {item.title}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-[#0d1f14] mt-12 px-4">
      {/* Header */}
      <View className="flex-row items-center justify-between -mt-8">
        <View className="w-10 h-10 rounded-full bg-gray-300" />
        <Cog6ToothIcon size={28} color="white" />
      </View>

      {/* Greeting */}
      <Text className="text-white text-xl font-bold mt-3">Good evening</Text>

      {/* Search Bar */}
      <View className="flex-row items-center bg-gray-800 rounded-lg mt-3 px-3 py-2">
        <MagnifyingGlassIcon size={20} color="gray" />
        <TextInput
          placeholder="Find"
          placeholderTextColor="gray"
          className="ml-2 flex-1 text-white"
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {renderSection("Continue Listening", continueListening)}
        {renderSection("Made for You", madeForYou)}
        {renderSection("Popular Playlists", popularPlaylists)}
      </ScrollView>
    </SafeAreaView>
  );
}
