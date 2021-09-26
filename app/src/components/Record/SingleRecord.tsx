import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { IRecordType } from "../../utils/types/RecordType";

interface Props {
  record: IRecordType;
  active?: boolean;
  clicked: (name: string) => void;
}

export const SingleRecord: React.FC<Props> = ({ record, active, clicked }) => {
  return (
    <TouchableOpacity
      onPress={() => clicked(record.name)}
      style={[
        style.container,
        { backgroundColor: active ? "#b5d2b9" : "#dcdcdc" },
      ]}
    >
      <Text style={style.image}>{record.image}</Text>
      <Text style={style.title}>{record.name}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 7,
    backgroundColor: "#dcdcdc",
    width: "100%",
    alignItems: "center",
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  image: {
    fontSize: 60,
  },
});
