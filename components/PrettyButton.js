import React, { useState, setState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Button } from "react-native-paper";

const PrettyButton = (props) => {
  const common = require("../assets/commonStyles");

  return (
    <Button
      mode="text"
      color={"#ffff"}
      onPress={props.onPress}
      style={[common.holder, { backgroundColor: props.color }]}
    >
      {props.text}
    </Button>
  );
};

export default PrettyButton;
