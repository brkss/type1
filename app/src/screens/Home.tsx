import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { RecordsHistory, DemonsHome, HistoryHome } from "../components";

export const Home: React.FC = () => {
  return (
    <ScrollView>
      <View style={style.container}>
        <View style={style.wrap}>
          <RecordsHistory />
          <HistoryHome />
          <DemonsHome />
        </View>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    padding: 10,
  },
  wrap: {},
});
