import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigationStack } from "./appnavigation";
import { AuthStackNavigation } from "./authnavigation";

export const MainNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthStackNavigation />
      {/* <AppNavigationStack /> */}
    </NavigationContainer>
  );
};
