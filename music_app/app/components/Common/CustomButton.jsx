import React from 'react';
import { Pressable, Text } from 'react-native';

export default function CustomButton({
  label,
  onPress,
  className = 'bg-secondary rounded-full mx-3 p-6',
  textClassName = 'text-xl font-bold text-center',
}) {
  return (
    <Pressable className={className} onPress={onPress}>
      <Text className={textClassName}>{label}</Text>
    </Pressable>
  );
}
