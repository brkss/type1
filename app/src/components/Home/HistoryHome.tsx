import React from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";

export const HistoryHome: React.FC = () => {
  return (
    <View style={style.container}>
      <Text style={style.title}>History.</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={style.day}>
          <Text style={style.dayNumber}>09</Text>
          <Text style={style.monthName}>Sep.</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  day: {
    backgroundColor: "#D8D8D8",
    height: 77,
    width: 77,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  dayNumber: {
    fontSize: 25,
    fontWeight: "bold",
  },
  monthName: {
    fontSize: 12,
    marginTop: -2,
  },
});
