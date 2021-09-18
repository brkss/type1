import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const activeDemons = [
  {
    name: "👹 Insulin",
  },
  {
    name: "👹 Thyroid",
  },
  {
    name: "👹 Sleep",
  },
];

export const DemonsHome: React.FC = () => {
  return (
    <View style={style.container}>
      <Text style={style.title}>Demons are active.</Text>
      <Text style={style.subTitle}>
        View demons <AntDesign name="arrowright" size={18} color="black" />
      </Text>
      <View style={style.demonsContainer}>
        {activeDemons.map((demon) => (
          <View style={style.demon}>
            <Text style={style.demonName}>{demon.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    minHeight: 100,
    backgroundColor: "#E2D7EF",
    marginTop: 30,
    padding: 10,
    borderRadius: 7,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 18,
    marginTop: 10,
  },
  demonsContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    marginTop: 10,
  },
  demon: {
    backgroundColor: "#CCBAE2",
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 5,
    marginRight: 3,
  },
  demonName: {
    fontSize: 14,
  },
});
