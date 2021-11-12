import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native";
import { FAB, Appbar } from "react-native-paper";
import TaskBox from "../components/TaskBox";

const DATA = [
  { id: 0, task: "Fed my dog" },
  { id: 1, task: "Watered my plants" },
  { id: 2, task: "Locked my door" },
  { id: 3, task: "Read a book" },
];

const Reminder = ({ navigation, route }) => {
  const common = require("../assets/commonStyles");
  const reminderColor = route.params.reminder.color;
  const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";

  return (
    <SafeAreaView style={common.screen}>
      <Appbar.Header style={styles.bar}>
        <Appbar.Action
          icon="chevron-left"
          size={35}
          color={"#5b5b5b"}
          onPress={() => {
            navigation.navigate("Categories");
          }}
        />
      </Appbar.Header>
      <View style={[common.container, { flex: 2 }]}>
        <Text style={common.title}>{route.params.reminder.category}</Text>
        <View style={styles.tasks}>
          <Text style={common.text}>I have...</Text>
          <FlatList
            style={{ alignSelf: "stretch" }}
            data={DATA}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TaskBox color={reminderColor} task={item.task}></TaskBox>
            )}
          />
        </View>
        <FAB
          style={[common.fab, { backgroundColor: reminderColor }]}
          large
          color={"#ffff"}
          icon="plus"
          onPress={() => {
            navigation.navigate("AddReminder", { reminderColor });
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Reminder;

const styles = StyleSheet.create({
  tasks: {
    marginVertical: 40,
    justifyContent: "center",
    alignItems: "center",
    flex: 2,
    alignSelf: "stretch",
  },
  bar: {
    backgroundColor: "#f8f8fa",
    height: 10,
    elevation: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
  },
});
