import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import HamButton from "./HamButton";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { router } from "expo-router";

type contextProps = {
  context: "Listagem" | "Sobre";
};

export default function Header({ context }: contextProps) {
  const { showActionSheetWithOptions } = useActionSheet();

  const handleNav = () => {
    let options: string[] = [];
    if ("Listagem" == "Listagem") {
      options = ["Sobre", "Logout"];
    } else {
      options = ["Logout"];
    }
    const destructiveButtonIndex = 1;
    const cancelButtonIndex = 2;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      (selectedIndex) => {
        if (context == "Listagem") {
          switch (selectedIndex) {
            case 0:
              router.replace("/Sobre");
              break;
            case 1:
              if (router.canDismiss()) {
                router.dismissAll();
              }
              router.replace("/");
              break;
            case destructiveButtonIndex:
              router.replace("/");
            case cancelButtonIndex:
              console.log("cancel");
          }
        } else {
          switch (selectedIndex) {
            case destructiveButtonIndex:
              router.replace("/");
              break;
          }
        }
      }
    );
  };

  return (
    <View style={style.container}>
      <View>
        <Image
          source={require("../assets/plane_logo.png")}
          style={style.icon}
        ></Image>
        <Text style={style.text_header}>ocean airlines . . .</Text>
      </View>
      <HamButton onPress={handleNav} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    height: 70,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#30415D",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  icon: {
    width: 40,
    height: 40,
  },
  text_header: {
    fontSize: 12,
    color: "#FFFFFF",
    textAlign: "right",
  },
});
