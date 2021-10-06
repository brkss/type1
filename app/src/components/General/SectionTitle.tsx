import React from "react";
import { Text, StyleSheet } from "react-native";

interface Props {
  text: string;
}

export const SectionTitle: React.FC<Props> = ({ text }) => {
  return <Text style={style.title}> {text} </Text>;
};

const style = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
