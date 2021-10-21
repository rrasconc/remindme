import React, { useState, setState } from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { BottomNavigation } from "react-native-paper";
import Reminders from "./screens/Reminders";
import Reminder from "./screens/Reminder";

const Stack = createStackNavigator();
const RemindersScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Reminders" component={Reminders} />
        <Stack.Screen name="Reminder" component={Reminder} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const SettingsCreen = () => <View></View>;

export default function App() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "reminders", title: "Reminders", icon: "bell", color: "red" },
    { key: "settings", title: "Settings", icon: "cog" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    reminders: RemindersScreen,
    settings: SettingsCreen,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      labeled={false}
      onIndexChange={setIndex}
      renderScene={renderScene}
      activeColor="#5b5b5b"
      inactiveColor="#b8b8b8"
      barStyle={{ backgroundColor: "#FFFFFF" }}
    />
  );
}
