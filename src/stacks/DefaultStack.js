import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HomeScreen from "../screens/auth/HomeScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import ForgotScreen from "../screens/auth/ForgotScreen";
import RegisterScreen from "../screens/auth/Registerscreen";
import SetPasswordScreen from "../screens/auth/SetPasswordScreen";
import SuccesfulScreen from "../screens/auth/SuccessfulScreen";
import PinScreen from "../screens/auth/PinScreen";
import AccountScreen from "../screens/auth/AccountScreen";
import VerificationScreen from "../screens/auth/VerificationScreen";
import { PersonalSuccesful } from "../screens/auth/Celebration";
import PersonalDetails from "../screens/auth/details/PersonalDetails";
import BusinesstDetails from "../screens/auth/details/BusinessDetails";
import MerchantDetails from "../screens/auth/details/MerchantDetails";
import OTPScreen from "../screens/auth/OTPScreen";
import NextDetails from "../screens/auth/details/NextDetails";

const Stack = createStackNavigator();
const DefaultStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={HomeScreen} name="Home" />
      <Stack.Screen component={RegisterScreen} name="Register" />
      <Stack.Screen component={LoginScreen} name="Login" />
      <Stack.Screen component={ForgotScreen} name="Forgot" />
      <Stack.Screen component={SetPasswordScreen} name="SetPassword" />
      <Stack.Screen component={SuccesfulScreen} name="Success" />
      <Stack.Screen component={PinScreen} name="Pin" />
      <Stack.Screen component={AccountScreen} name="Account" />
      <Stack.Screen component={VerificationScreen} name="Verification" />
      <Stack.Screen component={PersonalDetails} name="personaldetail" />
      <Stack.Screen component={BusinesstDetails} name="businessdetail" />
      <Stack.Screen component={MerchantDetails} name="merchantdetail" />
      <Stack.Screen component={PersonalSuccesful} name="SuccessPersonal" />
      <Stack.Screen component={OTPScreen} name="OTP" />
      <Stack.Screen component={NextDetails} name="NextDetails" />
    </Stack.Navigator>
  );
};

export default DefaultStack;
