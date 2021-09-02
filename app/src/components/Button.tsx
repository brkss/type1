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
    backgroundColor: "#353535",
    padding: 10,
    height: 40,
    width: width * 0.9,
    alignItems: "center",
    borderRadius: 4,
    marginTop: 15,
  },
  title: {
    color: "white",
  },
});
