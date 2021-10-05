import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { SingleRecordElement } from "../General";

const records = [
  {
    title: "Food",
    icon: "🥗",
  },
  {
    title: "Shot",
    icon: "💉",
  },
  {
    title: "Activity",
    icon: "⛹️‍♂️",
  },
  {
    title: "Behavior",
    icon: "😥",
  },
  {
    title: "env",
    icon: "🌍",
  },
];

export const CreateSingleRecord: React.FC = () => {
  return (
    <View style={style.container}>
      <Text style={style.title}>Create Record</Text>
      <ScrollView
        horizontal={true}
        style={{ marginTop: 15 }}
        showsHorizontalScrollIndicator={false}
      >
        {records.map((record, key) => (
          <SingleRecordElement
            key={key}
            title={record.title}
            icon={record.icon}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  container: {
    marginBottom: 20,
  },
});
