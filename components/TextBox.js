import React, { useState, setState } from "react";
import { StyleSheet, TextInput } from "react-native";

const TextBox = (props) => {
  const common = require("../assets/commonStyles");

  return (
    <TextInput
      style={[styles.textBox, common.text]}
      onChangeText={props.onChangeText}
      selectionColor={props.color}
      value={props.value}
      autoFocus={true}
      multiline={true}
    />
  );
};

const styles = StyleSheet.create({
  textBox: {
    backgroundColor: "#ffff",
    paddingVertical: 20,
    paddingHorizontal: 35,
    marginVertical: 15,
    alignItems: "center",
    borderRadius: 20,
  },
});

export default TextBox;
