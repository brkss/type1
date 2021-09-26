import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SingleRecord } from "../../components";

const recordTypes = [
  {
    name: "Food",
    image: "🥗",
  },
  {
    name: "Insulin Shot",
    image: "💉",
  },
  {
    name: "Medication",
    image: "💊",
  },
  {
    name: "Activity",
    image: "⛹️‍♂️",
  },
  {
    name: "Biological",
    image: "😴",
  },
  {
    name: "Environmental",
    image: "🌞",
  },
  {
    name: "Behavior ",
    image: "😥",
  },
];

export const Record: React.FC = () => {
  return (
    <View style={style.container}>
      <View style={style.wrap}>
        <Text style={style.title}>Record Type.</Text>
        <Text style={style.description}>
          Choose Your Record Type, Record Types help you understand patterns.
        </Text>
        <View style={style.row}>
          {recordTypes.map((record, key) => (
            <View key={key} style={style.column}>
              <SingleRecord record={record} clicked={() => {}} />
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  wrap: {
    padding: 20,
  },
  title: {
    fontSize: 27,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {},
  row: {
    marginTop: 20,
    flexWrap: "wrap",
    flexDirection: "row",
  },
  column: {
    width: "50%",
    padding: 7,
  },
});
