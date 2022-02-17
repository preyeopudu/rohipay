import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect } from "react";
import TransferScreen from "../screens/dashboard/TransferScreen";
import DashboardScreen from "../screens/dashboard/DashboardScreen";
import ScannerScreen from "../screens/dashboard/TransferScreens/ScannerScreen";
import EmailScreen from "../screens/dashboard/TransferScreens/EmailScreen";
import PhoneScreen from "../screens/dashboard/TransferScreens/PhoneScreen";
import Pay from "../components/Pay";
import Receipt from "../screens/dashboard/TransferScreens/ReceiptScreen";
import BankScreen from "../screens/dashboard/TransferScreens/BankScreen";
import ConfirmScreen from "../screens/dashboard/TransferScreens/ConfirmScreen";

const Stack = createStackNavigator();

const DashboardStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={DashboardScreen} />
      <Stack.Screen name="transfer" component={TransferScreen} />
      <Stack.Screen name="scan" component={ScannerScreen} />
      <Stack.Screen name="email" component={EmailScreen} />
      <Stack.Screen name="phone" component={PhoneScreen} />
      <Stack.Screen name="bank" component={BankScreen} />
      <Stack.Screen name="pay" component={Pay} />
      <Stack.Screen name="receipt" component={Receipt} />
      <Stack.Screen name="confirm" component={ConfirmScreen} />
    </Stack.Navigator>
  );
};

export default DashboardStack;
