import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { ActiveDemonElement, SectionTitle } from "../General";

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
      <SectionTitle text={"Active Demons"} />
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
  container: {
    marginBottom: 15,
    marginTop: 5,
  },
});
