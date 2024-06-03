import {
  View,
  Text,
  Button,
  StyleSheet,
  Pressable,
  ScrollView,
  ImageBackground,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Home({ navigation }) {
  const [option, setOption] = useState("");
  return (
    <ImageBackground
      source={require("../assets/breakfast.jpeg")}
      style={[styles.background, { opacity: 0.8 }]}
    >
      <ScrollView>
        <View
          style={{
            alignItems: "center",
            padding: 50,
          }}
        >
          <FontAwesomeIcon
            icon={faSeedling}
            color="#83b291"
            size={100}
            style={{
              opacity: 1,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 10,
            }}
          />
        </View>
        <View
          style={{
            alignItems: "center",
            padding: 30,
            flex: 1,
            opacity: 1,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "700",
              fontSize: 24,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.9,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            Meal Master
          </Text>
          <Text
            style={{
              color: "white",
              fontWeight: "700",
              fontSize: 16,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.9,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            Master your meals, master your day.
          </Text>
          <Pressable
            onPress={() =>
              navigation.navigate("MealMaster", { screen: "Recipes" })
            }
            style={{
              marginTop: 50,
              padding: 20,
              width: 150,
              borderRadius: 10,
              backgroundColor: "#5c8167",
              backgroundColor: "#83b291",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: "0.5",
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 14,
                paddingTop: 8,
                paddingBottom: 10,
                textAlign: "center",
                padding: 5,
              }}
            >
              Recipes
            </Text>
          </Pressable>
          <Pressable
            onPress={() =>
              navigation.navigate("MealMaster", { screen: "Groceries" })
            }
            style={{
              marginTop: 15,
              padding: 20,
              borderRadius: 10,
              width: 150,
              backgroundColor: "#5c8167",
              backgroundColor: "#83b291",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: "0.5",
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 14,
                paddingTop: 8,
                paddingBottom: 10,
                textAlign: "center",
                padding: 5,
              }}
            >
              Groceries
            </Text>
          </Pressable>
          <Pressable
            onPress={() =>
              navigation.navigate("MealMaster", { screen: "Meal Prep" })
            }
            style={{
              marginTop: 15,
              padding: 20,
              width: 150,

              borderRadius: 10,
              backgroundColor: "#5c8167",
              backgroundColor: "#83b291",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: "0.5",
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 14,
                paddingTop: 8,
                textAlign: "center",
                paddingBottom: 10,

                padding: 5,
              }}
            >
              Meal Prep
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3f6f4",
    flex: 1,
    padding: 10,
    alignContent: "center",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.5)",
  },
});
