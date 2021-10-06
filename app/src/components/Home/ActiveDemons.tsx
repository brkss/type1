import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";

import { ActiveDemonElement } from "../General";

const demons = [
  {
    title: "Food",
    icon: "👹",
  },
  {
    title: "Sleep",
    icon: "👹",
  },
  {
    title: "Insulin",
    icon: "👹",
  },
  {
    title: "Thyroid",
    icon: "👹",
  },
];

export const ActiveDemons: React.FC = () => {
  return (
    <View style={style.container}>
      <Text style={style.title}>Active Demons</Text>
      <ScrollView
        horizontal={true}
        style={{ marginTop: 15 }}
        showsHorizontalScrollIndicator={false}
      >
        {demons.map((d, key) => (
          <ActiveDemonElement key={key} title={d.title} icon={d.icon} />
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
