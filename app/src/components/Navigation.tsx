import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { ElementNavigation } from "./Navigation/Element";

export const Navigation: React.FC = () => {
  return (
    <View style={style.container}>
      <ElementNavigation onClick={() => {}} iconName="home" />
      <ElementNavigation onClick={() => {}} iconName="calendar" />
      <ElementNavigation onClick={() => {}} iconName="user" />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    //flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    //justifyContent: "center",
  },
  title: {
    color: "white",
  },
});
