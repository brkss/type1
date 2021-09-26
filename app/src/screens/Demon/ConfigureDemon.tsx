import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FoodDemon } from "../../components";

export const ConfigureDemon: React.FC<any> = ({ route }) => {
  return (
    <View style={style.container}>
      <View style={style.wrap}>
        <View style={style.demonInfo}>
          <Text style={style.demonImage}>👹</Text>
          <Text style={style.demonName}>{route.params.name} Demon.</Text>
          <Text style={style.demonDescription}>
            This demon job is keep tracking your meals schedule.
          </Text>
        </View>
        <View>
          <FoodDemon />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  wrap: {
    padding: 10,
  },
  demonInfo: {
    //alignItems: "center",
  },
  demonImage: {
    fontSize: 100,
    textAlign: "center",
  },
  demonName: {
    fontSize: 35,
    fontWeight: "bold",
  },
  demonDescription: {
    marginTop: 5,
  },
});
