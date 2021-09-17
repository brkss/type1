import React from "react";
import { View, StyleSheet, Text } from "react-native";

export const RecordsHistory: React.FC = () => {
  return (
    <View>
      <Text style={style.pageTitle}>Your Last Records.</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {},
  pageTitle: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
