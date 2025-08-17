import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeftIcon } from "react-native-heroicons/outline"; // Make sure heroicons is installed
import CustomButton from "../components/Common/CustomButton";

const EnterOtpScreen = () => {
  const navigation = useNavigation();
  const [otp, setOtp] = useState("");

  return (
    <View className="flex-1 bg-primary px-4 mt-12 pt-6">
      {/* Back Arrow */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="absolute top-6 left-4 bg-white/10 rounded-full p-2"
      >
        <ArrowLeftIcon size={28} color="white" />
      </TouchableOpacity>

      {/* Header */}
      <View className="items-center mb-10">
        <Text className="text-white text-2xl font-bold">Enter OTP</Text>
      </View>

      {/* Input */}
    <View className="w-full mt-[50%]">
        <TextInput
        placeholder="Enter OTP"
        placeholderTextColor="#94a3b8"
        keyboardType="numeric"
        value={otp}
        onChangeText={setOtp}
        className="bg-field text-red rounded-full w-full text-center p-5 mb-6"
      />

      {/* Button */}
      <CustomButton
        label="Verify"
        onPress={() => navigation.navigate('HomeMain')}
      />
    </View>
    
    </View>
  );
};

export default EnterOtpScreen;
