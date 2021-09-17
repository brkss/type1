import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { SingleRecord } from "./SingleRecord";

export const RecordsHistory: React.FC = () => {
  return (
    <View>
      <Text style={style.pageTitle}>Your Last Records.</Text>
      <ScrollView horizontal>
        <SingleRecord />
      </ScrollView>
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
