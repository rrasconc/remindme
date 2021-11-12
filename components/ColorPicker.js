import React, { PureComponent, useState } from "react";
import { View, TouchableOpacity, StyleSheet, FlatList } from "react-native";

const ColorPicker = (props) => {
  const common = require("../assets/commonStyles");

  const handlePress = (color) => {
    props.onSelect(color);
  };

  return (
    <View style={[common.holder]}>
      <View style={styles.colorRow}>
        <FlatList
          data={props.colors}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.circle,
                { backgroundColor: item },
                props.selectedColor === item
                  ? styles.selected
                  : styles.unselected,
              ]}
              onPress={() => {
                handlePress(item);
              }}
            />
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  circle: {
    borderRadius: 20,
    marginHorizontal: 10,
    alignSelf: "center",
  },
  selected: {
    height: 40,
    width: 40,
  },
  unselected: {
    height: 35,
    width: 35,
  },
});

export default ColorPicker;
