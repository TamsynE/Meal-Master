import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function GroceryItem({ item, pressHandler }) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => pressHandler(item.key)}
    >
      <View style={styles.item}>
        <MaterialIcons name="delete" size={18} color="grey" />
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    padding: 16,

    marginTop: 16,
    marginHorizontal: 5,
    borderRadius: 5,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: "0.2",
    shadowRadius: 3.84,
    elevation: 3,
  },
  itemText: {
    marginLeft: 10,
    fontWeight: "300",
  },
  button: {},
});
