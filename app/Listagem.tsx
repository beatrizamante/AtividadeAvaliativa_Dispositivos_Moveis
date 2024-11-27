import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import DATA from "../services/data-passengers";
import ScrollList from "../components/ScrollList";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function list() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Vôos</Text>
      </View>
      <ScrollList data={DATA} />
      <Footer/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#243046",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 26,
    padding: 4,
    fontWeight: "semibold",
    color: "#F6F1ED"
  },
})
