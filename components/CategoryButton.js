import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const CategoryButton = (props) => {
  const common = require("../assets/commonStyles");

  return (
    <TouchableOpacity
      style={[
        styles.container,
        props.shadow ? styles.shadow : null,
        { backgroundColor: props.color },
      ]}
      onPress={props.onPress}
    >
      <View style={styles.inner}>
        <FontAwesome name={props.icon} size={25} color={"#5B5B5B"} />
        <Text style={common.text}>{props.category}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 40,
    marginVertical: 15,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  inner: {
    backgroundColor: "rgba(126,126,126,0.2)",
    borderRadius: 10,
    padding: 20,
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 7,
    elevation: 7,
  },
});

export default CategoryButton;
