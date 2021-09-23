import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { usePingQuery } from "../generated/graphql";

export const Menu: React.FC = () => {
  const { data, loading, error } = usePingQuery({
    fetchPolicy: "network-only",
  });

  if (loading || !data || error) {
    <Text>Loading !</Text>;
  }
  return (
    <View style={style.container}>
      <Text style={style.title}>Hello Menu</Text>
      <Text style={style.title}>ping : {data?.ping}</Text>
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
