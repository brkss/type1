import React from "react";
import { View, StyleSheet } from "react-native";
import { TimeLined, AddButton } from "./Elements";

export const ThyroidDemon: React.FC = () => {
  const [times, SetTimes] = React.useState<Date[]>([new Date()]);

  const addTime = () => {
    SetTimes([...times, new Date()]);
  };

  const deleteTime = (index: number) => {
    times.splice(index, 1);
    SetTimes(times);
  };

  return (
    <View style={style.container}>
      {times.map((time, key) => (
        <TimeLined
          key={key}
          del={() => {
            console.log("key : ", key);
            deleteTime(key);
          }}
        />
      ))}
      <AddButton add={() => addTime()} />
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
