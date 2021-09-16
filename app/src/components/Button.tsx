import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity, Text } from "react-native";

interface Props {
  title: string;
  onClick: () => void;
}
const { width } = Dimensions.get("window");

export const Button: React.FC<Props> = ({ title, onClick }) => {
  return (
    <TouchableOpacity style={style.container} onPress={() => onClick()}>
      <Text style={style.title}> {title} </Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: "#434343",
    padding: 10,
    height: 40,
    width: "100%",
    alignItems: "center",
    borderRadius: 7,
    marginTop: 15,
  },
  title: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
});
