"use strict";
import { StyleSheet, StatusBar } from "react-native";
import { Ubuntu_400Regular } from "@expo-google-fonts/ubuntu";
export const primary = "#5B5B5B";
module.exports = StyleSheet.create({
  text: { color: "#5B5B5B", fontWeight: "bold", fontSize: 18 },
  primary: { backgroundColor: "#5B5B5B", color: "#5B5B5B" },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#5b5b5b",
    marginVertical: 10,
  },
  screen: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#f8f8fa",
    flex: 1,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    marginTop: 10,
  },
});
