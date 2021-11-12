import React, { useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import TextBox from "../components/TextBox";
import RadioItem from "../components/RadioItem";
import PrettyButton from "../components/PrettyButton";

const AddReminder = ({ navigation, route }) => {
  const common = require("../assets/commonStyles");
  const color = route.params.reminderColor;
  const [checked, setChecked] = useState("Daily");

  return (
    <SafeAreaView style={common.screen}>
      <View style={common.container}>
        <Text style={common.title}>New reminder</Text>
        <ScrollView style={{ marginVertical: 20 }}>
          <View style={{ alignSelf: "stretch" }}>
            <Text style={common.text}>Enter your task(i.e, Feed my dog):</Text>
            <TextBox color={color}></TextBox>
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
            <PrettyButton text={"ADD"} color={color} />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default AddReminder;
