import React from 'react';
import { View, Text,Image } from 'react-native';
import photo from '../../assets/images/welcome.png'; // Adjust the path as necessary

export default function WelcomeScreen() {
  return (
    <View className="w-full h-full mt-12  bg-primary  ">
        <View className="">
            <Image source={photo} className="w-full " />
        </View>
        <Text className="text-2xl text-center text-white font-bold mt-4">Soundscape</Text>
        <Text className="text-lg text-white mt-2">Discover, stream, and manage your music effortlessly.</Text>
    </View>
  );
}