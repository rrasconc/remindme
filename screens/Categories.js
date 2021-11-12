import React from "react";
import {
  StatusBar,
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  FlatList,
} from "react-native";
import { FAB } from "react-native-paper";

import CategoryButton from "../components/CategoryButton";

const DATA = [{ id: 0, category: "Home", color: "#E78484", icon: "home" }];

export default Categories = ({ navigation }) => {
  const common = require("../assets/commonStyles");

  return (
    <SafeAreaView style={common.screen}>
      <View style={common.container}>
        <Text style={common.title}>CATEGORIES</Text>
        <FlatList
          style={[{ alignSelf: "stretch" }]}
          data={DATA}
          keyExtractor={(item) => item.category}
          ListEmptyComponent={
            <View style={common.center}>
              <Text style={[common.text, { marginVertical: 100 }]}>
                Yoy don't have any categories yet
              </Text>
            </View>
          }
          renderItem={({ item }) => (
            <CategoryButton
              category={item.category}
              color={item.color}
              icon={item.icon}
              onPress={() => {
                navigation.navigate("Reminder", { reminder: item });
              }}
              shadow={true}
            />
          )}
        />
      </View>
      <FAB
        style={[common.fab, { backgroundColor: "#5b5b5b" }]}
        large
        color={"#ffff"}
        icon="plus"
        onPress={() => {
          navigation.navigate("AddCategory");
        }}
      />
    </SafeAreaView>
  );
};
