import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useCallback, useState } from "react";
import {
  Text,
  SafeAreaView,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { FAB } from "react-native-paper";
import CategoryButton from "../components/CategoryButton";

export default Categories = ({ navigation }) => {
  const common = require("../assets/commonStyles");
  const [categories, setCategories] = useState([]);
  const [isFetchingData, setIsFetchingData] = useState(false);

  const fetchCategories = useCallback(async () => {
    setIsFetchingData(true);
    try {
      let data = await AsyncStorage.getItem("@data");
      setCategories(JSON.parse(data));
      setTimeout(() => {
        setIsFetchingData(false);
      }, 800);
      //await AsyncStorage.removeItem("@data");
    } catch (error) {
      console.log(error);
    }
  }, [isFetchingData, categories]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      fetchCategories();
    });
    return unsubscribe;
  }, []);

  return (
    <SafeAreaView style={common.screen}>
      <View style={common.container}>
        <Text style={common.title}>CATEGORIES</Text>
        {isFetchingData ? (
          <View style={{ flex: 1, justifyContent: "center", marginTop: "50%" }}>
            <ActivityIndicator size="large" color={common.primary.color} />
          </View>
        ) : (
          <FlatList
            style={[{ alignSelf: "stretch" }]}
            data={categories}
            keyExtractor={(item) => item.name}
            ListEmptyComponent={
              <View style={common.center}>
                <Text style={[common.text, { marginTop: 100 }]}>
                  Yoy don't have any categories yet
                </Text>
                <CategoryButton
                  category={"Add a category"}
                  color={"#ffff"}
                  icon={"plus-circle"}
                  onPress={() => {
                    navigation.navigate("AddCategory");
                  }}
                  shadow={false}
                />
              </View>
            }
            renderItem={({ item }) => (
              <CategoryButton
                category={item.name}
                color={item.color}
                icon={item.icon}
                onPress={() => {
                  navigation.navigate("Reminder", { category: item });
                }}
                shadow={true}
              />
            )}
          />
        )}
      </View>
      <FAB
        style={[common.fab, { backgroundColor: "#5b5b5b" }]}
        large
        color={"#ffff"}
        icon="plus"
        onPress={() => {
          navigation.navigate("AddCategory");
        }}
      />
    </SafeAreaView>
  );
};
