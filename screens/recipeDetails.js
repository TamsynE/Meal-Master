// RecipeDetails.js

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const RecipeDetails = ({ route }) => {
  const { recipe } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.recipeName}>{recipe.name}</Text>
      <View style={styles.ingredientsContainer}>
        {recipe.ingredients.map((ingredient, index) => (
          <View key={index} style={styles.ingredient}>
            <Text>{ingredient.name}</Text>
            <Text>{ingredient.amount}</Text>
            <Text>{ingredient.unit}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  recipeName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  ingredientsContainer: {
    marginTop: 10,
  },
  ingredient: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
});

export default RecipeDetails;
