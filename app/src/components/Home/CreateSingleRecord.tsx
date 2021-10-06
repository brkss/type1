import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { SingleRecordElement, SectionTitle } from "../General";

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
