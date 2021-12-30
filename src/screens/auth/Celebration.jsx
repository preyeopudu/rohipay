import React from "react";
import { View, Text } from "react-native";
import Success from "../../components/Successful";

export const PersonalSuccesful = () => {
  return <Success text="Personal" />;
};

export const BusinessSuccesful = () => {
  return <Success text="Business" />;
};

export const MerchantSuccesful = () => {
  return <Success text="Merchant" />;
};
