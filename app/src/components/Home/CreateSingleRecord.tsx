import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { SingleRecordElement, SectionTitle } from "../General";

const records = [
  {
    title: "Food",
    icon: "🥗",
    page: "record/food",
  },
  {
    title: "Shot",
    icon: "💉",
    page: "record/shot",
  },
  {
    title: "Activity",
    icon: "⛹️‍♂️",
    page: "record/activity",
  },
  {
    title: "Behavior",
    icon: "😥",
    page: "record/behavior",
  },
  {
    title: "env",
    icon: "🌍",
    page: "record/env",
  },
];

export const CreateSingleRecord: React.FC = () => {
  return (
    <View style={style.container}>
      <SectionTitle text={"Create Record"} />
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
  container: {
    marginBottom: 15,
    marginTop: 5,
  },
});
