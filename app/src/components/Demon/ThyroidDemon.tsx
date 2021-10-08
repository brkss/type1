import React from "react";
import { View, StyleSheet } from "react-native";
import { TimeLined, AddButton } from "./Elements";

export const ThyroidDemon: React.FC = () => {
  const [times, SetTime] = React.useState<Date[]>([new Date()]);
  return (
    <View style={style.container}>
      {times.map((time, key) => (
        <TimeLined key={key} />
      ))}
      <AddButton />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginTop: 20,
  },
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
