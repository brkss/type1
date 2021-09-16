import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Menu: React.FC = () => {
  return (
    <View style={style.container}>
      <Text style={style.title}>Hello Menu</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
    alignContent: "center",
  },
  title: {
    color: "#fff",
  },
});
