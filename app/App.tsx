import React from "react";
import { MainNavigation } from "./src/navigation/mainnavigation";
import { StatusBar } from "react-native";

export default function App() {
  StatusBar.setBarStyle("dark-content", true);
  return <MainNavigation />;
}
