import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Menu, Demons, ConfigureDemon, Record } from "../screens";

export const AppNavigationStack: React.FC = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="menu" component={Menu} />
      <Screen name="demons" component={Demons} />
      <Screen name="demon" component={ConfigureDemon} />
      <Screen name="record" component={Record} />
    </Navigator>
  );
};
