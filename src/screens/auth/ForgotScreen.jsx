import React from "react";
import {
  View,
  TextInput,
  Keyboard,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { scale, ScaledSheet } from "react-native-size-matters";
import Action from "../../components/Action";
import { useNavigation } from "@react-navigation/native";
import Navheader from "../../components/NavHeader";

const ForgotScreen = () => {
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
              Enter your registered mobile number or email address to get a OTP
              to reset your MPIN.
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Registered mobile no or email address"
              style={styles.input}
            />
          </View>

          <View style={styles.bottomContainer}>
            <Action
              fill={true}
              onPress={() => {
                navigate("OTP");
              }}
            >
              Send code
            </Action>
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
    marginBottom: 36,
    flex: 1,
  },
});

export default ForgotScreen;
