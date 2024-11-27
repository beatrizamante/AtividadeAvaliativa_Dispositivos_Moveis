import {
  SafeAreaView,
  TextInput,
  Text,
  StyleSheet,
  Image,
  View,
} from "react-native";
import { router } from "expo-router";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ImageButton from "../components/ImageButton";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Login() {
  const [login, onChangeLogin] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  const [err, setErr] = React.useState("");

  const handleLogin = () => {
    if (login === "fulano" && password === "123") {
      setErr("");
      router.replace("/Listagem");
    } else {
      setErr("Invalid Login.");
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.container_up}>
          <Text style={styles.welcome_text}>
            Please, sign up to fly with us!
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeLogin}
            value={login}
            placeholder="Login"
            placeholderTextColor={"#706C6C"}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            value={password}
            placeholder="Password"
            keyboardType="default"
            secureTextEntry={true}
            placeholderTextColor={"#706C6C"}
          />
          {err ? <Text style={styles.error_text}>{err}</Text> : null}
          </View>
          <View style={styles.container_down}>  
          <Image source={require("../assets/image_login.png")}></Image>
          <ImageButton
            onPress={handleLogin}
            uri={require("../assets/image_button.png")}
          />
        </View>
          <Footer/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center", 
    backgroundColor: "#243046"

  },
  container_up: {
    height: 360,
    width: 380,
    backgroundColor: "#38415D",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 10
  },
  container_down: {
    height: 360,
    width: 380,
    backgroundColor: "#FFFFFF",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 12,
    paddingBottom:10
  },
  input: {
    padding: 10,
    height: 50,
    width: 350,
    margin: 32,
    borderRadius: 15,
    backgroundColor: "#F6F1ED",
  },
  center_image: {
    width: 350,
    height: 256,
  },
  welcome_text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  error_text: {
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#B11818",
    color: "#FFF",
    padding: 8
  }
});
