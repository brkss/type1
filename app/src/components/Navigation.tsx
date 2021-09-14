import React from "react";
import { View, StyleSheet } from "react-native";
import { ElementNavigation } from "./Navigation/Element";

interface Props {
  navigation: any;
}

export const Navigation: React.FC<Props> = ({ navigation }) => {
  const navigate = (path: string) => {
    navigation.navigate(path);
  };

  return (
    <View style={style.container}>
      <ElementNavigation onClick={() => navigate("home")} iconName="home" />
      <ElementNavigation onClick={() => {}} iconName="calendar" />
      <ElementNavigation onClick={() => navigate("menu")} iconName="menu" />
      <ElementNavigation onClick={() => navigate("login")} iconName="user" />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    //flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    //justifyContent: "center",
  },
  title: {
    color: "white",
  },
});
