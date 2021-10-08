import React from "react";
import { View, Text, StyleSheet } from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";

export const TimeLined: React.FC = () => {
  return (
    <View style={style.reminderContainer}>
      <DateTimePicker
        testID="dateTimePicker"
        value={new Date()}
        mode={"time"}
        is24Hour={false}
        display="clock"
        style={{ margin: 0, height: 50 }}
      />
      <View style={style.reminderLine} />
    </View>
  );
};

const style = StyleSheet.create({
  reminderContainer: {},
  reminderTime: {
    fontSize: 30,
    fontWeight: "bold",
  },
  reminderLine: {
    borderRadius: 5,
    height: 100,
    width: 4,
    marginLeft: 4,
    backgroundColor: "#7a7979",
  },
});
