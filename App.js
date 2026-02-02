import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";
import { useState } from "react";

export default function App() {
  const car = [
    "a",
    "b",
    "c",
    "d",
    "b",
    "c",
    "d",
    "b",
    "c",
    "d",
    "b",
    "c",
    "d",
    "b",
    "c",
    "d",
    "b",
    "c",
    "d",
    "b",
    "c",
    "d",
  ];
  return (
    <View style={styles.container}>
      <ScrollView>
        {car.map((leter) => (
          <Text style={styles.text}>{leter}</Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    paddingBottom: 0,
  },
});
