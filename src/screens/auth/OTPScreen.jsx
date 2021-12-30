import React from "react";
import { ScaledSheet } from "react-native-size-matters";

import OTP from "../../components/OTP";

export const PersonalOTP = () => {
  return <OTP navigate="personaldetail" />;
};

export const BusinessOTP = () => {
  return <OTP navigate="businessdetail" />;
};

export const MerchantOTP = () => {
  return <OTP navigate="merchantdetail" />;
};
