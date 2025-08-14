import React from 'react';
import { Pressable, Text } from 'react-native';

export default function CustomButton({
  label,
  onPress,
  className = 'bg-secondary rounded-full mx-4 py-3',
  textClassName = 'text-primary font-bold text-center',
}) {
  return (
    <Pressable className={className} onPress={onPress}>
      <Text className={textClassName}>{label}</Text>
    </Pressable>
  );
}
