import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import DashboardStack from "./DashboardStack";

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="dashboard" component={DashboardStack} />
    </Drawer.Navigator>
  );
};

export default DrawerStack;
