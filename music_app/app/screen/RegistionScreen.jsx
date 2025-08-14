import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import CustomButton from "../components/Common/CustomButton";

export default function RegistionScreen() {
    // const navigation = useNavigation();
  const [mobileNumber, setMobileNumber] = useState("");

  return (
    <View className=" bg-primary w-full h-full mt-12 pt-3">
      {/* Title */}
      <Text className="text-white text-center text-3xl font-bold mt-3">
        Music Stream
      </Text>

      {/* Input */}
     <View>
         <TextInput
        placeholder="Enter mobile number"
        placeholderTextColor="#94a3b8"
        keyboardType="phone-pad"
        value={mobileNumber}
        onChangeText={setMobileNumber}
        className="bg-field text-white rounded-full w-[95%] mt-[80%] flex text-center mx-auto p-5 mb-6"
      />
      <CustomButton label={"Send OTP"} 
        />
     </View>



    
    </View>
  );
}
