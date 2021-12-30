import DashboardStack from "./DashboardStack";
import DefaultStack from "./DefaultStack";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

const RootStack = () => {
  const data = useSelector((s) => s);
  const auth = data.AuthReducer;
  console.log(data);
  return (
    <NavigationContainer>
      {auth ? <DashboardStack /> : <DefaultStack />}
    </NavigationContainer>
  );
};

export default RootStack;
