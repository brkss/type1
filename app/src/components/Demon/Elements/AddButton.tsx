import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  add: () => void;
}

export const AddButton: React.FC<Props> = ({ add }) => {
  return (
    <TouchableOpacity style={style.addButton} onPress={() => add()}>
      <Text style={style.buttonText}>
        <Ionicons
          name="add-circle-outline"
          size={17}
          style={{ paddingRight: 12 }}
          color="black"
        />{" "}
        ADD
      </Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  addButton: {
    width: 70,
    padding: 7,
    borderRadius: 5,
    marginTop: 8,
    backgroundColor: "#dbdbdb",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
});
