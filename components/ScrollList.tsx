import {
  View,
  Text,
  SectionList,
  SafeAreaView,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import helper, { Passenger } from "../services/data-helper";
import Line from "./Line";

type ListProps = {
  data: Passenger[];
};

export default function ScrollList({ data }: ListProps) {
  const DATA = helper(data);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item.passenger_name + index}
          renderItem={({ item }) => (
            <View style={styles.container_passenger}>
  <Image
    style={styles.avatar}
    source={{ uri: item.passenger_avatar }}
  />
  <View style={styles.passenger_info}>
    <Text style={styles.infoTitles}>
      Nome: <Text style={styles.infoText}>{item.passenger_name}</Text>
    </Text>
    <View style={styles.row}>
      <Text style={styles.infoTitles}>
        Origem: <Text style={styles.infoText}>{item.origin}</Text>
      </Text>
      <Text style={styles.infoTitles}>
        Destino: <Text style={styles.infoText}>{item.destination}</Text>
      </Text>
    </View>
    <Line/>
  </View>
</View>
          )}
          renderSectionHeader={({ section: { category } }) => (
            <View style={styles.categories_container}>
              <Text style={styles.categories}>{category}</Text>
            </View>
          )}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 380,
    height: 755,
    padding: 10,
    marginVertical: 10,
  },
  container_passenger: {
    flexDirection: "row", 
    alignItems: "center",
    backgroundColor: "#30415D",
    padding: 10,
    marginVertical: 4,
    borderRadius: 5, 
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#FFF",
    marginRight: 10, 
  },
  passenger_info: {
    flex: 1, 
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between", 
    marginTop: 5,
  },
  infoTitles: {
    fontSize: 16,
    fontWeight: "400", 
    color: "#FFFFFF",
  },
  infoText: {
    fontSize: 14,
    fontWeight: "200", 
    color: "#FFFFFF",
  },
  categories: {
    fontSize: 18,
    fontWeight: "semibold",
    textDecorationLine: "underline",
    color: "#FFF"
  },
  categories_container: {
    padding: 4,
    justifyContent: "center",
    alignItems: "center"
  }
});
