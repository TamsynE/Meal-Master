// import {
//   StyleSheet,
//   Text,
//   View,
//   SafeAreaView,
//   Pressable,
//   TextInput,
// } from "react-native";
// import React, { useState } from "react";
// import { useRoute } from "@react-navigation/native";
// import moment from "moment";
// import axios from "axios";
// import { useNavigation } from "@react-navigation/native";
// import Breakfasts from "./breakfasts"; // Correct import path

// const MenuScreen = ({ navigation }) => {
//   const route = useRoute();
//   const [option, setOption] = useState("");
//   const [item, setItem] = useState("");
//   const [type, setType] = useState("");
//   const [menuItems, setMenuItems] = useState([]);
//   const addMenuItem = (menuItem) => {
//     setMenuItems([...menuItems, menuItem]);
//   };
//   const navigateToBreakfasts = () => {
//     navigation.navigate("Breakfasts", { menuItems });
//   };

//   return (
//     <SafeAreaView>
//       <View
//         style={{
//           flexDirection: "row",
//           alignItems: "center",
//           padding: 10,
//           backgroundColor: "#83b291",
//         }}
//       >
//         <Text
//           onPress={() => navigation.goBack()}
//           style={{ flex: 1, color: "white" }}
//         >
//           Back
//         </Text>
//         <View style={{ flex: 1 }}>
//           <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
//             {route?.params.date}
//           </Text>
//         </View>
//         <Text style={{ color: "white" }}>Clear</Text>
//       </View>
//       <View>
//         <Text
//           style={{
//             padding: 10,
//             fontSize: 16,
//             fontWeight: "600",
//             color: "#83b291",
//             paddingBottom: 10,
//             textAlign: "center",
//           }}
//         >
//           Menu
//         </Text>
//       </View>
//       <View>
//         <View style={{ padding: 10 }}>
//           <View
//             style={{
//               backgroundColor: "#e3ede0",
//               borderRadius: 10,
//             }}
//           >
//             <View
//               style={{
//                 marginVertical: 12,
//                 flexDirection: "row",
//                 alignItems: "center",
//                 gap: 12,
//                 alignSelf: "center",
//               }}
//             >
//               <Pressable
//                 onPress={() => setType("Breakfast")}
//                 style={{
//                   paddingHorizontal: 12,
//                   paddingVertical: 6,
//                   backgroundColor: type == "Breakfast" ? "#83b291" : "grey",
//                   borderRadius: 25,
//                 }}
//               >
//                 <Text
//                   style={{ fontSize: 14, fontWeight: "600", color: "white" }}
//                 >
//                   Breakfast
//                 </Text>
//               </Pressable>
//               <Pressable
//                 onPress={() => setType("Lunch")}
//                 style={{
//                   paddingHorizontal: 12,
//                   paddingVertical: 6,
//                   backgroundColor: type == "Lunch" ? "#83b291" : "grey",
//                   borderRadius: 25,
//                 }}
//               >
//                 <Text
//                   style={{ fontSize: 14, fontWeight: "600", color: "white" }}
//                 >
//                   Lunch
//                 </Text>
//               </Pressable>
//               <Pressable
//                 onPress={() => setType("Dinner")}
//                 style={{
//                   paddingHorizontal: 12,
//                   paddingVertical: 6,
//                   backgroundColor: type == "Dinner" ? "#83b291" : "grey",
//                   borderRadius: 25,
//                 }}
//               >
//                 <Text
//                   style={{ fontSize: 14, fontWeight: "600", color: "white" }}
//                 >
//                   Dinner
//                 </Text>
//               </Pressable>
//               <Pressable
//                 onPress={() => setType("Snack")}
//                 style={{
//                   paddingHorizontal: 12,
//                   paddingVertical: 6,
//                   backgroundColor: type == "Snack" ? "#83b291" : "grey",
//                   borderRadius: 25,
//                 }}
//               >
//                 <Text
//                   style={{ fontSize: 14, fontWeight: "600", color: "white" }}
//                 >
//                   Snack
//                 </Text>
//               </Pressable>
//             </View>
//             <Text
//               style={{
//                 fontSize: 14,
//                 fontWeight: "600",
//                 color: "#83b291",
//                 paddingBottom: 10,
//                 textAlign: "center",
//               }}
//             >
//               Description
//             </Text>
//             <View
//               style={{
//                 paddingLeft: 40,
//                 paddingRight: 40,
//               }}
//             >
//               <TextInput
//                 placeholder="Spagetti Bolognaise"
//                 style={{
//                   backgroundColor: "white",
//                   height: 40,
//                   padding: 10,
//                   borderRadius: 8,
//                 }}
//               ></TextInput>
//             </View>

//             <View
//               style={{
//                 marginVertical: 12,
//                 flexDirection: "row",
//                 alignItems: "center",
//                 gap: 12,
//                 alignSelf: "center",
//               }}
//             >
//               <Pressable
//                 onPress={() => setOption("Main")}
//                 style={{
//                   paddingHorizontal: 12,
//                   paddingVertical: 6,
//                   backgroundColor: option == "Main" ? "#83b291" : "grey",
//                   borderRadius: 25,
//                 }}
//               >
//                 <Text
//                   style={{ fontSize: 14, fontWeight: "600", color: "white" }}
//                 >
//                   Main
//                 </Text>
//               </Pressable>
//               <Pressable
//                 onPress={() => setOption("Side")}
//                 style={{
//                   paddingHorizontal: 12,
//                   paddingVertical: 6,
//                   backgroundColor: option == "Side" ? "#83b291" : "grey",
//                   borderRadius: 25,
//                 }}
//               >
//                 <Text
//                   style={{ fontSize: 14, fontWeight: "600", color: "white" }}
//                 >
//                   Side
//                 </Text>
//               </Pressable>
//             </View>
//             <View
//               style={{
//                 marginVertical: 12,
//                 flexDirection: "row",
//                 alignItems: "center",
//                 gap: 12,
//                 alignSelf: "center",
//               }}
//             >
//               <TextInput
//                 value={item}
//                 onChangeText={(text) => setItem(text)}
//                 placeholder="Meal name"
//                 style={{
//                   backgroundColor: "white",
//                   borderRadius: 6,
//                   flex: 1,
//                   padding: 10,
//                 }}
//               />
//               <Pressable
//                 onPress={addMenuItem}
//                 style={{
//                   paddingHorizontal: 12,
//                   paddingVertical: 6,
//                   backgroundColor: "#83b291",
//                   borderRadius: 6,
//                   width: 60,
//                 }}
//               >
//                 <Text
//                   style={{
//                     fontSize: 14,
//                     fontWeight: "600",
//                     color: "white",
//                     textAlign: "center",
//                   }}
//                   onPress={addMenuItem}
//                 >
//                   ADD
//                 </Text>
//               </Pressable>
//             </View>
//           </View>
//         </View>
//       </View>
//       <Pressable
//         onPress={addMenuItem}
//         style={{
//           paddingHorizontal: 12,
//           paddingVertical: 6,
//           backgroundColor: "#83b291",
//           borderRadius: 6,
//           width: 60,
//         }}
//       >
//         <Text
//           style={{
//             fontSize: 14,
//             fontWeight: "600",
//             color: "white",
//             textAlign: "center",
//           }}
//         >
//           ADD
//         </Text>
//       </Pressable>
//     </SafeAreaView>
//   );
// };

// export default MenuScreen;
/// MenuScreen.js
// import React, { useState } from "react";
// import { View, Text, SafeAreaView, Pressable, TextInput } from "react-native";

// const MenuScreen = ({ navigation }) => {
//   const [itemName, setItemName] = useState("");
//   const [menuItems, setMenuItems] = useState([]);

//   const handleAddItem = () => {
//     if (itemName.trim() !== "") {
//       setMenuItems([...menuItems, { name: itemName }]);
//       setItemName("");
//     }
//   };

//   const navigateToBreakfasts = () => {
//     navigation.navigate("Breakfasts", { menuItems }); // Pass menuItems as route parameter
//   };

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <TextInput
//           value={itemName}
//           onChangeText={setItemName}
//           placeholder="Enter item name"
//           style={{
//             borderBottomWidth: 1,
//             marginBottom: 20,
//             padding: 10,
//             width: 200,
//           }}
//         />
//         <Pressable
//           onPress={handleAddItem}
//           style={{ backgroundColor: "blue", padding: 10 }}
//         >
//           <Text style={{ color: "white" }}>Add Item</Text>
//         </Pressable>
//         <Pressable onPress={navigateToBreakfasts} style={{ marginTop: 20 }}>
//           <Text style={{ color: "blue" }}>Go to Breakfasts</Text>
//         </Pressable>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default MenuScreen;

// MenuScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import * as SecureStore from "expo-secure-store";
import { Dropdown } from "react-native-element-dropdown";
import Icon from "react-native-vector-icons/Ionicons";

const MenuScreen = ({ navigation }) => {
  const route = useRoute();
  const [itemName, setItemName] = useState("");
  const [ingredientName, setIngredientName] = useState("");
  const [ingredientAmt, setIngredientAmt] = useState("");
  const [activeCategory, setActiveCategory] = useState(""); // State to track active category
  const [ingredientUnit, setIngredientUnit] = useState("");
  const [ingredientsList, setIngredientsList] = useState([]);

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

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

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

  const handleDeleteIngredient = (index) => {
    const updatedIngredients = [...ingredientsList];
    updatedIngredients.splice(index, 1);
    setIngredientsList(updatedIngredients);
  };

  const handleAddItem = async () => {
    if (itemName.trim() !== "" && activeCategory !== "") {
      try {
        // Load existing recipes from AsyncStorage
        const existingRecipes = await SecureStore.getItemAsync("recipes");
        const recipes = existingRecipes ? JSON.parse(existingRecipes) : [];
        // Add the new recipe
        recipes.push(itemName);
        // Update recipes in AsyncStorage
        await SecureStore.setItemAsync("recipes", JSON.stringify(recipes));
        setItemName(""); // Clear item name input
      } catch (error) {
        console.error("Error adding recipe:", error);
      }
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#e3ede0" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
          backgroundColor: "#83b291",
        }}
      >
        <Text
          onPress={() => navigation.goBack()}
          style={{ flex: 1, color: "white" }}
        >
          Back
        </Text>
        <View style={{ flex: 1 }}>
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
            {route?.params.date}
          </Text>
        </View>
        <Text style={{ color: "white" }}>Clear</Text>
      </View>
      <View>
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
          Menu
        </Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Pressables for different categories */}
        <View style={{ flexDirection: "row", marginBottom: 20 }}>
          <Pressable
            onPress={() => setActiveCategory("Breakfasts")}
            style={{
              marginRight: 4,
              backgroundColor:
                activeCategory === "Breakfasts" ? "#83b291" : "grey",
              padding: 6,
              borderRadius: 14,
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
            }}
          >
            <Text style={{ color: "white", fontSize: 12 }}>Dessert</Text>
          </Pressable>
        </View>
        <TextInput
          value={itemName}
          onChangeText={setItemName}
          placeholder="Enter recipe name"
          style={{
            borderBottomWidth: 1,
            marginBottom: 20,
            padding: 10,
            width: 250,
          }}
        />
        <Text style={{ color: "#83b291" }}>Ingredients</Text>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <TextInput
            value={ingredientName}
            onChangeText={setIngredientName}
            placeholder="Ingredient"
            style={{
              borderBottomWidth: 1,
              marginBottom: 20,
              marginTop: 20,
              padding: 10,
              paddingBottom: 15,
              marginRight: 10,
              width: 150,
            }}
          />
          <TextInput
            value={ingredientAmt}
            onChangeText={setIngredientAmt}
            placeholder="Quantity"
            style={{
              borderBottomWidth: 1,
              marginBottom: 20,
              marginTop: 20,
              padding: 10,
              paddingBottom: 15,
              marginRight: 10,
              width: 90,
            }}
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
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setValue(item.value);
              setIsFocus(false);
              setIngredientUnit(item.value);
            }}
          ></Dropdown>
        </View>
        <View
          style={{
            width: 300,
            marginTop: 75,
            borderRadius: 10,
            alignItems: "center",
          }}
        >
          <Pressable
            onPress={handleAddIngredient}
            style={{
              backgroundColor: "#83b291",
              borderRadius: 8,
              padding: 10,
              marginTop: 0,
              height: 50,
              width: 100,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 12,
                textAlign: "center",
                fontWeight: "500",
              }}
            >
              Add Ingredient
            </Text>
          </Pressable>
        </View>
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

        <View>
          <Pressable
            onPress={handleAddItem}
            style={{
              backgroundColor: "#83b291",
              borderRadius: 8,
              padding: 10,
              marginTop: 100,
            }}
          >
            <Text style={{ color: "white", fontSize: 16 }}>Add Recipe</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  dropdown: {
    marginTop: 10,
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
});
