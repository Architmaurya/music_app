import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View className="flex-1 items-center justify-center ">
      <Text className="text-lg font-bold text-red-600">Home Screen</Text>
      <View className="mt-4">
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    </View>
  );
}
