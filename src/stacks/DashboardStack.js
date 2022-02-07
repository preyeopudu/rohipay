import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect } from "react";
import TransferScreen from "../screens/dashboard/TransferScreen";
import DashboardScreen from "../screens/dashboard/DashboardScreen";

const Stack = createStackNavigator();

const DashboardStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={DashboardScreen} />
      <Stack.Screen name="transfer" component={TransferScreen} />
    </Stack.Navigator>
  );
};

export default DashboardStack;
