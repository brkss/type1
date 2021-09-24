import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { IDemon } from "../../utils/types/IDemon";

interface Props {
  demon: IDemon;
  active?: boolean;
  clicked: (name: string) => void;
}

export const SingleDemon: React.FC<Props> = ({ demon, active, clicked }) => {
  return (
    <TouchableOpacity
      onPress={() => clicked(demon.name)}
      style={[
        style.demonContainer,
        { backgroundColor: active ? "#b5d2b9" : "#dcdcdc" },
      ]}
    >
      <Text style={style.demonImage}>{demon.image}</Text>
      <Text style={style.demonTitle}>{demon.name}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  demonContainer: {
    padding: 7,
    backgroundColor: "#dcdcdc",
    width: "100%",
    alignItems: "center",
    borderRadius: 5,
  },
  demonTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  demonImage: {
    fontSize: 60,
  },
});
