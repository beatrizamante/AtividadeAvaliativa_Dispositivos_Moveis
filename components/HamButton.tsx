import { TouchableOpacity, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import React from "react";

type HamButtonProps = {
  onPress: () => void
  testID: string;
};

export default function HamButton({ onPress, testID }: HamButtonProps) {

  return (
    <View>
        <TouchableOpacity 
        testID={testID}
        onPress={onPress}
        >
            <Ionicons name="menu" size={50} color={"white"}></Ionicons>
        </TouchableOpacity>
      </View>
  );
}
