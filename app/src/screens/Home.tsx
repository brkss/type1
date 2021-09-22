import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import {
  RecordsHistory,
  DemonsHome,
  HistoryHome,
  CreateRecordHome,
} from "../components";
import { getToken } from "../utils/auth/token";

export const Home: React.FC = () => {
  return (
    <ScrollView>
      <View style={style.container}>
        <View style={style.wrap}>
          <Text>token : {getToken()}</Text>
          <HistoryHome />
          <RecordsHistory />
          <CreateRecordHome />
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
    marginBottom: 20,
  },
  wrap: {},
});
