import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Login, Menu } from "../screens";

export const AppNavigationStack: React.FC = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="menu" component={Menu} />
      <Screen name="login" component={Login} />
    </Navigator>
  );
};
