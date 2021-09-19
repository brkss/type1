import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigationStack } from "./appnavigation";
import { AuthStackNavigation } from "./authnavigation";
import { getToken } from "../utils/auth/token";
import * as secureStorage from "expo-secure-store";

export const MainNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      {getToken() ? <AppNavigationStack /> : <AuthStackNavigation />}
    </NavigationContainer>
  );
};
