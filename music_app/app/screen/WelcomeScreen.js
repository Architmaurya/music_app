import React from 'react';
import { View, Text,Image,Button } from 'react-native';
import photo from '../../assets/images/welcome.png'; // Adjust the path as necessary
import CustomButton from '../components/Common/CustomButton';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {
     const navigation = useNavigation();
  return (
    <View className="w-full h-full   bg-primary  ">
        <View className="">
            <Image source={photo} className="w-full " />
        </View>
        <View>
            <Text className="text-2xl text-center text-white font-bold mt-4">Soundscape</Text>
        <Text className="text-lg text-center w-[80%] mx-auto text-white mt-2">Discover, stream, and manage your music effortlessly.</Text>
        </View>
        <View className="absolute bottom-[10%] w-full   pb-4"
        >
            <CustomButton label={"Start"}
                onPress={() => navigation.navigate('Registion')}
            />
        </View>

    </View>
  );
}