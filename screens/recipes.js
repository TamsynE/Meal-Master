import {
  View,
  Text,
  Button,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
function Recipes({ navigation, recipesList }) {
  const navigateToBreakfasts = () => {
    navigation.navigate("Breakfasts", { recipes: recipesList });
  };
  const navigateToLunches = () => {
    navigation.navigate("Lunches", { recipes: recipesList });
  };
  const navigateToDinners = () => {
    navigation.navigate("Dinners", { recipes: recipesList });
  };
  const navigateToSnacks = () => {
    navigation.navigate("Snacks", { recipes: recipesList });
  };
  const navigateToDesserts = () => {
    navigation.navigate("Desserts", { recipes: recipesList });
  };
  const navigateToOther = () => {
    navigation.navigate("Other", { recipes: recipesList });
  };
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.navigate("AddRecipe")}
        style={{
          marginTop: 20,
          padding: 15,
          alignItems: "center",
          backgroundColor: "#83b291",
          width: 45,
          borderRadius: 30,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.1,
          shadowRadius: 3.84,
        }}
      >
        <FontAwesomeIcon icon={faPlus} color="white" size={16} />
      </Pressable>
      <View
        style={{
          marginTop: 20,
          flex: 1,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Pressable style={styles.pressable} onPress={navigateToBreakfasts}>
          <Text style={{ fontSize: 14, fontWeight: "600", color: "#83b291" }}>
            Breakfasts
          </Text>
        </Pressable>
        <Pressable style={styles.pressable} onPress={navigateToLunches}>
          <Text style={{ fontSize: 14, fontWeight: "600", color: "#83b291" }}>
            Lunches
          </Text>
        </Pressable>
        <Pressable style={styles.pressable} onPress={navigateToDinners}>
          <Text style={{ fontSize: 14, fontWeight: "600", color: "#83b291" }}>
            Dinners
          </Text>
        </Pressable>
        <Pressable style={styles.pressable} onPress={navigateToSnacks}>
          <Text style={{ fontSize: 14, fontWeight: "600", color: "#83b291" }}>
            Snacks
          </Text>
        </Pressable>
        <Pressable style={styles.pressable} onPress={navigateToDesserts}>
          <Text style={{ fontSize: 14, fontWeight: "600", color: "#83b291" }}>
            Desserts
          </Text>
        </Pressable>
        <Pressable style={styles.pressable} onPress={navigateToOther}>
          <Text style={{ fontSize: 14, fontWeight: "600", color: "#83b291" }}>
            Other
          </Text>
        </Pressable>
      </View>

      {/* <Button
        title="Go to Home2"
        onPress={() => navigation.navigate("Home2")}
      />
      <Button
        title="Go to RecipeDetails"
        onPress={() => navigation.navigate("RecipeDetails")}
      /> */}
      <View style={{ padding: 20, alignItems: "center" }}></View>
    </View>
  );
}

export default Recipes;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e3ede0",
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  pressable: {
    backgroundColor: "white",
    padding: 10,
    margin: 10,
    width: "42%", // Adjust as needed for spacing and size
    height: "32%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
