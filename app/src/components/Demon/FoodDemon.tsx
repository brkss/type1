import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Button } from "../Button";

export const FoodDemon: React.FC = () => {
  const [date, setDate] = React.useState(new Date());
  const [mode, setMode] = React.useState<"date" | "time" | undefined>("time");
  const [currentMeal, SetCurrentMeal] =
    React.useState<"breakfast" | "lunch" | "snack" | "dinner">("dinner");
  const [show, SetShow] = React.useState<boolean>(false);
  const [mealsTime, SetMealsTime] = React.useState({
    breakfast: new Date(),
    lunch: new Date(),
    snack: new Date(),
    dinner: new Date(),
  });

  const handleShowingTimePicker = (meal: string) => {
    SetShow(true);

    SetCurrentMeal(meal as any);
  };

  const handleMealTimeChange = (time: Date) => {
    if (!currentMeal) return;
    SetMealsTime({
      ...mealsTime,
      [currentMeal]: time,
    });
  };

  const formateTime = (time: Date): string => {
    return `${
      time.getHours() > 10
        ? time.getHours()
        : time.getHours() > 0
        ? "0" + time.getHours()
        : "00"
    }:${
      time.getMinutes() > 10
        ? time.getMinutes()
        : time.getMinutes() > 0
        ? "0" + time.getMinutes()
        : "00"
    }`;
  };

  const saveTime = () => {
    SetShow(false);
  };

  return (
    <View style={style.container}>
      <View style={style.row}>
        <View style={style.column}>
          <Text style={style.mealTitle}>Breakfast</Text>
          <TouchableOpacity
            onPress={() => handleShowingTimePicker("breakfast")}
          >
            <Text style={style.mealTime}>
              {" "}
              {formateTime(mealsTime.breakfast)}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={style.column}>
          <Text style={style.mealTitle}>Lunch</Text>
          <TouchableOpacity onPress={() => handleShowingTimePicker("lunch")}>
            <Text style={style.mealTime}> {formateTime(mealsTime.lunch)}</Text>
          </TouchableOpacity>
        </View>

        <View style={style.column}>
          <Text style={style.mealTitle}>Snack</Text>
          <TouchableOpacity onPress={() => handleShowingTimePicker("snack")}>
            <Text style={style.mealTime}>{formateTime(mealsTime.snack)}</Text>
          </TouchableOpacity>
        </View>

        <View style={style.column}>
          <Text style={style.mealTitle}>Dinner</Text>
          <TouchableOpacity onPress={() => handleShowingTimePicker("dinner")}>
            <Text style={style.mealTime}>{formateTime(mealsTime.dinner)}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[style.row, style.actionContainer]}>
        <View style={[style.column, style.actionButtomContainer]}>
          <Button title={"Save"} onClick={() => {}} />
        </View>
        <View style={style.column}>
          <Button
            bg={"#CDF1D4"}
            color={"black"}
            title={"Active"}
            onClick={() => {}}
          />
        </View>
      </View>
      <View>
        {show && currentMeal ? (
          <>
            <DateTimePicker
              testID="dateTimePicker"
              value={mealsTime[currentMeal]}
              mode={mode}
              is24Hour={false}
              display="spinner"
              onChange={(_, time: any) => handleMealTimeChange(time) as any}
            />
            <Button title={"Save ✨"} onClick={() => saveTime()} />
          </>
        ) : null}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  row: {
    flexWrap: "wrap",
    flexDirection: "row",
  },
  column: {
    width: "50%",
    marginTop: 20,
  },
  mealTitle: {
    fontSize: 25,
    fontWeight: "bold",
  },
  mealTime: {
    fontSize: 27,
    fontWeight: "bold",
    opacity: 0.7,
  },
  actionContainer: {},
  actionButtomContainer: {
    paddingRight: 7,
  },
});
