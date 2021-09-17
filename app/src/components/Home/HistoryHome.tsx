import React from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import { HistoryDay } from "./HistoryDay";

const days = [
  {
    day: "09",
    month: "Sep",
  },
  {
    day: "08",
    month: "Sep",
  },
  {
    day: "07",
    month: "Sep",
  },
  {
    day: "06",
    month: "Sep",
  },
  {
    day: "05",
    month: "Sep",
  },
  {
    day: "04",
    month: "Sep",
  },

  {
    day: "03",
    month: "Sep",
  },
];

export const HistoryHome: React.FC = () => {
  return (
    <View style={style.container}>
      <Text style={style.title}>History.</Text>
      <ScrollView
        horizontal={true}
        style={{ marginTop: 15 }}
        showsHorizontalScrollIndicator={false}
      >
        {days.map((day, key) => (
          <HistoryDay key={key} {...day} />
        ))}
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
});
