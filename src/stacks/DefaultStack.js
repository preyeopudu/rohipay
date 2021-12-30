import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HomeScreen from "../screens/auth/HomeScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import ForgotScreen from "../screens/auth/ForgotScreen";
import {
  BusinessOTP,
  MerchantOTP,
  PersonalOTP,
} from "../screens/auth/OTPScreen";
import SetPasswordScreen from "../screens/auth/SetPasswordScreen";
import SuccesfulScreen from "../screens/auth/SuccessfulScreen";
import PinScreen from "../screens/auth/PinScreen";
import AccountScreen from "../screens/auth/AccountScreen";
import VerificationScreen from "../screens/auth/VerificationScreen";
import { PersonalSuccesful } from "../screens/auth/Celebration";
import PersonalRegister from "../screens/auth/register/PersonalRegister";
import BusinessRegister from "../screens/auth/register/BusinessRegister";
import MerchantRegister from "../screens/auth/register/MerchantRegister";
import PersonalDetails from "../screens/auth/details/PersonalDetails";
import BusinesstDetails from "../screens/auth/details/BusinessDetails";
import MerchantDetails from "../screens/auth/details/MerchantDetails";

const Stack = createStackNavigator();
const DefaultStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={HomeScreen} name="Home" />
      <Stack.Screen component={LoginScreen} name="Login" />
      <Stack.Screen component={ForgotScreen} name="Forgot" />
      <Stack.Screen component={SetPasswordScreen} name="SetPassword" />
      <Stack.Screen component={SuccesfulScreen} name="Success" />
      <Stack.Screen component={PinScreen} name="Pin" />
      <Stack.Screen component={AccountScreen} name="Account" />
      <Stack.Screen component={MerchantRegister} name="MerchantSignup" />
      <Stack.Screen component={PersonalRegister} name="PersonalSignup" />
      <Stack.Screen component={BusinessRegister} name="BuisnessSignup" />
      <Stack.Screen component={VerificationScreen} name="Verification" />
      <Stack.Screen component={PersonalOTP} name="personalotp" />
      <Stack.Screen component={BusinessOTP} name="businessotp" />
      <Stack.Screen component={MerchantOTP} name="merchantotp" />
      <Stack.Screen component={PersonalDetails} name="personaldetail" />
      <Stack.Screen component={BusinesstDetails} name="businessdetail" />
      <Stack.Screen component={MerchantDetails} name="merchantdetail" />
      <Stack.Screen component={PersonalSuccesful} name="SuccessPersonal" />
    </Stack.Navigator>
  );
};

export default DefaultStack;
