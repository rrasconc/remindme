import React, { useState, useEffect, useCallback } from "react";
import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native";
import { FAB, Appbar } from "react-native-paper";
import TaskBox from "../components/TaskBox";

const Reminder = ({ navigation, route }) => {
  const common = require("../assets/commonStyles");
  const reminderColor = route.params.category.color;

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
        <Text style={common.title}>{route.params.category.name}</Text>
        <View style={styles.tasks}>
          <Text style={common.text}>I have...</Text>
          <FlatList
            style={{ alignSelf: "stretch" }}
            data={route.params.category.reminders}
            keyExtractor={(item) => item.task}
            ListEmptyComponent={
              <View style={common.center}>
                <Text style={common.text}>
                  Wait... You don't have any reminders yet!
                </Text>
              </View>
            }
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
            navigation.navigate("AddReminder", {
              category: route.params.category,
            });
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
