import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function AddGrocery({ submitHandler }) {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="new grocery..."
          onChangeText={changeHandler}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => submitHandler(text)}
      >
        <Entypo name="add-to-list" size={16} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputContainer: {
    flex: 1,
  },
  input: {
    marginBottom: 10,
    marginTop: 18,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  button: {
    backgroundColor: "#65A98B",
    padding: 15,
    marginTop: 16,
    marginLeft: 10, // Add margin to separate input and button
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: "0.25",
    shadowRadius: 3.84,
    elevation: 3,
  },
});
