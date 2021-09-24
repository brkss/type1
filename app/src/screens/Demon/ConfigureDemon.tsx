import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const ConfigureDemon: React.FC<any> = ({ route }) => {
  return (
    <View style={style.container}>
      <Text>{route.params.name}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {},
});
