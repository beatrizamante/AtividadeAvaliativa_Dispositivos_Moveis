import { TouchableOpacity, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import React from "react";

type HamButtonProps = {
  onPress: () => void
  testId: string;
};

export default function HamButton({ onPress, testId }: HamButtonProps) {

  return (
    <View>
        <TouchableOpacity 
        testID={testId}
        onPress={onPress}
        >
            <Ionicons name="menu" size={50} color={"white"}></Ionicons>
        </TouchableOpacity>
      </View>
  );
}
