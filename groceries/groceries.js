import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import GroceryItem from "./components/groceryItem"; // change
import AddGrocery from "./components/addGrocery"; // change
import { MaterialIcons } from "@expo/vector-icons";

function Groceries() {
  const [groceries, setGroceries] = useState([
    { text: "Eggs", key: "1" },
    { text: "Milk", key: "2" },
    { text: "Tomatoes", key: "3" },
  ]);

  const pressHandler = (key) => {
    setGroceries((prevGroceries) => {
      return prevGroceries.filter((grocery) => grocery.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 2) {
      setGroceries((prevGroceries) => {
        return [
          { text: text, key: Math.random().toString() },
          ...prevGroceries,
        ];
      });
    } else {
      Alert.alert("OOPS", "Groceries must be more than 2 characters!", [
        { text: "Understood", onPress: () => console.log("alert closed") },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log("dismissed keyboard");
      }}
    >
      <View style={styles.container}>
        <View style={{ padding: 40, flex: 1 }}>
          <AddGrocery submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={groceries}
              renderItem={({ item }) => (
                <GroceryItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3ede0",
  },
  content: {
    padding: 30,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
});

export default Groceries;
