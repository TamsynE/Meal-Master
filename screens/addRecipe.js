import React, { useState, useEffect } from "react";
import {
  Button,
  View,
  Text,
  TextInput,
  ScrollView,
  SafeAreaView,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as SecureStore from "expo-secure-store";
import { Dropdown } from "react-native-element-dropdown";
import Icon from "react-native-vector-icons/Ionicons";

const AddRecipe = () => {
  const navigation = useNavigation();
  const [itemName, setItemName] = useState("");
  const [ingredientName, setIngredientName] = useState("");
  const [ingredientAmt, setIngredientAmt] = useState("");
  const [ingredientUnit, setIngredientUnit] = useState("");
  const [ingredientsList, setIngredientsList] = useState([]);
  const [recipesList, setRecipesList] = useState([]);
  const [recipesListBreak, setRecipesListBreak] = useState([]);
  const [recipesListLun, setRecipesListLun] = useState([]);
  const [recipesListDin, setRecipesListDin] = useState([]);
  const [recipesListDes, setRecipesListDes] = useState([]);
  const [recipesListSnack, setRecipesListSnack] = useState([]);
  const [recipesListOther, setRecipesListOther] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const measurements = [
    { label: "oz", value: "oz" },
    { label: "ml", value: "ml" },
    { label: "cup(s)", value: "cup(s)" },
    { label: "tsp", value: "tsp" },
    { label: "tbsp", value: "tbsp" },
    { label: "pound", value: "pound" },
    { label: "l", value: "l" },
    { label: "g", value: "g" },
    { label: "kg", value: "kg" },
    { label: "unit(s)", value: "unit(s)" },
  ];

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

  // Function to add ingredients to the list
  const handleAddIngredient = () => {
    if (
      ingredientName.trim() !== "" &&
      ingredientAmt.trim() !== "" &&
      ingredientUnit.trim() !== ""
    ) {
      const newIngredient = {
        name: ingredientName,
        amount: ingredientAmt,
        unit: ingredientUnit,
      };
      setIngredientsList([...ingredientsList, newIngredient]);
      setIngredientName("");
      setIngredientAmt("");
      setIngredientUnit("");
    }
  };

  const handleDeleteIngredient = (indexToRemove) => {
    // Filter out the ingredient at the specified index
    const updatedIngredientsList = ingredientsList.filter(
      (_, index) => index !== indexToRemove
    );
    // Set the state with the updated ingredients list
    setIngredientsList(updatedIngredientsList);
  };

  // Function to add recipe to the list
  const handleAddRecipe = async () => {
    if (activeCategory == "") {
      Alert.alert("OOPS", "You haven't chosen a Meal type.", [
        { text: "Understood", onPress: () => console.log("alert closed") },
      ]);
    } else if (itemName.trim() !== "" && ingredientsList.length > 0) {
      const newRecipe = {
        name: itemName,
        ingredients: ingredientsList,
        activeCategory: activeCategory,
      };

      let updatedRecipesList;

      switch (activeCategory) {
        case "Breakfasts":
          updatedRecipesList = [...recipesListBreak, newRecipe];
          break;
        case "Lunches":
          updatedRecipesList = [...recipesListLun, newRecipe];
          break;
        case "Dinners":
          updatedRecipesList = [...recipesListDin, newRecipe];
          break;
        case "Snacks":
          updatedRecipesList = [...recipesListSnack, newRecipe];
          break;
        case "Desserts":
          updatedRecipesList = [...recipesListDes, newRecipe];
          break;
        case "Other":
          updatedRecipesList = [...recipesListOther, newRecipe];
          break;
        default:
          updatedRecipesList = [...recipesList, newRecipe];
      }

      try {
        await SecureStore.setItemAsync(
          "recipesList",
          JSON.stringify(updatedRecipesList)
        );
        switch (activeCategory) {
          case "Breakfasts":
            setRecipesListBreak(updatedRecipesList);
            break;
          case "Lunches":
            setRecipesListLun(updatedRecipesList);
            break;
          case "Dinners":
            setRecipesListDin(updatedRecipesList);
            break;
          case "Snacks":
            setRecipesListSnack(updatedRecipesList);
            break;
          case "Desserts":
            setRecipesListDes(updatedRecipesList);
            break;
          case "Other":
            setRecipesListOther(updatedRecipesList);
            break;
          // Add more cases for other categories as needed
          default:
            setRecipesList(updatedRecipesList);
        }
        setItemName(""); // Clear item name input
        setIngredientsList([]); // Clear ingredients list
      } catch (error) {
        // console.error("Error saving recipes:", error);
        Alert.alert("OOPS", "Error saving recipes:", error, [
          { text: "Understood", onPress: () => console.log("alert closed") },
        ]);
      }
    } else {
      Alert.alert(
        "OOPS",
        "Please enter recipe name and ingredients before adding.",
        [{ text: "Understood", onPress: () => console.log("alert closed") }]
      );
    }
  };

  // Function to navigate back
  const goBack = () => {
    navigation.goBack();
  };

  // Function to navigate to Breakfasts screen
  const navigateToBreakfasts = () => {
    navigation.navigate("Breakfasts", { recipes: recipesList });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#e3ede0" }}>
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

        <View>
          <Pressable onPress={handleAddRecipe}>
            <Text style={{ color: "white", fontSize: 15, fontWeight: "500" }}>
              ADD
            </Text>
          </Pressable>
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Pressables for different categories */}
        <View style={{ flexDirection: "row", marginBottom: 20, marginTop: 15 }}>
          <Pressable
            onPress={() => setActiveCategory("Breakfasts")}
            style={{
              marginRight: 4,
              backgroundColor:
                activeCategory === "Breakfasts" ? "#83b291" : "grey",
              padding: 6,
              borderRadius: 14,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.2,
              shadowRadius: 3.84,
              elevation: 3,
            }}
          >
            <Text style={{ color: "white", fontSize: 12 }}>Breakfast</Text>
          </Pressable>

          <Pressable
            onPress={() => setActiveCategory("Lunches")}
            style={{
              marginRight: 4,
              backgroundColor:
                activeCategory === "Lunches" ? "#83b291" : "grey",
              padding: 6,
              borderRadius: 14,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.2,
              shadowRadius: 3.84,
              elevation: 3,
            }}
          >
            <Text style={{ color: "white", fontSize: 12 }}>Lunch</Text>
          </Pressable>
          <Pressable
            onPress={() => setActiveCategory("Dinners")}
            style={{
              marginRight: 4,
              backgroundColor:
                activeCategory === "Dinners" ? "#83b291" : "grey",
              padding: 6,
              borderRadius: 14,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.2,
              shadowRadius: 3.84,
              elevation: 3,
            }}
          >
            <Text style={{ color: "white", fontSize: 12 }}>Dinner</Text>
          </Pressable>
          <Pressable
            onPress={() => setActiveCategory("Snacks")}
            style={{
              marginRight: 4,
              backgroundColor: activeCategory === "Snacks" ? "#83b291" : "grey",
              padding: 6,
              borderRadius: 14,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.2,
              shadowRadius: 3.84,
              elevation: 3,
            }}
          >
            <Text style={{ color: "white", fontSize: 12 }}>Snack</Text>
          </Pressable>
          <Pressable
            onPress={() => setActiveCategory("Other")}
            style={{
              marginRight: 4,
              backgroundColor: activeCategory === "Other" ? "#83b291" : "grey",
              padding: 6,
              borderRadius: 14,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.2,
              shadowRadius: 3.84,
              elevation: 3,
            }}
          >
            <Text style={{ color: "white", fontSize: 12 }}>Other</Text>
          </Pressable>
          <Pressable
            onPress={() => setActiveCategory("Desserts")}
            style={{
              backgroundColor:
                activeCategory === "Desserts" ? "#83b291" : "grey",
              padding: 6,
              borderRadius: 14,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.2,
              shadowRadius: 3.84,
              elevation: 3,
            }}
          >
            <Text style={{ color: "white", fontSize: 12 }}>Dessert</Text>
          </Pressable>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              color: "#83b291",
              padding: 10,
              fontSize: 18,
              fontWeight: "500",
            }}
          >
            Recipe:
          </Text>
          <TextInput
            value={itemName}
            onChangeText={setItemName}
            placeholder="Enter recipe name"
            style={{
              backgroundColor: "white",
              borderRadius: 11,
              width: 200,
              padding: 10,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.2,
              shadowRadius: 3.84,
              elevation: 3,
            }}
          />
        </View>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.inputContainer}>
            <TextInput
              value={ingredientName}
              onChangeText={setIngredientName}
              placeholder="Ingredient"
              style={styles.input}
            />
            <TextInput
              value={ingredientAmt}
              onChangeText={setIngredientAmt}
              placeholder="Amount"
              style={styles.input}
            />
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={measurements}
              search
              maxHeight={250}
              placeholder={"Select"}
              labelField="label"
              valueField="value"
              searchPlaceholder="Search..."
              value={ingredientUnit}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={(item) => {
                setValue(item.value);
                setIsFocus(false);
                setIngredientUnit(item.value);
              }}
            ></Dropdown>
          </View>
          <Pressable onPress={handleAddIngredient} style={styles.pressable}>
            <Text style={{ color: "white" }}>Add Ingredient</Text>
          </Pressable>

          <ScrollView>
            <View style={{ width: 300, marginTop: 10 }}>
              {ingredientsList.map((ingredient, index) => (
                <View
                  key={index}
                  style={{
                    borderRadius: 5,
                    backgroundColor: "white",
                    margin: 8,
                    padding: 10,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "#83b291", flex: 1 }}>
                    {ingredient.name}
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text>{ingredient.amount}</Text>
                    <Text style={{ marginLeft: 5 }}>{ingredient.unit}</Text>
                    <View style={{ marginLeft: 10 }}>
                      <TouchableOpacity
                        onPress={() => handleDeleteIngredient(index)}
                      >
                        <Icon name="trash-outline" size={16} color="grey" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    paddingLeft: 5,
    width: 100,
    marginBottom: 5,
  },
  buttonContainer: {
    width: "100%",
    marginTop: 20,
  },
  dropdown: {
    marginTop: 15,
    height: 40,
    width: 85,
    borderColor: "white",
    backgroundColor: "white",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 12,
  },
  pressable: {
    backgroundColor: "#83b291",
    padding: 15,
    borderRadius: 12,
  },
});

export default AddRecipe;
