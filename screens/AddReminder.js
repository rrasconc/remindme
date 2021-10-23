import React, { PureComponent } from "react";
import { View, Text, SafeAreaView } from "react-native";
import TextBox from "../components/TextBox";

const AddReminder = ({ navigation, route }) => {
  const common = require("../assets/commonStyles");

  return (
    <SafeAreaView style={common.screen}>
      <View style={common.container}>
        <Text style={common.title}>New reminder</Text>
        <View style={{ alignSelf: "stretch" }}>
          <Text style={common.text}>Enter your task(i.e, Feed my dog):</Text>
          <TextBox color={route.params.reminderColor}></TextBox>
          <Text style={common.text}>
            Select the frecuency(frecuency of the notifications you’ll receive)
          </Text>
          <TextBox></TextBox>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddReminder;
