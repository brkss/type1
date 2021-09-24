import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { IDemon } from "../../utils/types/IDemon";

interface Props {
  demon: IDemon;
}

export const SingleDemon: React.FC<Props> = ({ demon }) => {
  return (
    <View style={style.demonContainer}>
      <Text style={style.demonImage}>{demon.image}</Text>
      <Text style={style.demonTitle}>{demon.name}</Text>
    </View>
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
