import React, { useState } from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHome,
  faUtensils,
  faShoppingBasket,
  faBookOpen,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

import Home from "./screens/home";
import Recipes from "./screens/recipes";
import Settings from "./screens/settings";
import Groceries from "./groceries/groceries";
import GroceryItem from "./groceries/components/groceryItem";
import AddGrocery from "./groceries/components/addGrocery";
import RecipeDetails from "./screens/recipeDetails";
import Mealprep from "./screens/mealprep";
import MenuScreen from "./screens/menuScreen";
import AddRecipe from "./screens/addRecipe";
import Breakfasts from "./screens/breakfasts";
import Lunches from "./screens/lunches";
import Dinners from "./screens/dinners";
import Snacks from "./screens/snacks";
import Desserts from "./screens/desserts";
import Other from "./screens/other";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function DrawerNavigator() {
  // do next
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Recipes" component={Recipes} />
      <Stack.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}

const getTabBarIcon = (route, focused, color) => {
  let iconName;

  switch (route.name) {
    case "Home":
      iconName = faHome;
      break;
    case "Recipes":
      iconName = faUtensils;
      break;
    case "Groceries":
      iconName = faShoppingBasket;
      break;
    case "Meal Prep":
      iconName = faBookOpen;
      break;
    case "Settings":
      iconName = faCog;
      break;
    default:
      iconName = faHome;
      break;
  }

  return <FontAwesomeIcon icon={iconName} color={color} />;
};

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) =>
          getTabBarIcon(route, focused, color),
        headerStyle: {
          backgroundColor: "#83b291",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        tabBarStyle: {
          backgroundColor: "#fff",
        },
        tabBarInactiveTintColor: "#83b291",
        tabBarActiveTintColor: "#5c8167",
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Recipes" component={Recipes} />
      <Tab.Screen name="Groceries" component={Groceries} />
      <Tab.Screen name="Meal Prep" component={Mealprep} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

function HomeStack() {
  const [menuItems, setMenuItems] = useState([]);

  const addMenuItem = (menuItem) => {
    setMenuItems([...menuItems, menuItem]);
  };
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MealMaster" component={TabNavigator} />
      <Stack.Screen name="RecipeDetails" component={RecipeDetails} />
      <Stack.Screen name="AddRecipe" component={AddRecipe} />
      <Stack.Screen name="MenuScreen" options={{ title: "MenuScreen" }}>
        {(props) => <MenuScreen {...props} addMenuItem={addMenuItem} />}
      </Stack.Screen>
      <Stack.Screen name="Breakfasts" options={{ title: "Breakfasts" }}>
        {(props) => <Breakfasts {...props} menuItems={menuItems} />}
      </Stack.Screen>
      <Stack.Screen name="Lunches" component={Lunches} />
      <Stack.Screen name="Dinners" component={Dinners} />
      <Stack.Screen name="Snacks" component={Snacks} />
      <Stack.Screen name="Desserts" component={Desserts} />
      <Stack.Screen name="Other" component={Other} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
}

export default App;
