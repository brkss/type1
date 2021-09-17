import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { SingleRecord } from "./SingleRecord";

export const RecordsHistory: React.FC = () => {
  return (
    <View>
      <Text style={style.pageTitle}>Your Last Records.</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 20, paddingRight: 200, flex: 1 }}
      >
        <SingleRecord />
        <SingleRecord />
        <SingleRecord />
        <SingleRecord />
        {/*
        <View style={{ width: "40%" }}>
          <SingleRecord />
        </View>
        <View style={{ width: "40%" }}>
          <SingleRecord />
        </View>
        <View style={{ width: "40%" }}>
          <SingleRecord />
        </View>
          */}
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  pageTitle: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
