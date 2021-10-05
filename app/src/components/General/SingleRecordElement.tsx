import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  title: string;
  icon: string;
}

export const SingleRecordElement: React.FC<Props> = ({ title, icon }) => {
  return (
    <View style={style.record}>
      <Text style={style.icon}>{icon}</Text>
      <Text style={style.title}>{title}.</Text>
    </View>
  );
};

const style = StyleSheet.create({
  record: {
    marginRight: 8,
    backgroundColor: "#BBEBDD",
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
