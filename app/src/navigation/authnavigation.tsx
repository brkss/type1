import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login, Splash } from "../screens";

export const AuthStackNavigation: React.FC = () => {
  const { Screen, Navigator } = createStackNavigator();
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={"splash"} component={Splash} />
      <Screen name={"login"} component={Login} />
    </Navigator>
  );
};
