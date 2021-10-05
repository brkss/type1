import React from "react";
import { View, Text, ScrollView } from "react-native";
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
];

export const CreateSingleRecord: React.FC = () => {
  return (
    <View>
      <Text>Create Record</Text>
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
