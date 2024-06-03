import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";

function Settings({ recipesList }) {
  const [recipesListLength, setRecipesListLength] = useState(0);

  useEffect(() => {
    const fetchRecipesListLength = async () => {
      try {
        const recipesListData = await SecureStore.getItemAsync("recipesList");
        if (recipesListData) {
          const recipesList = JSON.parse(recipesListData);
          setRecipesListLength(recipesList.length);
        }
      } catch (error) {
        console.error("Error retrieving recipes list from SecureStore:", error);
      }
    };

    fetchRecipesListLength();
  }, []);
  return (
    <View style={styles.container}>
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
          My MealMaster Account
        </Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.heading}>Username</Text>
        <Text style={styles.content}>tamsynevezard</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.heading}>DOB</Text>
        <Text style={styles.content}>04/14/2002</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.heading}>Stats</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.heading2}>Breakfasts:</Text>
        <Text style={styles.content}>{recipesListLength}</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.heading2}>Lunches:</Text>
        <Text style={styles.content}>0</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.heading2}>Dinners:</Text>
        <Text style={styles.content}>0</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.heading2}>Snacks:</Text>
        <Text style={styles.content}>0</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.heading2}>Desserts:</Text>
        <Text style={styles.content}>0</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.heading2}>Other:</Text>
        <Text style={styles.content}>0</Text>
      </View>
    </View>
  );
}

export default Settings;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    alignContent: "center",
  },
  heading: {
    padding: 10,
    fontSize: 14,
    fontWeight: "600",
    color: "#83b291",
    paddingBottom: 10,
  },
  heading2: {
    marginLeft: 15,
    padding: 10,
    fontSize: 14,
    fontWeight: "400",
    color: "#83b291",
    paddingBottom: 10,
  },
  content: {
    paddingTop: 10,
    paddingRight: 10,
    fontWeight: "300",
  },
  box: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
