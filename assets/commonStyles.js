"use strict";
import { StyleSheet, StatusBar } from "react-native";
import { Ubuntu_400Regular } from "@expo-google-fonts/ubuntu";
export const primary = "#5B5B5B";
module.exports = StyleSheet.create({
  text: { color: "#5B5B5B", fontWeight: "bold", fontSize: 18 },
  center: { justifyContent: "center", alignItems: "center" },
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
  holder: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    marginVertical: 15,
    backgroundColor: "#ffff",
    borderRadius: 20,
  },
  fab: {
    position: "absolute",
    margin: 26,
    right: 0,
    bottom: 0,
    elevation: 1,
  },
});
