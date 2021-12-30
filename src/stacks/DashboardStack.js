import { createDrawerNavigator } from "@react-navigation/drawer";
import DashboardScreen from "../screens/dashboard/DashboardScreen";
import React from "react";
import TransferScreen from "../screens/dashboard/TransferScreen";

const Drawer = createDrawerNavigator();

const DashboardStack = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="home" component={DashboardScreen} />
      <Drawer.Screen name="transfer" component={TransferScreen} />
    </Drawer.Navigator>
  );
};

export default DashboardStack;
