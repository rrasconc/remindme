import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import TextBox from "../components/TextBox";
import ColorPicker from "../components/ColorPicker";
import IconPicker from "../components/IconPicker";
import PrettyButton from "../components/PrettyButton";
import CategoryButton from "../components/CategoryButton";

const AddCategory = () => {
  const common = require("../assets/commonStyles");
  const [name, onChangeName] = useState();
  const [selectedColor, setSelectedColor] = useState("#FFFF");
  const [selectedIcon, setSelectedIcon] = useState("");
  const COLORS = [
    "#4FC2B7",
    "#FA8686",
    "#FCD981",
    "#DA9CDF",
    "#FCA386",
    "#5F95B4",
    "#6EDE95",
    "#F7B2B7",
    "#97CFFF",
    "#C09FD8",
  ];
  const ICONS = [
    "bell",
    "home",
    "briefcase",
    "money",
    "user",
    "book",
    "car",
    "calendar",
    "gift",
    "shopping-cart",
  ];
  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };
  const handleIconSelect = (icon) => {
    setSelectedIcon(icon);
  };

  return (
    <SafeAreaView style={common.screen}>
      <View style={common.container}>
        <Text style={common.title}>Add a category!</Text>
        <ScrollView style={{ marginVertical: 20, alignSelf: "stretch" }}>
          <Text style={common.text}>Enter the category's name:</Text>
          <TextBox color={"#5b5b5b"} onChangeText={onChangeName} value={name} />
          <Text style={common.text}>Pick the category's color:</Text>
          <ColorPicker
            colors={COLORS}
            selectedColor={selectedColor}
            onSelect={(color) => {
              handleColorSelect(color);
            }}
          />
          <Text style={common.text}>Select the category's icon:</Text>
          <IconPicker
            icons={ICONS}
            selectedIcon={selectedIcon}
            onSelect={(icon) => {
              handleIconSelect(icon);
            }}
          />
          <Text style={common.text}>
            This is how your category will look like:
          </Text>

          <CategoryButton
            category={name}
            color={selectedColor}
            icon={selectedIcon}
          />
          <Text style={common.text}>Do you like it?</Text>
          <PrettyButton
            text={"ADD"}
            color={"#5B5B5B"}
            onSelect={() => {
              console.log("Pressed");
            }}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default AddCategory;
