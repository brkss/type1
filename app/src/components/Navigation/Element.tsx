import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

interface Props {
  iconName: string;
  onClick: () => void;
}

export const ElementNavigation: React.FC<Props> = ({ iconName, onClick }) => {
  return (
    <TouchableOpacity style={style.container} onPress={onClick}>
      <Feather name={iconName as any} size={30} color="white" />
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
});
