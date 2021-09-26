import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

interface Props {
  onClick: () => void;
}

export const CreateRecordHome: React.FC<Props> = ({ onClick }) => {
  return (
    <TouchableOpacity style={style.container} onPress={() => onClick()}>
      <Text style={style.label}>
        <Feather name="plus" size={17} color="black" />
        Add Record
      </Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    height: 77,
    backgroundColor: "#EFEBE8",
    marginVertical: 10,
    marginBottom: 0,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
    //borderWidth: 1,
    //borderColor: "#CAC8C8",
    //borderStyle: "dotted",
  },
  label: {
    fontSize: 17,
    fontWeight: "bold",
  },
});
