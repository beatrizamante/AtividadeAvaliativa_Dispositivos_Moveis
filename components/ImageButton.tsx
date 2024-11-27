import {
  View,
  Image,
  Text,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";

type ImageButtonProps = {
  onPress: () => void;
  uri: ImageSourcePropType;
};

export default function ImageButton({
  onPress,
  uri,
}: ImageButtonProps) {
  return (
    <View style={styles.button_container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Image source={uri}></Image>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button_container: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    width: 345,
    height: 94,
    borderRadius: 15,
    shadowColor: "#000000",
    shadowOpacity: 25,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 4,
  },
})