import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import { Calendar } from "react-native-calendars";
import {
  ScrollView,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";

function Mealprep() {
  const currentDate = moment();
  const [startOfWeek, setStartOfWeek] = useState(
    currentDate.clone().startOf("week")
  );
  const [selectedDate, setSelectedDate] = useState("");
  const navigation = useNavigation();

  const renderWeekDates = (startOfWeek) => {
    let weekDates = [];
    for (let i = 0; i < 7; i++) {
      const date = startOfWeek.clone().add(i, "days");
      const formattedDate = date.format("ddd DD");
      const isCurrentDate = date.isSame(currentDate, "day");

      weekDates.push(
        <View
          key={i}
          style={{ flexDirection: "row", gap: 12, marginVertical: 10 }}
        >
          <View
            style={[
              {
                height: 40,
                width: 40,
                borderRadius: 20, // makes them circles
                backgroundColor: "white",
                marginVertical: 10,
                justifyContent: "center",
                alignItems: "center",
              },
              isCurrentDate && { backgroundColor: "#83b291" },
            ]}
          >
            <Text
              style={{
                fontSize: 11,
                fontWeight: "500",
                color: isCurrentDate ? "white" : "black",
              }}
            >
              {date.format("DD")}
            </Text>
            <Text
              style={{
                fontSize: 11,
                fontWeight: "500",
                color: isCurrentDate ? "white" : "black",
              }}
            >
              {date.format("ddd")}
            </Text>
          </View>
          <Pressable
            onPress={() =>
              navigation.navigate("MenuScreen", {
                date: date.format("ddd") + " " + date.format("DD"),
              })
            }
            style={[
              {
                backgroundColor: "white",
                borderRadius: 8,
                padding: 10,
                width: "85%",
                height: 80,
              },
            ]}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 12,
                fontWeight: 600,
                color: "gray",
              }}
            >
              There is no menu
            </Text>
            {/* <Pressable style={{ position: 'absolute', bottom: 5, right: 50 }}>
                            <Text style={{ fontSize: 10, fontWeight: '500', color: 'gray' }}>Copy</Text>
                        </Pressable>
                        <Pressable style={{ position: 'absolute', bottom: 5, right: 5 }}>
                            <Text style={{ fontSize: 10, fontWeight: '500', color: 'gray' }}>Delete</Text>
                        </Pressable> */}
          </Pressable>
        </View>
      );
    }
    return weekDates;
  };

  const renderWeeks = (numWeeks) => {
    let weeks = [];
    for (let i = 0; i < numWeeks; i++) {
      weeks.push(
        <View key={i}>
          <Text>
            {startOfWeek
              .clone()
              .add(i * 7, "days")
              .format("DD MMM")}
          </Text>
          {renderWeekDates(startOfWeek.clone().add(i * 7, "days"))}
        </View>
      );
    }
    return weeks;
  };

  const goToPreviousWeek = () => {
    setStartOfWeek(startOfWeek.clone().subtract(7, "days"));
  };

  const goToNextWeek = () => {
    setStartOfWeek(startOfWeek.clone().add(7, "days"));
  };

  return (
    <GestureHandlerRootView>
      <ScrollView style={{ backgroundColor: "#e3ede0" }}>
        <View
          style={{
            flex: 1,
            padding: 12,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 10,
            }}
          >
            <Pressable onPress={goToPreviousWeek} style={{ padding: 10 }}>
              <Text style={{ color: "#5c8167" }}>
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  size={24}
                  style={{ color: "#5c8167" }}
                />
              </Text>
            </Pressable>
            <Text
              style={{
                color: "#5c8167",
                fontWeight: "bold",
                fontSize: 16,
                paddingTop: 8,
              }}
            >
              {startOfWeek.format("DD MMM")} -{" "}
              {startOfWeek.clone().add(6, "days").format("DD MMM")}
            </Text>
            <Pressable onPress={goToNextWeek} style={{ padding: 10 }}>
              <Text style={{ color: "#5c8167" }}>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  size={24}
                  style={{ color: "#5c8167" }}
                />
              </Text>
            </Pressable>
          </View>
          {renderWeeks(3)}
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
}

export default Mealprep;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
    alignContent: "center",
  },
});

// chatgpt for the previous week + next week navigation
