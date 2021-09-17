import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export const DemonsHome: React.FC = () => {
  return (
    <View style={style.container}>
      <Text style={style.title}>Demons are working</Text>
      <Text style={style.subTitle}>
        View demons <AntDesign name="arrowright" size={18} color="black" />
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    minHeight: 100,
    backgroundColor: "#E2D7EF",
    marginTop: 20,
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
});
