import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { FoodDemon } from "../../components";
import { ThyroidDemon } from "../../components/Demon";

export const ConfigureDemon: React.FC<any> = ({ route }) => {
  const [name, SetName] = React.useState<string>(route.params.name);

  return (
    <ScrollView style={style.container}>
      <View style={style.wrap}>
        <View style={style.demonInfo}>
          <Text style={style.demonImage}>👹</Text>
          <Text style={style.demonName}>{name.toUpperCase()} Demon.</Text>
          <Text style={style.demonDescription}>
            This demon job is keep tracking your meals schedule.
          </Text>
        </View>
        <View>
          {
            {
              food: <FoodDemon />,
              thyroid: <ThyroidDemon />,
            }[name]
          }
        </View>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    marginTop: 50,
    marginBottom: 80,
  },
  wrap: {
    padding: 10,
    paddingHorizontal: 20,
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
    paddingTop: 20,
  },
  demonDescription: {
    marginTop: 5,
  },
});
