import React from "react";
import { View, Keyboard, Text, TouchableWithoutFeedback } from "react-native";
import { scale, ScaledSheet } from "react-native-size-matters";
import Action from "./Action";
import { useNavigation } from "@react-navigation/native";
import Navheader from "./NavHeader";
import { TouchableOpacity } from "react-native-gesture-handler";
import OTPInputView from "@twotalltotems/react-native-otp-input";

const OTP = (props) => {
  const { navigate } = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#fff",
      }}
    >
      <Navheader />
      <TouchableWithoutFeedback
        style={{ height: "100%" }}
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={{ alignItems: "center", width: "100%", flex: 1 }}>
          <View style={styles.textContainer}>
            <Text style={styles.heading}>Forgot your MPIN?</Text>
            <Text style={styles.subheading}>
              Please enter the OTP sent to your mobile number.IN.
            </Text>
          </View>
          <View style={styles.otpContainer}>
            <OTPInputView
              style={{ width: "80%", height: 200, backgroundColor: "#fff" }}
              pinCount={4}
              autoFocusOnLoad
              codeInputFieldStyle={styles.underlineStyleBase}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
            />
          </View>

          <View style={styles.bottomContainer}>
            <Action
              fill={true}
              onPress={() => {
                navigate(props.navigate);
              }}
            >
              Confirm code
            </Action>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Text
                style={{
                  marginRight: 5,
                  fontSize: scale(12),
                  color: "#42526E",
                }}
              >
                Didn’t receive anything?
              </Text>
              <View>
                <TouchableOpacity>
                  <Text style={{ fontSize: scale(12), color: "#42526E" }}>
                    Resend code
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = ScaledSheet.create({
  textContainer: {
    width: "300@s",
    marginTop: "25@s",
  },
  heading: {
    fontFamily: "Inter",
    fontWeight: "bold",
    fontSize: "22@s",
    color: "#42526E",
  },
  subheading: {
    fontWeight: "normal",
    color: "#42526E",
    fontSize: "13@s",
    fontFamily: "Inter",
    marginVertical: "10@s",
  },
  buttonContainer: {
    marginVertical: "40@s",
  },
  inputContainer: {
    backgroundColor: "#FAFBFC",
    borderWidth: 1,
    borderColor: "#DFE1E6",
    width: "300@s",
    paddingVertical: 10,
    marginVertical: 12,
  },
  input: {
    fontSize: "12@s",
    width: "260@s",
    marginLeft: 20,
  },
  bottomContainer: {
    width: "300@s",
    justifyContent: "flex-end",
    marginBottom: 50,
    flex: 1,
  },
  otpContainer: {
    alignItems: "center",
    width: "100%",
  },

  underlineStyleBase: {
    width: 60,
    height: 60,
    borderWidth: 1,
    backgroundColor: "#FAFBFC",
  },

  underlineStyleHighLighted: {
    borderColor: "#DFE1E6",
  },
});

export default OTP;
