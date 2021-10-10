import React from "react";
import { View, StyleSheet } from "react-native";
import { TimeLined, AddButton } from "./Elements";

interface ITime {
  title: string;
  time: Date;
}

export const ThyroidDemon: React.FC = () => {
  const [times, SetTimes] = React.useState<ITime[]>([]);

  const addTime = () => {
    SetTimes([
      ...times,
      {
        title: "Meds Reminder !",
        time: new Date(),
      },
    ]);
  };

  const deleteTime = (index: number) => {
    console.log("key from delete => ", index);
    const tmp = times;
    tmp.splice(index, 1);
    SetTimes([...tmp]);
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
