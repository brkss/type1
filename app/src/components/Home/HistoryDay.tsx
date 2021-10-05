import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  day: string;
  month: string;
}

export const HistoryDay: React.FC<Props> = ({ day, month }) => {
  return (
    <View style={style.day}>
      <Text style={style.dayNumber}>{day}</Text>
      <Text style={style.monthName}>{month}.</Text>
    </View>
  );
};

const style = StyleSheet.create({
  day: {
    marginRight: 8,
    backgroundColor: "#D5E4FF",
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
