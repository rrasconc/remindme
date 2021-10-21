import React from "react";
import {
  StatusBar,
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  FlatList,
} from "react-native";
import ReminderButton from "../components/ReminderButton";

const DATA = [
  { id: 0, category: "Home", color: "#E78484", icon: "home" },
  { id: 1, category: "Work", color: "#4FC2B7", icon: "briefcase" },
  { id: 2, category: "Bills", color: "#FCD981", icon: "money" },
];

export default Reminders = ({ navigation }) => {
  const common = require("../assets/commonStyles");

  return (
    <SafeAreaView style={common.screen}>
      <View style={common.container}>
        <Text style={common.title}>REMINDERS</Text>
        <FlatList
          style={{ alignSelf: "stretch" }}
          data={DATA}
          keyExtractor={(item) => item.category}
          renderItem={({ item }) => (
            <ReminderButton
              category={item.category}
              color={item.color}
              icon={item.icon}
              onPress={() => {
                navigation.navigate("Reminder", { reminder: item });
              }}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};
