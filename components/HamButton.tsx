import { TouchableOpacity, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

type HamButtonProps = {
  onPress: () => void
};

export default function HamButton({ onPress }: HamButtonProps) {

  return (
    <View>
        <TouchableOpacity onPress={onPress}>
            <Ionicons name="menu" size={50} color={"white"}></Ionicons>
        </TouchableOpacity>
      </View>
  );
}
