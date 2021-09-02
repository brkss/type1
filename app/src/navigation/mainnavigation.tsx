import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigationStack } from "./appnavigation";

export const MainNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <AppNavigationStack />
    </NavigationContainer>
  );
};
