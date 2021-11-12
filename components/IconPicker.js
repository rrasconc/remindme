import React, { PureComponent } from "react";
import { View, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const IconPicker = (props) => {
  const common = require("../assets/commonStyles");

  const handlePress = (icon) => {
    props.onSelect(icon);
  };

  return (
    <View style={common.holder}>
      <View style={styles.colorRow}>
        <FlatList
          data={props.icons}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.iconItem,
                props.selectedIcon === item
                  ? styles.selected
                  : styles.unselected,
              ]}
              onPress={() => {
                handlePress(item);
              }}
            >
              <FontAwesome name={item} size={22} color={"#5B5B5B"} />
            </TouchableOpacity>
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
  iconItem: {
    borderRadius: 20,
    margin: 10,
    backgroundColor: "rgba(126,126,126,0.2)",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  selected: {
    height: 45,
    width: 45,
  },
  unselected: {
    height: 35,
    width: 35,
  },
});

export default IconPicker;
