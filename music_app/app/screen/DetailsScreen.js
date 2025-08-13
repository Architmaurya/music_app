import React from 'react';
import { View, Text, Button  } from 'react-native';

export default function DetailsScreen({navigation}) {
  return (
    <View className="flex-1 justify-center items-center ">
      <Text className="text-lg">Details Screen</Text>
       <Button
              title="Go to Home"
                onPress={() => navigation.navigate('HomeMain')}
              />
    </View>
  );
}
