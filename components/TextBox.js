import React, { useState, setState } from "react";
import { StyleSheet, TextInput } from "react-native";

const TextBox = (props) => {
  const common = require("../assets/commonStyles");
  const [text, onChangeText] = useState("");

  return (
    <TextInput
      style={styles.box}
      onChangeText={onChangeText}
      selectionColor={props.color}
      value={text}
      autoFocus={true}
    />
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#ffff",
    paddingVertical: 20,
    paddingHorizontal: 35,
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 20,
    flexDirection: "row",
  },
});

export default TextBox;
