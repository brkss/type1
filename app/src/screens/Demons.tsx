import React from "react";
import { Text, View, StyleSheet } from "react-native";

const demons = [
  {
    name: "Sleep",
    image: "👹",
  },
  {
    name: "Food",
    image: "👹",
  },
  {
    name: "Thyroid",
    image: "👹",
  },

  {
    name: "Insulin",
    image: "👹",
  },

  {
    name: "Sport",
    image: "👹",
  },

  {
    name: "Meddicin",
    image: "👹",
  },
];

export const Demons: React.FC = () => {
  return (
    <View style={style.container}>
      <View style={style.wrap}>
        <Text style={style.title}>Demons.</Text>
        <View style={style.row}>
          {demons.map((demon, key) => (
            <View key={key} style={style.colmn}>
              <View style={style.demonContainer}>
                <Text style={style.demonImage}>{demon.image}</Text>
                <Text style={style.demonTitle}>{demon.name}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  wrap: {
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  row: {
    //flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
  },
  colmn: {
    width: "50%",
    padding: 5,
  },
  //
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
