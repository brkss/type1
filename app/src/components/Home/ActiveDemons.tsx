import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { ActiveDemonElement, SectionTitle } from "../General";

const demons = [
  {
    title: "Food",
    icon: "👹",
    nid: "food",
  },
  {
    title: "Sleep",
    icon: "👹",
    nid: "sleep",
  },
  {
    title: "Insulin",
    icon: "👹",
    nid: "insulin",
  },
  {
    title: "Thyroid",
    icon: "👹",
    nid: "thyroid",
  },
];

interface Props {
  navigation: any;
}

export const ActiveDemons: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={style.container}>
      <SectionTitle text={"Active Demons"} />
      <ScrollView
        horizontal={true}
        style={{ marginTop: 15 }}
        showsHorizontalScrollIndicator={false}
      >
        {demons.map((d, key) => (
          <ActiveDemonElement
            key={key}
            title={d.title}
            clicked={() => navigation.navigate("demon", { name: d.nid })}
            icon={d.icon}
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
