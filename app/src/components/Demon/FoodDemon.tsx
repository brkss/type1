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
              {`${
                mealsTime.breakfast.getHours() || "00"
              }:${mealsTime.breakfast.getMinutes()}`}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={style.column}>
          <Text style={style.mealTitle}>Lunch</Text>
          <TouchableOpacity onPress={() => handleShowingTimePicker("lunch")}>
            <Text style={style.mealTime}>
              {" "}
              {`${
                mealsTime.lunch.getHours() || "00"
              }:${mealsTime.lunch.getMinutes()}`}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={style.column}>
          <Text style={style.mealTitle}>Snack</Text>
          <TouchableOpacity onPress={() => handleShowingTimePicker("snack")}>
            <Text style={style.mealTime}>{`${
              mealsTime.snack.getHours() || "00"
            }:${mealsTime.snack.getMinutes()}`}</Text>
          </TouchableOpacity>
        </View>

        <View style={style.column}>
          <Text style={style.mealTitle}>Dinner</Text>
          <TouchableOpacity onPress={() => handleShowingTimePicker("dinner")}>
            <Text style={style.mealTime}>{`${
              mealsTime.dinner.getHours() || "00"
            }:${mealsTime.dinner.getMinutes()}`}</Text>
          </TouchableOpacity>
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
});
