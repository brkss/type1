import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { IDemon } from "../../utils/types/IDemon";
import { SingleDemon } from "../../components/Demon";

const demons: IDemon[] = [
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
    name: "Medicine",
    image: "👹",
  },
  {
    name: "Costum",
    image: "👹",
  },
];

export const Demons: React.FC = () => {
  return (
    <View style={style.container}>
      <View style={style.wrap}>
        <Text style={style.title}>Demons.</Text>
        <Text style={style.subtitle}>Choose and configure your demons.</Text>
        <Text style={style.description}>
          Demons are here to make your life more easier, by reminding you to
          take your medicine, sleep, mesure your blood glucose and more.
        </Text>
        <View style={style.row}>
          {demons.map((demon, key) => (
            <View key={key} style={style.colmn}>
              <SingleDemon
                active={(key <= 3 && key > 0) || key == 5}
                demon={demon}
              />
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
    marginTop: 15,
  },
  colmn: {
    width: "50%",
    padding: 5,
  },
  subtitle: {
    fontSize: 17,
    fontWeight: "bold",
    marginVertical: 5,
  },
  description: {
    fontSize: 13,
  },
  //
});
