import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

interface Props {
  title: string;
  icon: string;
  clicked: () => void;
}

export const ActiveDemonElement: React.FC<Props> = ({
  title,
  icon,
  clicked,
}) => {
  return (
    <TouchableOpacity onPress={() => clicked()} style={style.demon}>
      <Text style={style.icon}>{icon}</Text>
      <Text style={style.title}>{title}.</Text>
    </TouchableOpacity>
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
