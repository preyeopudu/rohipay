import React from "react";
import { View, Keyboard, Text, TouchableWithoutFeedback } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";
import Navheader from "../../components/NavHeader";
import AccountButton from "../../components/AccountButton";

const AccountScreen = () => {
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
            <Text style={styles.heading}>Choose your account type</Text>
            <Text style={styles.subheading}>
              Choose an account type that would best fit your current condition.
            </Text>
          </View>

          <AccountButton
            heading="Personal"
            subheading="Ideal for individual users"
            onPress={() => {
              navigate("PersonalSignup");
            }}
          />
          <AccountButton
            onPress={() => {
              navigate("BuisnessSignup");
            }}
            heading="Business"
            subheading="Ideal for all types or business to send and receive money on your account"
          />
          <AccountButton
            onPress={() => {
              navigate("MerchantSignup");
            }}
            heading="Merchant"
            subheading="Ideal for small. medium & large business"
          />
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
    fontWeight: "normal",
    fontSize: "20@s",
    color: "#42526E",
  },
  subheading: {
    fontWeight: "normal",
    color: "#42526E",
    fontSize: "12@s",
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

export default AccountScreen;
