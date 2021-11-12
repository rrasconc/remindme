import React, { useState } from "react";
import { View, Text } from "react-native";
import { RadioButton } from "react-native-paper";

const RadioItem = (props) => {
  const common = require("../assets/commonStyles");
  const value = props.value;
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <RadioButton
        value={value}
        status={props.checked === value ? "checked" : "unchecked"}
        onPress={props.onPress}
        color={props.color}
      />
      <Text style={common.text}>{value}</Text>
      <View />
      <View />
      <View />
      <View />
    </View>
  );
};

export default RadioItem;
