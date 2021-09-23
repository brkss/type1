import React from "react";
import { Text, View, StyleSheet } from "react-native";

export const Demons: React.FC = () => {
  return (
    <View style={style.container}>
      <View style={style.wrap}>
        <Text style={style.title}>Demons.</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {},
  wrap: {},
  title: {
    fontSize: 30,
  },
});
