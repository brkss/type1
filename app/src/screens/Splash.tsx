import React from "react";
import { View, StyleSheet, Text, Dimensions, Image } from "react-native";
import { Button } from "../components";

const { width } = Dimensions.get("window");

export const Splash: React.FC = () => {
  return (
    <View style={style.container}>
      <View style={style.wrap}>
        <Image style={style.image} source={require("../media/intro.webp")} />
        <Text style={style.mainTitle}>Day-to-Day Guide for Managing</Text>
        <Text style={style.subTitle}>
          Type 1 Diabetes and Autoimmune
          {"\n"}Related Diseases 🩺
        </Text>
        <View style={style.buttonContainer}>
          <Button title={"Access to my account !"} onClick={() => {}} />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //width: width,
  },
  wrap: {
    width: width * 0.8,
  },
  buttonContainer: {
    marginTop: 20,
  },
  image: {
    width: width * 0.8,
    height: Math.round((width * 9) / 16),
    marginBottom: 55,
    borderRadius: 10,
  },
  mainTitle: {
    fontSize: 21,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subTitle: {
    textAlign: "left",
    fontSize: 20,
    fontWeight: "normal",
    color: "#5F5F60",
  },
});
