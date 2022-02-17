import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
} from "react-native";
import Navheader from "../../../components/NavHeader";
import { ScaledSheet } from "react-native-size-matters";
import Action from "../../../components/Action";
import { useNavigation } from "@react-navigation/core";

const EmailScreen = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#fff",
      }}
    >
      <Navheader />
      <Text
        style={{
          fontFamily: "Inter",
          color: "#42526E",
          fontSize: 20,
          marginHorizontal: 40,
          marginTop: 20,
          marginBottom: 10,
        }}
      >
        Send Money using Email address
      </Text>
      <TouchableWithoutFeedback
        style={{ height: "100%" }}
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View
          style={{
            alignItems: "center",
            width: "100%",
            flex: 1,
          }}
        >
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Recipient’s email address"
              style={styles.input}
              onChangeText={(val) => setEmail(val)}
            />
          </View>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "flex-end",
              flex: 1,
              marginBottom: 30,
              width: "80%",
            }}
          >
            <Action
              onPress={() => {
                navigation.navigate("pay");
              }}
              fill={true}
            >
              Verify and pay
            </Action>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = ScaledSheet.create({
  inputContainer: {
    backgroundColor: "#FAFBFC",
    borderWidth: 1,
    borderColor: "#DFE1E6",
    width: "300@s",
    paddingVertical: 10,
    marginVertical: 12,
  },
  input: {
    fontSize: "14@s",
    marginLeft: 10,
  },
});

export default EmailScreen;
