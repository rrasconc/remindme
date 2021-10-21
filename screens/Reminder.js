import React, { PureComponent } from "react";
import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native";
import TaskBox from "../components/TaskBox";

const DATA = [
  { id: 0, task: "Fed my dog" },
  { id: 1, task: "Watered my plants" },
  { id: 2, task: "Locked my door" },
  { id: 3, task: "Read a book" },
];

const Reminder = ({ navigation, route }) => {
  const common = require("../assets/commonStyles");

  return (
    <SafeAreaView style={common.screen}>
      <View style={[common.container, { flex: 2 }]}>
        <Text style={common.title}>{route.params.reminder.category}</Text>
        <View style={styles.tasks}>
          <Text style={common.text}>I have...</Text>
          <FlatList
            style={{ alignSelf: "stretch" }}
            data={DATA}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TaskBox
                color={route.params.reminder.color}
                task={item.task}
              ></TaskBox>
            )}
          />
        </View>
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
});
