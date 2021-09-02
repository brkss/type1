import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Input } from "../components";

export const Home: React.FC<any> = ({ navigation }) => {
  const [form, SetForm] = React.useState({});

  const handleForm = (key: string, value: string) => {
    SetForm({
      ...form,
      [key]: value,
    });
  };

  const saveData = () => {
    console.log("form : ", form);
    navigation.navigate("login");
  };

  return (
    <View style={style.container}>
      <Input
        label="BG Before Eating"
        onChangeText={(text) => handleForm("bg", text)}
      />
      <Input
        label="How much carbs your taking ?"
        onChangeText={(text) => handleForm("carbs", text)}
      />
      <Button title="Save ✨" onClick={() => saveData()} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
  },
});
