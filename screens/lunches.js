import {
  View,
  Text,
  ScrollView,
  Button,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";

const Lunches = ({ navigation }) => {
  const [recipesList, setRecipesList] = useState([]);

  useEffect(() => {
    const loadRecipesList = async () => {
      try {
        const existingRecipesList = await SecureStore.getItemAsync(
          "recipesList"
        );
        if (existingRecipesList) {
          setRecipesList(JSON.parse(existingRecipesList));
        }
      } catch (error) {
        console.error("Error loading recipes list:", error);
      }
    };

    loadRecipesList();
  }, []);

  const removeRecipe = (recipeIndex) => {
    const updatedRecipesList = [...recipesList];
    updatedRecipesList.splice(recipeIndex, 1);
    setRecipesList(updatedRecipesList);
    // Save the updated recipes list to SecureStorage
    SecureStore.setItemAsync("recipesList", JSON.stringify(updatedRecipesList))
      .then(() => console.log("Recipes list updated successfully"))
      .catch((error) => console.error("Error updating recipes list:", error));
  };

  if (!recipesList || recipesList.length === 0) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
            backgroundColor: "#83b291",
            height: 45,
          }}
        >
          <Text
            onPress={() => navigation.goBack()}
            style={{ flex: 1, color: "white" }}
          >
            Back
          </Text>
        </View>
        <View></View>
        <View style={styles.container}>
          <Text
            style={{
              padding: 10,
              fontSize: 16,
              fontWeight: "600",
              color: "#83b291",
              paddingBottom: 10,
              textAlign: "center",
            }}
          >
            Lunches
          </Text>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={{ fontWeight: "300" }}>No recipes available</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
          backgroundColor: "#83b291",
          height: 45,
        }}
      >
        <Text
          onPress={() => navigation.goBack()}
          style={{ flex: 1, color: "white" }}
        >
          Back
        </Text>
      </View>
      <View></View>
      <View style={styles.container}>
        <Text
          style={{
            padding: 10,
            fontSize: 16,
            fontWeight: "600",
            color: "#83b291",
            paddingBottom: 10,
            textAlign: "center",
          }}
        >
          Lunches
        </Text>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        ></View>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.recipesContainer}>
            {recipesList && recipesList.length > 0 ? (
              recipesList.map((recipe, index) => (
                <View key={index} style={styles.recipeItem}>
                  <View style={styles.recipeHeader}>
                    <Text style={styles.recipeName}>{recipe.name}</Text>
                    <TouchableOpacity onPress={() => removeRecipe(index)}>
                      <MaterialIcons
                        name="delete"
                        size={18}
                        color="grey"
                        style={styles.deleteIcon}
                      />
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.recipeIngredients}>
                    {recipe.ingredients.map((ingredient, idx) => (
                      <Text key={idx}>
                        {ingredient.name}: {ingredient.amount} {ingredient.unit}
                        {"\n"}
                      </Text>
                    ))}
                  </Text>
                </View>
              ))
            ) : (
              <Text>No recipes available</Text>
            )}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Lunches;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e3ede0",
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  pressable: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  item: {
    marginTop: 5,
    backgroundColor: "white",
  },
  pressable: {},
  recipesContainer: {
    width: "100%",
  },
  recipeItem: {
    marginBottom: 20,
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  recipeHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  recipeName: {
    fontSize: 18,
    fontWeight: "300",
    color: "#83b291",
  },
  recipeIngredients: {
    fontSize: 13,
    fontWeight: "300",
  },
  deleteIcon: {
    padding: 5,
    marginLeft: 10,
    marginRight: 0,
  },
});
