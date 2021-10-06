import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  title: string;
  icon: string;
}

export const ActiveDemonElement: React.FC<Props> = ({ title, icon }) => {
  return (
    <View style={style.demon}>
      <Text style={style.icon}>{icon}</Text>
      <Text style={style.title}>{title}.</Text>
    </View>
  );
};

const style = StyleSheet.create({
  demon: {
    marginRight: 8,
    backgroundColor: "#CCE9C6",
    height: 77,
    width: 77,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    fontSize: 35,
    fontWeight: "bold",
  },
  title: {
    fontSize: 10,
    marginTop: -2,
    fontWeight: "bold",
  },
});
