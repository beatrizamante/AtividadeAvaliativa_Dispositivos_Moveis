import { TouchableOpacity, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import React from "react";

type HamButtonProps = {
  onPress: () => void
};

export default function HamButton({ onPress }: HamButtonProps) {

  return (
    <View>
        <TouchableOpacity 
        testID="menu-button"
        onPress={onPress}>
            <Ionicons name="menu" size={50} color={"white"}></Ionicons>
        </TouchableOpacity>
      </View>
  );
}
