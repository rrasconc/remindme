import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Switch } from "react-native-paper";

const TaskBox = (props) => {
  const common = require("../assets/commonStyles");
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <TouchableOpacity
      style={[styles.box, { backgroundColor: "#ffff" }]}
      onPress={props.onPress}
    >
      <Text style={common.text}>{props.task}</Text>
      <Switch
        value={isSwitchOn}
        onValueChange={onToggleSwitch}
        color={props.color}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    paddingVertical: 10,
    paddingHorizontal: 35,
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 20,
    flexDirection: "row",
  },
});

export default TaskBox;
