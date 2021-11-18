import React, { useState, useEffect, useCallback } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import TextBox from "../components/TextBox";
import RadioItem from "../components/RadioItem";
import PrettyButton from "../components/PrettyButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AddReminder = ({ navigation, route }) => {
  const common = require("../assets/commonStyles");
  const color = route.params.category.color;
  const [checked, setChecked] = useState("Daily");
  const [task, onChangeTask] = useState();

  const handleAdd = useCallback(async () => {
    try {
      let data = await AsyncStorage.getItem("@data");
      let reminder = { task: task, frecuency: checked };
      let newData = JSON.parse(data).map((element) => {
        if (element.name === route.params.category.name) {
          element.reminders.push(reminder);
        }
        return element;
      });
      await AsyncStorage.setItem("@data", JSON.stringify(newData));
      console.log("data saved");
      navigation.navigate("Categories");
    } catch (error) {
      console.log(error);
    }
  }, [task, checked]);

  return (
    <SafeAreaView style={common.screen}>
      <View style={common.container}>
        <Text style={common.title}>New reminder</Text>
        <ScrollView style={{ marginVertical: 20 }}>
          <View style={{ alignSelf: "stretch" }}>
            <Text style={common.text}>Enter your task(i.e, Feed my dog):</Text>
            <TextBox
              color={color}
              onChangeText={onChangeTask}
              value={task}
            ></TextBox>
            <Text style={common.text}>
              Select the frecuency(frecuency of the notifications you’ll
              receive):
            </Text>
            <View style={common.holder}>
              <RadioItem
                value={"Daily"}
                color={color}
                onPress={() => setChecked("Daily")}
                checked={checked}
              />
              <RadioItem
                value={"Weekly"}
                color={color}
                onPress={() => setChecked("Weekly")}
                checked={checked}
              />
              <RadioItem
                value={"Monthly"}
                color={color}
                onPress={() => setChecked("Monthly")}
                checked={checked}
              />
            </View>
            <PrettyButton
              text={"ADD"}
              color={color}
              onPress={() => {
                handleAdd();
              }}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default AddReminder;
