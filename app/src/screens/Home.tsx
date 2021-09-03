import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Input, Navigation } from "../components";

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
      <View style={style.navigationContainer}>
        <Navigation />
      </View>
      <View style={style.contentContainer}>
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
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  navigationContainer: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    flex: 0.8,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
  },
});
