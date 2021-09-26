import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity, Text } from "react-native";

interface Props {
  title: string;
  onClick: () => void;
  bg?: string;
  color?: string;
}
const { width } = Dimensions.get("window");

export const Button: React.FC<Props> = ({ title, onClick, bg, color }) => {
  return (
    <TouchableOpacity
      style={[style.container, { backgroundColor: bg ? bg : "#434343" }]}
      onPress={() => onClick()}
    >
      <Text style={[style.title, { color: color ? color : "white" }]}>
        {" "}
        {title}{" "}
      </Text>
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
    paddingTop: 12,
  },
  title: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
});
